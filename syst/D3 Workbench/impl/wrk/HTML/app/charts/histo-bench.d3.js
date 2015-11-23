function HistoBench(args){
	var
		self = this,
		defaults = {
			el: 'body',
			round: 0,
			width: 960,
			height: 500,
			duration: 750,
			name: function(d){return d.name},
			value: function(d){return d.value},
			title: function(d){return value(d)},
			key: function(d){
				return d._d3id || (d._d3id = ++index)
			},
			caption: function(d){
				return d
			},
            margin: {top: 10, right: 30, bottom: 10, left: 70}        
		}

	
	this.options = {};
	$.extend(this.options, defaults, args);

	var 

		data,
		index = 0,
		el = this.options.el,
		round = this.options.round,
		margin = this.options.margin,
    	width = this.options.width - margin.left - margin.right,
    	height = this.options.height - margin.top - margin.bottom,
		x = d3.scale.linear().range([0, width]),
		y = d3.scale.ordinal().rangeRoundBands([height, 0], .1),
		xAxis = d3.svg.axis().scale(x).orient("bottom"),
		caption = this.options.caption,
	 	yAxis = d3.svg.axis().scale(y).orient("left").tickFormat(caption),
	 	value = this.options.value,
	 	key = this.options.key,
	 	name = this.options.name,	 	
	 	title = this.options.title,
		svg = d3.select(el).append("svg"),
		chart = svg
    		.attr("width", width + margin.left + margin.right)
    		.attr("height", height + margin.top + margin.bottom)
  			.append("g")
    			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   	this.value = function(fn){
   		value = fn;
   	}
    this.renderAxis = function(){
    	$(".hb-axis", el).remove()
    	//chart.append("g")
		//	.attr("class", "hb-x hb-axis")
		//	.attr("transform", "translate(0," + (height) + ")")
		//	.call(xAxis);
		chart.append("g")
			.attr("class", "hb-y hb-axis")			
			.call(yAxis);
	}


    this.update = function(bench){
    	data = bench;
    	//data.sort(function(a, b) { return value(a) - value(b); })
    	y.domain(data.map(name));
		x.domain([0, d3.max(data, value)]);

		var join = chart.selectAll(".hb-bar").data(data, key)
		
				


		var entering = join.enter()
		 	.append("rect")
				.attr("class", "hb-bar")
				.attr("y", function(d){
					return y(name(d)) + height; 
				})
				.attr("x", function(d) { return 0 })
				.attr("width", function(d) { return x(value(d)); })
				.attr("height", y.rangeBand)

			.transition()
				.duration(this.options.duration)
				.attr("y", function(d){
					return y(name(d)); 
				})
		join
			.transition()
				.duration(this.options.duration)
				.attr("y", function(d){
					return y(name(d)); 
				})
				.attr("width", function(d) { return x(value(d)); })
				.attr("height", y.rangeBand)
				
		var exiting = join.exit()
			.transition()
				.duration(this.options.duration)
				.attr("y", height + 30 )
				.attr("width", 0 )
		exiting.remove();	


		var joinT = chart.selectAll(".hb-text").data(data, key)
		var enteringT = joinT.enter()
			.append("text")
				.attr("class", "hb-text")
			    .attr("x", function(d) { return x(value(d)) ; })
			    .attr("y",  function(d){
					return y(name(d)) + height + 10;
				})
			    .attr("dy", ".35em")
			    .text(function(d) { return value(d).toFixed(round); });
		joinT
			.transition()
				.duration(this.options.duration)
				.attr("y", function(d){
					return (y(name(d)) + y.rangeBand(d)/2); 
				})
				.attr("x", function(d) { return x(value(d)); })
				.text(function(d) { return value(d).toFixed(round); });
				

		var exitingT = joinT.exit()
			.transition()
				.duration(this.options.duration)
				.attr("y", height + 40 )
				.attr("x", 0 )



		$(".hb-bar", el).each(function(i,bar){
			$(bar).tooltip("destroy");
			$(bar).tooltip({placement: "right", html: true, title: title(d3.select(bar).datum()), container: el});
		});
		this.renderAxis();
	}


		



}