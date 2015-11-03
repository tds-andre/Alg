function SuperPie(args){
	var
		self = this,
		defaults = {
			width: 900,
			height: 400,
			el: 'body',
			value: function(d) { return d.count; },
      name: function(d){ return d.data.name},
			color: d3.scale.category20()           
		}	

	
	this.options = {};
	$.extend(this.options, defaults, args);


	this.width = this.options.width;
    this.height = this.options.height;
    this.radius = Math.min(this.width, this.height) / 2;
    this.outerRadius = this.radius + 20
    this.arc = d3.svg.arc()
    	.innerRadius(this.radius/2)
    	.outerRadius(this.radius - 20);
    this.labelarc = d3.svg.arc()
      .innerRadius(this.radius - 20)
      .outerRadius(this.outerRadius);      
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
  var outerRadius = this.height / 2 - 20;

    var tips = [];
    var self = this;
    var sum = 0;
    data.forEach(function(el){sum+=self.options.value(el)})
    this.sum = 0;


		self.data = data;
    var label = self.svg.append("text");
		var update = self.svg.datum(data).selectAll("g").data(self.pie);    
    var enteringG = 	update.enter().append("g");
    var enteringPath = enteringG.append("path")      
  		.attr("fill", function(d, i) { return self.scales.color(i); })
  		.attr("d", self.arc)
  		.each(function(d) { this._current = d; })      
      .on("mouseover", function(d,a){
        console.log(d,a);
      })


    enteringPath
      .transition().duration(750).attrTween("d", self.arcTween);
    /*var enteringText = enteringG.append("text")
      .attr("transform", function(d) { return "translate(" + self.arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(function(d) { 
       return (100*(d.value/sum)).toFixed(0) + "%"; 
     });
      var enteringText = enteringG.append("text")
      .attr("transform", function(d) { return "translate(" + self.labelarc.centroid(d) + ")"; })
      .attr("class", "super-pie-label")
      .attr("dy", ".35em")
      .attr("fill", "white")
      .style("text-anchor", "middle")
      .text(function(d) { 
        return self.options.name(d); 
      });
      var enteringLabelRect = enteringG.append("rect")
      .attr("transform", function(d) { return "translate(" + self.labelarc.centroid(d) + ")"; })
      .attr("class", "super-pie-label-bg")
      .attr("fill", "black")
      .attr("width", "100px")
      .attr("height", "20px")
      .attr("fill-opacity", "0.5");*/
      
      
  
  

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