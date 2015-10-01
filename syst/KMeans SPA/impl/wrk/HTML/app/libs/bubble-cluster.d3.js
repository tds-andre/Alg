function BubbleCluster(args){
	var
		self = this,
		defaults = {
			width: 900,
			height: 400,
			el: 'body',
			dimensions: function(datum,i){return i},
			cluster: function(datum,i){return datum[datum.length-1]},
			duration: 1000
		}	

	
	this.options = {};
	$.extend(this.options, args, defaults);

    this.scale = {};
    this.keys = args.dimensions; 
    this.el = this.options.el
    this.clusters = [];
    this.scale.color = function(clusterName){
    	return selectColor(self.clusters.indexOf(clusterName), self.clusters.length)
    }

    this.chart = d3.select(this.el).append("svg")
		.attr("width", this.options.width)
    	.attr("height", this.options.height);
    
    this.update = function(data){
    	var
    		self =this;
    	self.data = data;
		var circle = self.chart.selectAll("circle").data(data, self.options.key);

		self.updateScales();
		self.updateClusters();

        //update
        circle
            .transition()
                .duration(1000)
                .attr("cx", function(el){return self.scale.x(el[self.keys[0]])})
                .attr("cy", function(el){return self.scale.y(el[self.keys[1]])})
                .attr("r", function(el){return self.scale.radius(el[self.keys[2]])});

        //enter
        var entered = circle.enter()
            .append("circle")
                .attr("cx", function(el){return self.scale.x(el[self.keys[0]])})
                .attr("cy", function(el){return self.scale.y(el[self.keys[1]])})                
                .attr("fill", function(el){return self.scale.color(el[self.keys[3]])})
                .attr("r", 0);
        entered
            .transition()
                .duration(1000)
                .attr("r", function(el){return self.scale.radius(el[self.keys[2]])});
        entered
            .append("svg:title")
                .text(function(d) { return d.name + " ("+d[self.keys[0]]+","+d[self.keys[1]]+","+d[self.keys[2]]+")"; });
        
                
	},

	this.updateScales = function(){
		var
			self = this;

		self.scale.radius = d3.scale.linear()
		    .domain([d3.min(self.data, function(el){return el[self.keys[2]]}), d3.max(data, function(el){return el[self.keys[2]]})])
		    .range([6, 20]);
		self.scale.x = d3.scale.linear()
		    .domain([d3.min(data, function(el){return el[self.keys[0]]}), d3.max(data, function(el){return el[self.keys[0]]})])
		    .range([50, self.options.width - 50]);
		self.scale.y = d3.scale.linear()
		    .domain([d3.min(data, function(el){return el[self.keys[1]]}), d3.max(data, function(el){return el[self.keys[1]]})])
		    .range([self.options.height - 50,  50]);
	},


	this.updateClusters = function(){
		var
			clusters = []
		for(var i = 0; i < this.data.length; i ++){
			if(clusters.indexOf(this.data[i][this.keys[3]])==-1)
				clusters.push(this.data[i][this.keys[3]])
		}
		this.clusters = clusters;
	}

	this.changeDimensions = function(keys){
		this.keys = keys;
		this.update(data);
	}

	function selectColor(colorNum, colors){
    	if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    		return "hsl(" + (colorNum * (360 / colors) % 360) + ",100%,50%)";
	}

}