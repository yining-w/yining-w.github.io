let w = 1050;
let h = 700;

let margin = {top: 0, bottom: 0, left: 0, right: 0 };
let width = w - margin.left - margin.right;
let height = h - margin.top - margin.bottom

let firstchart = d3.select("body").select("#first-chart").attr("width", 500).attr("height", height)
let secondchart = d3.select("body").select("#second-chart").attr("height", height)
let thirdchart = d3.select("body").select("#third-chart").attr("width", width).attr("height", 300)
let fourthchart = d3.select("body").select("#fourth-chart").attr("width", width).attr("height", 300)



  // First Map
  d3.json('countries.json').then(function (firstMap) { 
    
    let places = topojson.feature(firstMap, firstMap.objects.gadm36)
    console.log(places)
    
    let myProjection = d3.geoMercator()
        .rotate([-170, 0])
        .scale(300)
        .translate([(width) / 2, height * 1 / 2])

    //path function
    let path = d3.geoPath(myProjection)

    let color = d3.scaleLinear()
    .domain([6190, 12500, 70000, 200000, 760000, 13500000, 28000000])
    .range(["#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"])
    
    var legendText = ["", "10k", "", "200k", "", "1.5m", "", "200m"];
    var legendColors = ["#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"];

    let shapes = firstchart.append("g")
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
      var legend = firstchart.append("g")
          .attr("id", "legend");

      var legenditem = legend.selectAll(".legenditem")
            .data(d3.range(8))
            .enter()
            .append("g")
            .attr("class", "legenditem")
            .attr("transform", function(d, i) { return "translate(" + i * 31 + ",0)"; });
    
          legenditem.append("rect")
            .attr("x", 10)
            .attr("y", 650)
            .attr("width", 30)
            .attr("height", 6)
            .attr("class", "rect")
            .style("fill", function(d, i) { return legendColors[i]; });
      
          legenditem.append("text")
            .attr("x", 10)
            .attr("y", 644)
            .style("text-anchor", "middle")
            .text(function(d, i) { return legendText[i]; });
    
          let annotations = [
              {note: {
                  label: "Chinese Filippinos are one of the largest overseas Chinese communities in Southeast Asia",
                  align: "left"},
                  x: 265, y: 270,
                  dx: 130, dy: 20,
                  type: d3.annotationLabel
              },
              {note: {
                  label: "Earliest migrants came as indentured laborers in 1840s",
                  align: "right"},
                  x: 225, y: 500,
                  dx: -40, dy: 10,
                  type: d3.annotationLabel
              },
              {
                  note: {
                      label: "Settlements date back to 13th century",
                      align: "right"},
                  x: 185, y: 275, dx: -55, dy: 30,
                  type: d3.annotationLabel
              },
              {
                  note: {
                      label: "Minnan speakers originate in Southeast of China",
                      align: "left"
                  },
                  x: 245, y: 210, dx: 180, dy: -30,
                  type: d3.annotationLabel
              }
          ]      
          firstchart.append("g")
              .attr("class", "descriptions-firstmap")
              .call(d3.annotation().annotations(annotations))
              
            })
        
      
    

  // Second Map
  d3.json('withhk.json').then(function (secondMap) { 
    let provinces = topojson.feature(secondMap, secondMap.objects.province)
    let fujian = topojson.feature(secondMap, secondMap.objects.city)

    console.log(provinces, fujian)

    let myProjection = d3.geoMercator()
        .rotate([-123, 0])
        .scale(2500)
        .translate([(width) / 2, height * 4.3 / 2])

    //path function
    let path = d3.geoPath(myProjection)

    let innerlines = topojson.mesh(secondMap, secondMap.objects.province, function (a, b) {
        return a != b;})
    
    // highlight fujian /taiwan
    secondchart.append("g")
        .attr("class", "province")
        .selectAll("path")
        .data(provinces.features)
        .join("path")
        .attr("d", path) // the d attribute defines the path to be drawn.
        .style("opacity", function(d){ if(d.properties.ADM1_PCODE=="CN035" || d.properties.ADM1_PCODE=="CN071" ){return 0.9} else {return 0.4}})
        .style("fill","#993404")
        .style("stroke-width", 2) 
    
    // style as inner line
    secondchart
          .append("path")
          .attr("d", path(innerlines))
          .style("fill", "none")
          .style("stroke", "white")
          .style("stroke-width", 1.2)

    //add HK
    secondchart.append("g")
        .attr("class", "cities")
        .selectAll("path")
        .data(fujian.features)
        .join("path")
        .attr("d", path) // the d attribute defines the path to be drawn.
        .style("fill", "#993404")
        .style("stroke", "whiteblack")

        let annotations = [
          {
              note: {
                  label: "The Southern Fujian ethnic group makes up 73% of the country's population",
                  align: "left"},
              x: 450, y: 505, dx: 10, dy: 20,
              type: d3.annotationLabel
          },
          {
              note: {
                  label: "Many fled to Hong Kong during the Great Leap Forward in the late 50s",
                  align: "left"
              },
              x: 140, y: 500, dx: -10, dy: 40,
              type: d3.annotationLabel
          },

      ]      
      secondchart.append("g")
          .attr("class", "descriptions-firstmap")
          .call(d3.annotation().annotations(annotations))
      
      })
    
    
  //Third Chart
  var thirdColor = d3.scaleOrdinal([`#f4cf3b`, `#d85e64`, `#601d0f`, `#7f9c88`, `#c9b8b6`, `#444442`, `#946943`]);
  var centerScale = d3.scalePoint().padding(1).range([0, w]);

  var defs = thirdchart.append("defs");

  thirdchart.append("pattern")
  
  d3.csv("fakedata.csv").then(function(thirdData) {
      console.log("loaded")
    
      thirdData.forEach(function (row) {
          row.x = + w / 2;
          row.y = + 400 / 2;
    })
    
    console.log(thirdData); 
          
          
  var forceX = d3.forceX(function(d) {
      if(d.dish == "Wonton Soup 扁肉") {
          return 150
      } else if (d.dish == "Fish Ball Soup 魚蛋湯") {
          return 400
      } else if (d.dish == "Oyster Omelette 蚵仔煎") {
          return 650
      }  else {
          return 900
      }                
  })

  
  // adapted from: https://bl.ocks.org/SpaceActuary/d6b5ca8e5fb17842d652d0de21e88a05
  //https://www.youtube.com/watch?v=NTS7uXOxQeM
  var simulation = d3.forceSimulation()
      .force("collide",d3.forceCollide(5)) 
      .force("charge", d3.forceManyBody())
      .force("y", d3.forceY().y(200/2).strength(0.05))
      .force("x", forceX.strength(0.05))

  var circles = thirdchart.selectAll("circle")
    .data(thirdData, function(d){ return d.ID ;});

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
      .nodes(thirdData)
      .on("tick", ticked);

defs.selectAll(".foods-pattern")
  .data(thirdData)
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

    thirdchart.select(".p-" + d.ID) // make every selection unique - calling back the class we defined.
      .style("stroke-width", 5)
      .style("fill-opacity", 0.7)
      .style("fill", function(d){ return thirdColor(d.dish); })
      .raise()
      
  let lang = d.description 

  popup
    .style("opacity", 1)
    .style("left", (event.x) + "px")
    .style("top", (event.y + 1500) + "px")
//    .style("top", event.y + 800 + "px")
    .html(lang)
})

