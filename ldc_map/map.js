
// to fix:: turn hover tool into info bar on the side (maybe the bottom?)
// get all the countries to highlight
// find the countries that are null, remove antartica

// Set map size
let w = 200;
let h = 300;

// Set canvas options
let margin = {top: 250, bottom: 0, left: 600, right: 40 };
let width = w - margin.left - margin.right;
let height = h - margin.top - margin.bottom

// Set where to put the svg
let svg = d3.select("body").select("svg")
    .attr("viewbox", [0, 0, width, height])
    .attr("transform", "translate(0" + margin.left + "," + margin.top + ")");


// Read the data
d3.json('output_4.json').then(function (data) { 

    // Grab the country shape files
    let countries = topojson.feature(data, data.objects.wld)

    //console.log(countries)

    // define color scale
    let color = d3.scaleLinear()
    //    .domain([0, d3.max(data, d => d.properties.pillar1costs)])
        .domain([800000, 900000, 1000000, 1200000, 1400000, 1600000, 1600000, 24000000])
        .range(d3.schemeBlues[8]);

    // // Create a zoom option
    // let zoom = d3.zoom()
    // .scaleExtent([1, 2])
    // .translateExtent([[-500, -300], [1500, 1000]])   
    // .on('zoom', handleZoom);
      

    // Project map
    let myProjection = d3.geoNaturalEarth1()
        .rotate([0, 0])
        .scale(180)
        .translate([(width) / 2, height * 4.3 / 2])

    //path function
    let path = d3.geoPath(myProjection)

    // Country border lines
    let innerlines = topojson.mesh(data, data.objects.wld, function (a, b) {
        return a != b;})


    // Color in the map
    let map = svg.append("g")
        .selectAll("path")
        .data(countries.features)
        .join("path")
        .attr("class", function (d) { return "map p-" + d.properties.ISO}) // each bubbles get a class and give the GEOID to get counties feeature
        .attr("d", path) // the d attribute defines the path to be drawn.
        .style("fill-opacity", 1) 
       .style("fill", function(d) {
        var value = d.properties.group;
            if(value == "3") {
                return "#0090fc"
            } else if (value == "2a") {
                return "#5fbaff" }
                else if (value == "2b") {
                    return "#0074CC"
                } else if (value == "1") {
                    return "#c1e4fe"
                } else {
                return "#ccc"
            }
       
    })

        // style as inner line
    svg
         .append("path")
         .attr("d", path(innerlines))
         .style("fill", "none")
         .style("stroke", "white")
         .style("stroke-width",1.5)

    // Legend
    var legend_keys = ["1", "2a", "2b", "3", ""]
    var legend_color = d3.scaleOrdinal()
                        .domain(legend_keys)
                        .range(["#c1e4fe", "#0074CC", "#5fbaff", "#0090fc"]);
    
    svg.selectAll("g")
      .data(legend_keys)
      .enter()
      .append("rect")
        .attr("class", "foo")
        .attr("y", function(d,i){ return 390 + i*(-20)})
        .attr("x", -570) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("width", 40)
        .attr("height", 10)
        .style("fill", function(d){ return legend_color(d)})

     svg.selectAll("mylabels")
         .data(legend_keys)
         .enter()
         .append("text")
         .attr("class", "text")
         .attr("y", function(d,i){ return 316 + i*(20)})
         .attr("x", -520) // 100 is where the first dot appears. 25 is the distance between dots
         .style("fill", function(d){ return legend_color(d)})
         .text(function(d){ return d})
         .attr("text-anchor", "left")
         .style("alignment-baseline", "middle")

    // add explanation of groups
       // Add labels
       svg.append("text")
       .attr("class", "label")
       .attr("x", -570)
       .attr("y", 300)
       .html("Group Classifications")

       svg.append("text")
       .attr("class", "label")
       .attr("x", -510)
       .attr("y", 320)
       .html(": Two or more assessments in the last three years.")
      
       svg.append("text")
       .attr("class", "label")
       .attr("x", -500)
       .attr("y", 340)
       .html(": Two or more assessments in the last 5-7 years.")

       svg.append("text")
       .attr("class", "label")
       .attr("x", -500)
       .attr("y", 360)
       .html(": One assessment in the last 5-7 years.")

       svg.append("text")
       .attr("class", "label")
       .attr("x", -510)
       .attr("y", 380)
       .html(": No assessments in the last 7 years.")

    //    // text box
    //     d3.select("#rect").append("svg").attr("width", 800).attr("height", 200);
    //     svg.append('rect')
    //     .attr('x', -260)
    //     .attr('y', 275)
    //     .attr('width', 450)
    //     .attr('height', 120)
    //     .attr('stroke', 'black')
    //     .attr('fill', 'none');
 
       // FUNCTIONS:
    //MOUSEOVER TOOL
    let popup = d3.select(".pop-up");
    
    map.on("mouseover", (event, d) => {
        map
        .style("stroke", "white")
        .style("stroke-width", .5)
        .style("fill", function(d) {
            var value = d.properties.group;
            if(value == "3") {
                return "#0090fc"
            } else if (value == "2a") {
                return "#5fbaff" }
                else if (value == "2b") {
                    return "#0074CC"
                } else if (value == "1") {
                    return "#c1e4fe"
                } else {
                return "#ccc"
            }
    //#F08080 #FFD700 #F0E68C #90EE90       
        })
        .style("fill-opacity", 0.8)
        
        svg.select(".p-" + d.properties.ISO) // make every selection unique - calling back the class we defined.
            .style("stroke-width", 2)
            .style("fill-opacity", 1)
            .raise()
 
            let lang = "<h2>"+ d.properties.country_wb +  "</h2><p><h4>Pillar 1:</h4><p>" + d.properties.pillar1+ " " + d.properties.pillar1b + "</p><h4>Pillar 2: </h4><p>" + d.properties.pillar2_schoolsurveys + "</p><p><b>Household Survey: </b>" + d.properties.pillar2_hh + "<h4>Pillar 3: </h4><p>" + d.properties.pillar3_products
            
            popup
            .style("opacity", 1)
            .style("left", "800px" )
            .style("top", "130px")
            .html(lang)
    
    })

    map.on("mouseout", (event, d) => {
        console.log(event)
        map
            svg.select(".p-" + d.properties.ISO)
            .style("stroke-width", 0.5)
            .style("opacity", 1) // after you leave the hover, change back to 0.5
            .raise()

        popup
            .style("opacity", 0) // pop up becomes invisible when we mouseout
    })
//     function handleZoom(e) {
//         d3.select('svg g')
//           .attr('transform', e.transform);
//       }
    
//       function initZoom() {
//         d3.select('svg')
//           .call(zoom);
//       }
      
// initZoom();


})

    
