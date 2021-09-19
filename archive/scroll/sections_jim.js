var scrollViz = function() {
    let w = 1250;
    let h = 700;

    let margin = {top: 20, bottom: 0, left: 70, right: 40 };
    let width = w - margin.left - margin.right;
    let height = h - margin.top - margin.bottom

    // keep track of which viz is being activated.
    var lastIndex = -1;
    var activeIndex = 0;

    // main svg used for visualization
    var svg = null;

    // d3 selection to display visualization
    var g = null;

    var activateFunctions = [];
    var updateFunctions = [];


// Create Chart here
var chart = function (selection) {
    selection.each(function (firstData, secondData, thirdData, fourthData) {
      // create svg and give it a width and height
      svg = d3.select(this).selectAll('svg').data();
      var svgE = svg.enter().append('svg');
      // @v4 use merge to combine enter and existing selection
      svg = svg.merge(svgE);

      svg.attr('width', width + margin.left + margin.right);
      svg.attr('height', height + margin.top + margin.bottom);

      svg.append('g');


      // this group element will be used to contain all
      // other elements.
      g = svg.select('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // perform some preprocessing on raw data
      var mapData = firstMap(firstData);
      var fujianData = secondMap(secondData);
      var fillerData = getBubble(thirdData);
      var recipeData = getBubble(fourthData);
  
      setupSections();
    });
  };

  /**
   * setupVis - creates initial elements for all
   * sections of the visualization.
   *
   * @param mapData - data for map of parts of Asia.
   * @param fujianMap - data of zoomed map
   * @param fillerData - data to put pics
   * @param recipeData - data of recipe
   */

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  var setupSections = function () {
    // activateFunctions are called each
    // time the active section changes
    activateFunctions[0] = showTitle;
    activateFunctions[1] = showFillerTitle;
    activateFunctions[2] = showMap;
    activateFunctions[3] = highlightMap;
    activateFunctions[4] = showFood;
    activateFunctions[5] = showRecipes;


    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 9; i++) {
      updateFunctions[i] = function () {};
    };
  };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
  /**
   * showTitle - initial title
   *
   * hides: count title
   * (no previous step to hide)
   * shows: intro title
   *
   */
  function showTitle() {
    g.selectAll('.count-title')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.openvis-title')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }

  /**
   * showFillerTitle - filler counts
   *
   * hides: intro title
   * hides: square grid
   * shows: filler count title
   *
   */
  function showFillerTitle() {
    g.selectAll('.openvis-title')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.square')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.count-title')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }

  /**
   * showGrid - square grid
   *
   * hides: filler count title
   * hides: filler highlight in grid
   * shows: square grid
   *
   */

  /**
   * First Map - maps raw data to
   * array of data objects. There is
   * one data object for each word in the speach
   * data.
   *
   * This function converts some attributes into
   * numbers and adds attributes used in the visualization
   *
   * @param firstMap - data read in from file
   */
   function showMap() {
    d3.json('countries.json').then(function (firstMap) { 

      let places = topojson.feature(firstMap, firstMap.objects.gadm36)
      console.log(places)

      let myProjection = d3.geoMercator()
          .rotate([-100, 0])
          .scale(300)
          .translate([(width) / 2, height * 1 / 2])

      //path function
      let path = d3.geoPath(myProjection)

      let color = d3.scaleLinear()
       .domain([6190, 12500, 70000, 200000, 760000, 13500000, 28000000])
      .range(["#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"])

      var legendText = ["", "10k", "", "200k", "", "1.5m", "", "200m"];
      var legendColors = ["#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"];

      let shapes = svg.append("g")
          .selectAll("path")
          .data(places.features)
          .join("path")
          .attr("d", path) // the d attribute defines the path to be drawn.
          .style("stroke", "white")
          .style("stroke-width", 0.5)
          .style("fill", function(d) {
               var value = d.properties.number;
               if(value) {
                   return color(value);
               } else {
                   return "#ccc"
               }
              
           })
          .attr("class", function (d) { return "shapes p-" + d.properties.places}) 
          .attr("opacity", 0.9)

      //http://bl.ocks.org/dougdowson/9832019
      var legend = svg.append("g")
      .attr("id", "legend");

    var legenditem = legend.selectAll(".legenditem")
      .data(d3.range(8))
      .enter()
      .append("g")
        .attr("class", "legenditem")
        .attr("transform", function(d, i) { return "translate(" + i * 31 + ",0)"; });

      legenditem.append("rect")
          .attr("x", width - 240)
          .attr("y", -7)
          .attr("width", 30)
          .attr("height", 6)
          .attr("class", "rect")
          .style("fill", function(d, i) { return legendColors[i]; });

      legenditem.append("text")
          .attr("x", width - 240)
          .attr("y", -10)
          .style("text-anchor", "middle")
          .text(function(d, i) { return legendText[i]; });

      let annotations = [
          {note: {
              label: "Chinese Filippinos are one of the largest overseas Chinese communities in Southeast Asia",
              align: "left"},
              x: 700, y: 270,
              dx: 130, dy: 20,
              type: d3.annotationLabel
          },
          {note: {
              label: "Earliest migrants came as indentured laborers in 1840s",
              align: "left"},
              x: 800, y: 550,
              dx: 40, dy: 30,
              type: d3.annotationLabel
          },
          {
              note: {
                  label: "Settlements date back to 13th century",
                  align: "right"},
              x: 595, y: 275, dx: -55, dy: 30,
              type: d3.annotationLabel
          },
          {
              note: {
                  label: "Minnan speakers originate in Southeast of China",
                  align: "left"
              },
              x: 650, y: 210, dx: 180, dy: -30,
              type: d3.annotationLabel
          }
      ]      
      svg.append("g")
          .attr("class", "descriptions-firstmap")
          .call(d3.annotation().annotations(annotations))
          
      })
  }
  

  /**
   * highlightGrid - show fillers in grid
   *
   * hides: barchart, text and axis
   * shows: square grid and highlighted
   *  filler words. also ensures squares
   *  are moved back to their place in the grid
   */
  function highlightMap() {
    hideAxis();
    g.selectAll('.bar')
      .transition()
      .duration(600)
      .attr('width', 0);

    g.selectAll('.bar-text')
      .transition()
      .duration(0)
      .attr('opacity', 0);


    g.selectAll('.square')
      .transition()
      .duration(0)
      .attr('opacity', 1.0)
      .attr('fill', '#ddd');

      d3.json('withhk.json').then(function (secondMap) { 

        let places = topojson.feature(secondMap, secondMap.objects.province)
        let fujian = topojson.feature(secondMap, secondMap.objects.city)

        console.log(places, fujian)

        let myProjection = d3.geoMercator()
            .rotate([-110, 0])
            .scale(2500)
            .translate([(width) / 2, height * 4.3 / 2])

        //path function
        let path = d3.geoPath(myProjection)

        let innerlines = topojson.mesh(secondMap, secondMap.objects.province, function (a, b) {
            return a != b;})

        // highlight fujian /taiwan
        svg.append("g")
            .attr("class", "province")
            .selectAll("path")
            .data(places.features)
            .join("path")
            .attr("d", path) // the d attribute defines the path to be drawn.
            .style("opacity", function(d){ if(d.properties.ADM1_PCODE=="CN035" || d.properties.ADM1_PCODE=="CN071" ){return 0.9} else {return 0.4}})
            .style("fill","#993404")
            .style("stroke-width", 2) 
        
        // style as inner line
        svg
             .append("path")
             .attr("d", path(innerlines))
             .style("fill", "none")
             .style("stroke", "white")
             .style("stroke-width", 1.2)

        //add HK
        svg.append("g")
            .attr("class", "cities")
            .selectAll("path")
            .data(fujian.features)
            .join("path")
            .attr("d", path) // the d attribute defines the path to be drawn.
            .style("fill", "#993404")
            .style("stroke", "whiteblack")
            
        })

  }

  /**
   * showFood 
   *
   * hides: square grid
   * hides: histogram
   * shows: barchart
   *
   */
  function showFood() {
    var color = d3.scaleOrdinal([`#f4cf3b`, `#d85e64`, `#601d0f`, `#7f9c88`, `#c9b8b6`, `#444442`, `#946943`]);
    var centerScale = d3.scalePoint().padding(1).range([0, w]);
    
    var svg = d3.select("body").append("svg")
      .attr("width", w)
      .attr("height", h)

    var defs = svg.append("defs");

    defs.append("pattern")
    
    d3.csv("fakedata.csv").then(function(thirdMap) {
        console.log("loaded")
      
        data.forEach(function (row) {
            row.x = + w / 2;
            row.y = + h / 2;
      })
      
      console.log(data); 
           
            
    var forceX = d3.forceX(function(d) {
        if(d.dish == "Wonton Soup 扁肉") {
            return 250
        } else if (d.dish == "Fish Ball Soup 魚蛋湯") {
            return 520 
        } else if (d.dish == "Oyster Omelette 蚵仔煎") {
            return 790 
        }  else {
            return 1080
        }                
    })

        
    
    // adapted from: https://bl.ocks.org/SpaceActuary/d6b5ca8e5fb17842d652d0de21e88a05
    //https://www.youtube.com/watch?v=NTS7uXOxQeM
    var simulation = d3.forceSimulation()
        .force("collide",d3.forceCollide(5)) 
        .force("charge", d3.forceManyBody())
        .force("y", d3.forceY().y(h/2).strength(0.05))
        .force("x", forceX.strength(0.05))
  
  var circles = svg.selectAll("circle")
    .data(data, function(d){ return d.ID ;});
  
  var circlesEnter = circles.enter().append("circle")
    .attr("class", function (d) { return "circles p-" + d.ID})
    .attr("r", 100)
    .style("fill", function(d){ return "url(#" + d.ID + ")" })
    .style("stroke", "white")
    .style("stroke-width", 1)

  circles = circles.merge(circlesEnter)
  
  function ticked() {
    circles
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; });
  }

  simulation
        .nodes(data)
        .on("tick", ticked);

  defs.selectAll(".foods-pattern")
    .data(data)
    .enter().append("pattern")
    .attr("class", "foods-pattern")
    .attr("id", function(d) {
        return d.ID
    })
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
    .attr("height", 1)
    .attr("width", 1)
    .attr("preserveAspectRatio", "none")
    .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
    .attr("xlink:href", function(d) {
        return d.image_path
    })
  
// mouseover bubbles
let popup = d3.select(".pop-up");

circles.on("mouseover", (event, d) => {   
    
    circles
        .style("stroke", "white")
        .style("stroke-width", 1)
        .style("fill-opacity", 1)

    svg.select(".p-" + d.ID) // make every selection unique - calling back the class we defined.
        .style("stroke-width", 5)
        .style("fill-opacity", 0.7)
        .style("fill", function(d, i){ return color(d.dish); })
        .raise()

let lang = d.description 

popup
    .style("opacity", 1)
    .style("left", (event.x + 20) + "px")
    .style("top", (event.y - 20) + "px")
    .html(lang)
})

.on("mouseout", (event, d) => {
console.log(event)

circles
    svg.select(".p-" + d.ID)
    .style("stroke-width", 5)
    .style("opacity", 1) // after you leave the hover, change back to 0.5
    .style("fill", function(d){ return "url(#" + d.ID + ")" })
    .raise()

popup
    .style("opacity", 0) // pop up becomes invisible when we mouseout
})

// Add labels
svg.append("text")
              .attr("class", "label")
              .attr("x", 190)
              .attr("y", 420)
              .text("Wonton Soup 扁肉")
              .style("fill", "black")

svg.append("text")
    .attr("class", "label")
    .attr("x", 430)
    .attr("y", 420)
    .text("Fish Ball Soup 魚蛋湯")
    .style("fill", "black")

svg.append("text")
    .attr("class", "label")
    .attr("x", 690)
    .attr("y", 420)
    .text("Oyster Omelette 蚵仔煎")
    .style("fill", "black")

svg.append("text")
    .attr("class", "label")
    .attr("x", 1000)
    .attr("y", 420)
    .text("Popiah 薄餅皮")
    .style("fill", "black")
})
}

  /**
   * showHistPart - shows the first part
   *  of the histogram of filler words
   *
   * hides: barchart
   * hides: last half of histogram
   * shows: first half of histogram
   *
   */
  function showRecipes() {
  // color palette: 
  var color = d3.scaleOrdinal([`#f4cf3b`, `#d85e64`, `#601d0f`, `#7f9c88`, `#c9b8b6`, `#444442`]);
  var centerScale = d3.scalePoint().padding(1).range([0, w]);
  
  var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h)
  
  d3.csv("ingredients.csv").then(function(data) {
      console.log("loaded")
    
      data.forEach(function (row) {
          row.x = + w / 2;
          row.y = + h / 2;
    })
    
    console.log(data); 
         
    const z = d3.scaleSqrt()
          .domain([1, d3.max(data, function(d) {return d.grams})])
    .range([1, 20]);
          
          var forceX = d3.forceX(function(d) {
              if(d.dish == "Wonton Soup 扁肉") {
                  return 270
              } else if (d.dish == "Fish Ball Soup 魚蛋湯") {
                  return 520 
              } else if (d.dish == "Oyster Omelette 蚵仔煎") {
                  return 770 
              }  else {
                  return 1050
              }                
          })
      
      // adapted from: https://bl.ocks.org/SpaceActuary/d6b5ca8e5fb17842d652d0de21e88a05
      //https://www.youtube.com/watch?v=NTS7uXOxQeM
      var simulation = d3.forceSimulation()
          .force("collide",d3.forceCollide( function(d){
              return z(d.grams) + 1 }) 
          )
          .force("charge", d3.forceManyBody())
          .force("y", d3.forceY().y(h/2).strength(0.4))
          .force("x", forceX.strength(0.5))
    
    var circles = svg.selectAll("circle")
      .data(data, function(d){ return d.ID ;});
    
    var circlesEnter = circles.enter().append("circle")
      .attr("class", function (d) { return "circles p-" + d.ID})
      .attr("r", d => z(d.grams))
      .style("fill", function(d, i){ return color(d.group); })
      .style("stroke", function(d, i){ return color(d.group); })
      .style("stroke-width", 1)

    circles = circles.merge(circlesEnter)
    
    function ticked() {
      circles
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; });
    }

    simulation
          .nodes(data)
          .on("tick", ticked);
    
  // mouseover bubbles
  let popup = d3.select(".pop-up");

  circles.on("mouseover", (event, d) => {   
      
      circles
          .style("stroke", "white")
          .style("stroke-width", 1)
          .style("fill-opacity", 1)

      svg.select(".p-" + d.ID) // make every selection unique - calling back the class we defined.
          .style("stroke-width", 5)
          .style("fill-opacity", 0.7)
          .raise()

  let lang = "<b>" + d.ingredient + ": </b>" + d.grams + " grams"

  popup
      .style("opacity", 1)
      .style("left", (event.x + 20) + "px")
      .style("top", (event.y - 20) + "px")
      .html(lang)
  })

  .on("mouseout", (event, d) => {
  console.log(event)

  circles
      svg.select(".p-" + d.ID)
      .style("stroke-width", 5)
      .style("opacity", 1) // after you leave the hover, change back to 0.5
      .raise()

  popup
      .style("opacity", 0) // pop up becomes invisible when we mouseout
  })

  // Add labels
  svg.append("text")
               .attr("class", "label")
               .attr("x", 190)
               .attr("y", 420)
               .text("Wonton Soup 扁肉")
               .style("fill", "black")
  
  svg.append("text")
      .attr("class", "label")
      .attr("x", 430)
      .attr("y", 420)
      .text("Fish Ball Soup 魚蛋湯")
      .style("fill", "black")

  svg.append("text")
      .attr("class", "label")
      .attr("x", 690)
      .attr("y", 420)
      .text("Oyster Omelette 蚵仔煎")
      .style("fill", "black")

  svg.append("text")
      .attr("class", "label")
      .attr("x", 1000)
      .attr("y", 420)
      .text("Popiah 薄餅皮")
      .style("fill", "black")


  // add legend
  //https://embed.plnkr.co/plunk/gE1xQu
  var legend = svg.selectAll('.legend')                     
        .data(color.domain())                                   
        .enter()                                                
        .append('g')                                            
        .attr('class', 'legend')                                
        .attr('transform', function(d, i) {                     
          var wid = 100;          
          var offset =  wid * color.domain().length / 2;     
          var vert = 500;                       
          var horz = i * wid - offset;                       
          return 'translate(' + horz + ',' + vert + ')';        
        });                                                     

      legend.append('rect')                                     
        .attr('width', 60)                          
        .attr('height', 20)                         
        .style('fill', color)                                   
        .style('stroke', color)
        .attr('x', 900)                               
        
      legend.append('text')                                     
        .attr('x', 900)              
        .attr('y', 40)              
        .text(function(d) { return d; });                       
  })
  }

  /**
   * showHistAll - show all histogram
   *
   * hides: cough title and color
   * (previous step is also part of the
   *  histogram, so we don't have to hide
   *  that)
   * shows: all histogram bars
   *
   */

  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**
   * updateCough - increase/decrease
   * cough text and color
   *
   * @param progress - 0.0 - 1.0 -
   *  how far user has scrolled in section
   */

  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */


  


  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function (index) {
    activeIndex = index;
    var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function (i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function (index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};


/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display(data) {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select('#vis')
    .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller()
    .container(d3.select('#graphic'));

  // pass in .step selection as the steps
  scroll(d3.selectAll('.step'));

  // setup event handling
  scroll.on('active', function (index) {
    // highlight current step text
    d3.selectAll('.step')
      .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    // activate current section
    plot.activate(index);
  });

  scroll.on('progress', function (index, progress) {
    plot.update(index, progress);
  });
}