.on("mouseout", (event, d) => {
console.log(event)

circles
  thirdchart.select(".p-" + d.ID)
    .style("stroke-width", 5)
    .style("opacity", 1) // after you leave the hover, change back to 0.5
    .style("fill", function(d){ return "url(#" + d.ID + ")" })
    .raise()

  popup
    .style("opacity", 0) // pop up becomes invisible when we mouseout
  })

// Add labels
thirdchart.append("text")
            .attr("class", "label")
            .attr("x", 70)
            .attr("y", 250)
            .text("Wonton Soup 扁肉")
            .style("fill", "black")

  thirdchart.append("text")
  .attr("class", "label")
  .attr("x", 320)
  .attr("y", 250)
  .text("Fish Ball Soup 魚蛋湯")
  .style("fill", "black")

thirdchart.append("text")
  .attr("class", "label")
  .attr("x", 570)
  .attr("y", 250)
  .text("Oyster Omelette 蚵仔煎")
  .style("fill", "black")

thirdchart.append("text")
  .attr("class", "label")
  .attr("x", 820)
  .attr("y", 250)
  .text("Popiah 薄餅")
  .style("fill", "black")
})


/**
 * showRecipes 
 */
  // color palette: 
  var fourthColor = d3.scaleOrdinal([`#f4cf3b`, `#d85e64`, `#601d0f`, `#7f9c88`, `#c9b8b6`, `#444442`]);
  var fourthcenterScale = d3.scalePoint().padding(1).range([0, w]);
  
  d3.csv("ingredients.csv").then(function(data) {
      console.log("loaded")
    
      data.forEach(function (row) {
          row.x = + w / 2;
          row.y = + 400 / 2;
    })
    
    console.log(data); 
          
    const z = d3.scaleSqrt()
          .domain([1, d3.max(data, function(d) {return d.grams})])
          .range([1, 20]);
          
          var forceX = d3.forceX(function(d) {
            if(d.dish == "Wonton Soup 扁肉") {
                return 150
            } else if (d.dish == "Fish Ball Soup 魚蛋湯") {
                return 400
            } else if (d.dish == "Oyster Omelette 蚵仔煎") {
                return 650
            }  else {
                return 900
            }                
        })
          
          // adapted from: https://bl.ocks.org/SpaceActuary/d6b5ca8e5fb17842d652d0de21e88a05
          //https://www.youtube.com/watch?v=NTS7uXOxQeM
  var simulation = d3.forceSimulation()
      .force("collide",d3.forceCollide( function(d){
          return z(d.grams) + 1 }) 
      )
      .force("charge", d3.forceManyBody())
      .force("y", d3.forceY().y(400/2).strength(0.4))
      .force("x", forceX.strength(0.5))

  var circles = fourthchart.selectAll("circle")
    .data(data, function(d){ return d.ID ;});
  
  var circlesEnter = circles.enter().append("circle")
    .attr("class", function (d) { return "circles p-" + d.ID})
    .attr("r", d => z(d.grams))
    .style("fill", function(d, i){ return fourthColor(d.group); })
    .style("stroke", function(d, i){ return fourthColor(d.group); })
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
let popuptwo = d3.select(".pop-uptwo");

circles.on("mouseover", (event, d) => {   
    
    circles
        .style("stroke", "white")
        .style("stroke-width", 1)
        .style("fill-opacity", 1)

    fourthchart.select(".p-" + d.ID) // make every selection unique - calling back the class we defined.
        .style("stroke-width", 5)
        .style("fill-opacity", 0.7)
        .raise()

let langtwo = "<b>" + d.ingredient + ": </b>" + d.grams + " grams"

popuptwo
    .style("opacity", 1)
    .style("left", (event.x) +"px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
    .style("top", (event.y + 2000) + "px")
    //    .style("top", (d3.event.pageY-10)+"px")
    .html(langtwo)
})
    
.on("mouseout", (event, d) => {
console.log(event)

circles
    fourthchart.select(".p-" + d.ID)
    .style("stroke-width", 5)
    .style("opacity", 1) // after you leave the hover, change back to 0.5
    .raise()

popuptwo
    .style("opacity", 0) // pop up becomes invisible when we mouseout
})

// Add labels
fourthchart.append("text")
              .attr("class", "label")
              .attr("x", 70)
              .attr("y", 50)
              .text("Wonton Soup 扁肉")
              .style("fill", "black")

fourthchart.append("text")
    .attr("class", "label")
    .attr("x", 320)
    .attr("y", 50)
    .text("Fish Ball Soup 魚蛋湯")
    .style("fill", "black")

fourthchart.append("text")
    .attr("class", "label")
    .attr("x", 570)
    .attr("y", 50)
    .text("Oyster Omelette 蚵仔煎")
    .style("fill", "black")

fourthchart.append("text")
    .attr("class", "label")
    .attr("x", 870)
    .attr("y", 50)
    .text("Popiah 薄餅")
    .style("fill", "black")


// add legend
//https://embed.plnkr.co/plunk/gE1xQu
var legend = fourthchart.selectAll('.legend')                     
      .data(fourthColor.domain())                                   
      .enter()                                                
      .append('g')                                            
      .attr('class', 'legend')                                
      .attr('transform', function(d, i) {                     
        var wid = 100;          
        var offset =  wid * fourthColor.domain().length / 2;     
        var vert = 450;                       
        var horz = i * wid - offset;                       
        return 'translate(' + horz + ',' + vert + ')';        
      });                                                     

    legend.append('rect')                                     
      .attr('width', 60)                          
      .attr('height', 20)                         
      .style('fill', fourthColor)                                   
      .style('stroke', fourthColor)
      .attr('x', 600)                               
      
    legend.append('text')                                     
      .attr('x', 600)              
      .attr('y', 40)              
      .text(function(d) { return d; });                       
})

// start scroller
var scroller = scrollama();
function handleStepEnter(response) {
  response.element.style.opacity = 1;
      // what do you want it to do?
      // response the class of the svg = 1
}

function handleStepExit(response) {
  if (response.direction ===  'up') {
     response.element.style.opacity = 0.5;
  }
  // what do you want it to do?
  // response the class of the svg = 0
// if (response.direction == 'up')


}

scroller
  .setup({
    step: '.step',
    offset: 0.2
  })
  .onStepEnter(handleStepEnter)
  .onStepExit(handleStepExit);