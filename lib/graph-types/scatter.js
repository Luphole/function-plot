/**
 * Created by mauricio on 3/29/15.
 */
'use strict'
var d3 = window.d3
var evaluate = require('../evaluate')
var utils = require('../utils')

module.exports = function (chart) {
  var xScale = chart.meta.xScale
  var yScale = chart.meta.yScale

  function scatter(selection) {
    selection.each(function (d) {
      var i, j
      var index = d.index
      var color = utils.color(d, index)
      var evaluatedData = evaluate(chart, d)

      // scatter doesn't need groups, therefore each group is
      // flattened into a single array
      var joined = []
      for (i = 0; i < evaluatedData.length; i += 1) {
        for (j = 0; j < evaluatedData[i].length; j += 1) {
          joined.push(evaluatedData[i][j])
        }
      }

      var innerSelection = d3.select(this).selectAll(':scope > circle')
        .data(joined)

      innerSelection.enter()
        .append('circle')

      innerSelection
        .attr('fill', d.color2 || d3.hsl(color.toString()).brighter(1.5))
        .attr('stroke', d.color || color)
        .attr('opacity', 0.7)
        .attr('r', d.circleSize || 1)
        .attr('cx', function (d) {
          return xScale(d[0])
        })
        .attr('cy', function (d) {
          return yScale(d[1])
        })
        .attr(d.attr)

      if (d.attachedImage) {
        // console.log(innerSelection.attr('attached-image-id'));
        innerSelection.attr('class', 'circle-with-image');
        innerSelection.attr('attached-image', d.attachedImage);
        innerSelection.attr('attached-image-corner', d.attachedImageCorner);
        innerSelection.attr('attached-image-width', d.attachedImageWidth);
        innerSelection.attr('attached-image-height', d.attachedImageHeight);
        // console.log('poniendole al fking circulo');
      }

      innerSelection.exit().remove()
    })
  }

  return scatter
}
