/* D3 Fundamentals */

/* Selections */
/* var el = d3.select( 'body' ).append( 'p' );
console.log(el); */

/* Manipulating Selections */
/* var el = d3.select( 'body' )
		.append( 'p' )
		.classed( 'foo', true )
		.classed( 'bar', true )
		.text( 'Hello World!' )
		.style( 'color', 'blue' );

console.log(el); */

/* Binding Data */
/* var dataset = [10, 20, 30, 40, 50];

var el = d3.select('body')
		.selectAll('p')
		.data(dataset)
		.enter()
		.append('p')
		.text("Hello World!");

console.log(el); */

/* Displaying Data */
// var dataset = [10, 20, 30, 40, 50];

// var el = d3.select('body')
// 		.selectAll('p')
// 		.data(dataset)
// 		.enter()
// 		.append('p')
// 		.text(function(d){
// 			return 'This paragraph is binded to the number ' + d;
// 		})
// 		.attr('class', function(d){
// 			if (d > 25){
// 				return 'foo';
// 			} else {
// 				return null;
// 			}
// 		})
// 		.classed('bar', function(d){
// 			return d < 25; 
// 		})
// 		.style('color', function(d){
// 			if(d > 25) {
// 				return 'red';
// 			} else {
// 				return 'blue';
// 			}
// 		});

// console.log(el);

/* Loading Data Externally */
// d3.csv('data.csv', function(err, data){
// 	if(err){
// 		return console.log(err);
// 	}
// 	console.log(data);
// 	//generate(data.columns);
// });

// d3.json('data.json', function(err, data){
// 	if(err){
// 		return console.log(err);
// 	}

// 	//console.log(data);
// 	//generate(data);
// });

// function generate(dataset){

// 	//var dataset = [10, 20, 30, 40, 50];

// 	var el = d3.select('body')
// 			.selectAll('p')
// 			.data(dataset)
// 			.enter()
// 			.append('p')
// 			.text(function(d){
// 				return 'This paragraph is binded to the number ' + d;
// 			})
// 			.attr('class', function(d){
// 				if (d > 25){
// 					return 'foo';
// 				} else {
// 					return null;
// 				}
// 			})
// 			.classed('bar', function(d){
// 				return d < 25; 
// 			})
// 			.style('color', function(d){
// 				if(d > 25) {
// 					return 'red';
// 				} else {
// 					return 'blue';
// 				}
// 			});

// 	console.log(el);
// };

/* Getting to know Scales */

/* Dynamic Bar Graph */
/* var data            =   [];

for(var i = 0; i < 20; i++){
	var num = Math.floor(Math.random() * 50);
	data.push(num);
}

//console.log(data);

//create SVG element
var chart_width  = 800;
var chart_height = 400;
var bar_padding  = 5;

var svg = d3.select('#chart')
							.append('svg')
							.attr('width', chart_width)
							.attr('height', chart_height);

//Bind data and create bars
svg.selectAll('rect')
		.data(data)
		.enter()
		.append( 'rect' )
		.attr('x', function(d, i){
			return i * (chart_width / data.length);
		})
		.attr('y', function(d){
			return chart_height - d * 5;
		})
		.attr('width', chart_width / data.length - bar_padding)
		.attr('height', function(d){
			return d * 5;
		})
		.attr('fill', '#7ED26D');


//create labels
svg.selectAll('text')
		.data(data)
		.enter()
		.append('text')
		.text(function(d){
			return d;
		})
		.attr('x', function(d, i){
			return i * (chart_width / data.length) + 
								 (chart_width / data.length - bar_padding) / 2;
		})
		.attr('y', function(d){
			return chart_height - (d * 5) + 15;
		})
		.attr('font-size', '14')
		.attr('fill', '#fff')
		.attr('text-anchor', 'middle'); */

// Scatter Plot  w/ axis 

// var data            =   [
//     [ 400, 200 ],
//     [ 210, 140 ],
//     [ 722, 300 ],
//     [ 70, 160 ],
//     [ 250, 50 ],
//     [ 110, 280 ],
//     [ 699, 225 ],
//     [ 90, 220 ]
// ];
// var chart_width     =   800;
// var chart_height    =   400;
// var padding         =   50;

