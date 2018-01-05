/* D3 Fundamentals */

/* Selections */
/*var el = d3.select( 'body' ).append( 'p' );
console.log(el);*/

/* Manipulating Selections */
/*var el = d3.select( 'body' )
		.append( 'p' )
		.classed( 'foo', true )
		.classed( 'bar', true )
		.text( 'Hello World!' )
		.style( 'color', 'blue' );

console.log(el);*/

/* Binding Data */
/*var dataset = [10, 20, 30, 40, 50];

var el = d3.select('body')
		.selectAll('p')
		.data(dataset)
		.enter()
		.append('p')
		.text("Hello World!");

console.log(el);*/

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

/* Scatter Plot */

var data            =   [
    [ 400, 200 ],
    [ 210,140 ],
    [ 722,300 ],
    [ 70,160 ],
    [ 250,50 ],
    [ 110,280 ],
    [ 699,225 ],
    [ 90, 220 ]
];
var chart_width     =   800;
var chart_height    =   400;



