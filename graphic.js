var w = window.innerWidth-window.innerWidth/1000,
    h = window.innerHeight,
    z = 21,
    x = w / z,
    y = h / z;

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(d3.range(x * y))
  .enter().append("rect")
    .attr("transform", translate)
    .attr("width", z)
    .attr("height", z)
    .style("fill", function(d) { return d3.hsl(d % x / x * 360, 1, Math.floor(d / x) / y); })
    .on("mouseover", mouseover);

function translate(d) {
  return "translate(" + (d % x) * z + "," + Math.floor(d / x) * z + ")";
}

function mouseover(d) {
  this.parentNode.appendChild(this);
  d3.select(this)
    .transition()
      .duration(950)
      .attr("transform", function(d, i) {
      return "translate(240, 240)scale(10)rotate("+d/60+")"
      })
    .transition()
      .delay(1500)
      .attr("transform", translate)
      .on("mouseover", mouseover)

}
