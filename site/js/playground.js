'use strict';

// functionPlot({
//   target: '#playground',
//   data: [{
//     fn: 'x^2'
//   }]
// })

functionPlot({
  target: '#playground',
  "xAxis": {
    "domain": [
      -10,
      10
    ],
    "type": "linear",
    "label": "x"
  },
  "yAxis": {
    "domain": [
      -10,
      10
    ],
    "type": "linear",
    "label": "y"
  },
  data: [
    {
      "fnType": "linear",
      "graphType": "polyline",
      "color": "#000",
      "secants": [],
      "skipTip": false,
      closed: true,
      closedY: 10,
      closedOpaque: true,
      "range": [
        "-10",
        "0"
      ],
      "derivative": {
        "fn": "2x",
        "x0": "0",
        "updateOnMouseMove": true
      },
      "fn": "x^2"
    },
    {
      "fnType": "linear",
      "graphType": "polyline",
      "color": "#000",
      "secants": [],
      "skipTip": false,

      "derivative": {
        "fn": "2x",
        "updateOnMouseMove": true,
        "x0": "0"
      },
      "fn": "x^2-3"
    },
    {
      "fnType": "points",
      "graphType": "scatter",
      "color": "#fff",
      "secants": [],
      "skipTip": true,
      "points": [
        [
          "0",
          "0"
        ]
      ],
      "color2": "#000",
      "range": [],
      "circleSize": "4"
    },
    {
      "fnType": "points",
      "graphType": "scatter",
      "color": "#0f0000",
      "secants": [],
      "skipTip": true,
      "points": [
        [
          "0",
          "-3"
        ]
      ],
      "color2": "#f2eded",
      "range": [],
      "circleSize": "4"
    }
  ],
})

// functionPlot({
//   target: '#playground',
//   width: 1200,
//   height: 400,
//   data: [{
//     fn: 'x^2'
//   }]
// })

// var instance = functionPlot({
//   title: 'test',
//   target: '#playground',
//   grid: true,
//   data: [{
//     fn: 'x * x + y * y - 1',
//     fnType: 'implicit'
//   }]
// })
//instance.on('programmatic-zoom', function () {
//  console.log('end')
//})

// // linked graphs
// var a = functionPlot({
//   target: '#linked-a-multiple',
//   height: 250,
//   xAxis: {domain: [-10, 10]},
//   data: [{ fn: 'x * x' }]
// })
// var b = functionPlot({
//   target: '#linked-b-multiple',
//   height: 250,
//   xAxis: {domain: [-20, 20]},
//   data: [{ fn: '2 * x' }]
// })
// a.addLink(b)
// b.addLink(a)

//// annotation test
//functionPlot({
//  target: '#playground',
//  data: [{
//    fn: 'x * x'
//  }],
//  annotations: [{
//    x: 2,
//    text: 'x = 2'
//  }, {
//    y: 2,
//    text: 'y = 2'
//  }]
//});

//// implicit
//functionPlot({
//  target: '#playground',
//  data: [{
//    fn: 'x * x + y * y - 1',
//    fnType: 'implicit'
//  }]
//});