//  Create SVG Element
// var svg             =   d3.select( '#chart' )
//     .append( 'svg' )
//     .attr( 'width', chart_width )
//     .attr( 'height', chart_height );

//  Create Scales
// var x_scale         =   d3.scaleLinear()
//     .domain([0, d3.max(data, function(d){
//         return d[0];
//     })])
//     .range([ padding, chart_width - padding * 2 ]);

// var y_scale         =   d3.scaleLinear()
//     .domain([ 0, d3.max(data, function(d){
//         return d[1];
//     })])
//     .range([ chart_height - padding, padding ]);

// var r_scale         =   d3.scaleLinear()
//     .domain([0, d3.max(data, function( d ){
//         return d[1];
//     })])
//     .range([5, 30]);

// var a_scale         =   d3.scaleSqrt()
//     .domain([ 0, d3.max(data, function(d) {
//         return d[1];
//     })])
//     .range([ 0, 25 ]);

//   Create Axis
// var x_axis          =   d3.axisBottom(x_scale);
// 		.ticks(5);
// 		.tickValues([0, 150, 250, 600, 700]);

//  svg.append('g')
//  			.attr('class', 'x-axis')
//  			.attr('transform', 'translate(0,' + (chart_height - padding) + ')')
//  			.call(x_axis);

// var y_axis          =   d3.axisLeft(y_scale)
// 		.ticks(5);
// 		 .tickFormat(function(d){
// 		 	return d + '%';
// 		 });

//  svg.append('g')
//  			.attr('class', 'y-axis')
//  			.attr('transform', 'translate(' + padding + ', 0 )')
//  			.call(y_axis);

//  Create Circles
// svg.selectAll( 'circle' )
//     .data( data )
//     .enter()
//     .append( 'circle' )
//     .attr("cx", function(d) {
//         return x_scale(d[0]);
//     })
//     .attr("cy", function(d) {
//         return y_scale(d[1]);
//     })
//     .attr("r", function(d){
//         return a_scale(d[1]);
//     })
//     .attr( 'fill', '#D1AB0E' );

//  Create Labels
// svg.append('g')
// 		.selectAll( 'text' )
//     .data( data )
//     .enter()
//     .append( 'text' )
//     .text(function(d) {
//         return d.join( ',' );
//     })
//     .attr("x", function(d) {
//         return x_scale(d[0]);
//     })
//     .attr("y", function(d) {
//         return y_scale(d[1]);
//     });

/* Time Scale scatter plot */

// var data = [
// 		{ date: '07/01/2017', num: 20 },
// 		{ date: '07/02/2017', num: 37 },
// 		{ date: '07/03/2017', num: 25 },
// 		{ date: '07/04/2017', num: 45 },
// 		{ date: '07/05/2017', num: 23 },
// 		{ date: '07/06/2017', num: 33 },
// 		{ date: '07/07/2017', num: 49 },
// 		{ date: '07/08/2017', num: 40 },
// 		{ date: '07/09/2017', num: 36 },
// 		{ date: '07/10/2017', num: 27 }
// ];

// var time_parse      =   d3.timeParse('%m/%d/%Y');
// var time_format     =   d3.timeFormat('%b %e')
// var chart_width     =   800;
// var chart_height    =   400;
// var padding         =   50;

//  Loop through each date

// data.forEach(function(e, i){
// 	data[i].date = time_parse(e.date);
// });

//  Create SVG element

// var svg = d3.select('#chart')
// 		.append('svg')
// 		.attr('width', chart_width)
// 		.attr('height', chart_height);

//  Create scales

// var x_scale = d3.scaleTime()
// 		.domain([
// 			d3.min(data, function(d){
// 				return d.date;
// 			}), 
// 			d3.max(data, function(d){
// 			return d.date;
// 			})
// 		])
// 		.range([padding, chart_width - padding * 2]);

// var y_scale = d3.scaleLinear()
// 		.domain([0, d3.max(data, function(d){
// 			return d.num;
// 		})])
// 		.range([chart_height - padding, padding]);

