function SuperPie(args){
	var
		self = this,
		defaults = {
			width: 900,
			height: 400,
			el: 'body',
			value: function(d) { return d.count; },
			color: d3.scale.category20()           
		}	

	
	this.options = {};
	$.extend(this.options, defaults, args);


	this.width = this.options.width;
    this.height = this.options.height;
    this.radius = Math.min(this.width, this.height) / 2;
    this.arc = d3.svg.arc()
    	.innerRadius(this.radius/2)
    	.outerRadius(this.radius - 20);
    this.svg = d3.select(this.options.el).append("svg")
    	.attr("width", this.width)
    	.attr("height", this.height)
  		.append("g")
    		.attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");


    this.scales = {
    	color: this.options.color
    }

    this.pie = d3.layout.pie()
    	.value(this.options.value)
    	.sort(null);

    



	this.size = function(width,height){
		this.width = width;
        this.height = height;
        this.svg
            .attr("width", this.width)
            .attr("height", this.height);
        this.radius = Math.min(this.width, this.height) / 2;
        this.arc
    		.innerRadius(this.radius/2)
    		.outerRadius(this.radius - 20);
        this.update(this.data);

	}
	this.value = function(dim){
		this.pie.value(dim)
    		
	}
	this.update = function(data){


		var self = this;
		self.data = data;
		var path = self.svg.datum(data).selectAll("path")
      	.data(self.pie);
      	path.transition().duration(750).attrTween("d", self.arcTween);
    	path.enter().append("path")
      		.attr("fill", function(d, i) { return self.scales.color(i); })
      		.attr("d", self.arc)
      		.each(function(d) { this._current = d; }); 

	}

	this.arcTween = function(a) {
  		var   			
  			i = d3.interpolate(this._current, a);
  		this._current = i(0);
  		return function(t) {
    		return self.arc(i(t));
  		};
	}


}