// var r_scale = d3.scaleLinear()
// 		.domain([0, d3.max(data, function(d){
// 			return d[1];
// 		})])
// 		.range([5, 30]);

// var a_scale = d3.scaleSqrt()
// 		.domain([0, d3.max(data, function(d){
// 			return d.num;
// 		})])
// 		.range([0, 25]);

//  Create circles
// svg.selectAll('circle')
// 		.data(data)
// 		.enter()
// 		.append('circle')
// 		.attr('cx', function(d){
// 			return x_scale(d.date);
// 		})
// 		.attr('cy', function(d){
// 			return y_scale(d.num);
// 		})
// 		.attr('r', function(d){
// 			return a_scale(d.num);
// 		})
// 		.attr('fill', '#D1AB0E');

//  Create labels
// svg.selectAll('text')
// 		.data(data)
// 		.enter()
// 		.append('text')
// 		.text(function(d){
// 			return time_format(d.date);
// 		})
// 		.attr('x', function(d){
// 			return x_scale(d.date);
// 		})
// 		.attr('y', function(d){
// 			return y_scale(d.num);
// 		});

/* Scales */

/*var slices = [100, 200, 300, 400, 500];

var scale = d3.scaleLinear()
		.domain([d3.min(slices), d3.max(slices)])
		.range([10, 350]);*/

/* *************************
ORDINAL SCALES
************** */
// var fruit = ['Apples', 'Oranges', 'Grapes', 'Strawberry', 'Kiwi'];

// var scale = d3.scaleBand()
// 			.domain(d3.range(fruit.length))
// 			.range( [ 0, 500 ] );

var data            =   [6,20,21,14,2,30,7,16,25,5,11,28,10,26,9];

// Create SVG Element
var chart_width     =   800;
var chart_height    =   400;
var bar_padding     =   5;
var svg             =   d3.select( '#chart' )
    .append( 'svg' )
    .attr( 'width', chart_width )
    .attr( 'height', chart_height );

// Create scales
// 800 / 15 = 53.33
var x_scale = d3.scaleBand()
		.domain( d3.range(data.length) )
		.rangeRound([ 0, chart_width ])
		.paddingInner(0.05);

var y_scale = d3.scaleLinear()
		.domain([ 0, d3.max(data) ])
		.range([ 0, chart_height ]);

// Bind Data and create bars
svg.selectAll( 'rect' )
    .data( data )
    .enter()
    .append( 'rect' )
    .attr( 'x', function( d, i ){
        return x_scale(i);
    })
    .attr( 'y', function(d ){
        return chart_height - y_scale(d);
    })
    .attr( 'width', x_scale.bandwidth() )
    .attr( 'height', function( d ){
        return y_scale(d);
    })
    .attr( 'fill', '#7ED26D' );

// Create Labels
svg.selectAll( 'text' )
    .data(data)
    .enter()
    .append( 'text' )
    .text(function( d ){
        return d;
    })
    .attr( 'x', function( d, i ){
        return x_scale(i) + x_scale.bandwidth() /2;
    })
    .attr( 'y', function(d ){
        return chart_height - y_scale(d) + 15;
    })
    .attr( 'font-size', 14 )
    .attr( 'fill', '#fff' )
    .attr( 'text-anchor', 'middle' );

// Events
d3.select('button').on("click", function(){
	data.reverse();

	svg.selectAll('rect')
			.data(data)
			.transition()
			.delay(function(d,i){
				return i / data.length * 1000;
			})
			.duration(1000)
			.ease( d3.easeElasticOut)
			.attr( 'y', function(d ){
        return chart_height - y_scale(d);
    	})
			.attr( 'height', function( d ){
        return y_scale(d);
    	});

  svg.selectAll( 'text' )
    	.data(data)
    	.transition()
    	.delay(function(d,i){
				return i / data.length * 1000;
			})
    	.duration(1000)
    	.ease( d3.easeElasticOut)
    	.text(function( d ){
        return d;
    	})
    	.attr( 'x', function( d, i ){
        return x_scale(i) + x_scale.bandwidth() /2;
    	})
    	.attr( 'y', function(d ){
        return chart_height - y_scale(d) + 15;
    	});
});










