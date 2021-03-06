function BubbleCluster(args){
	var
		self = this,
		defaults = {
			width: 900,
			height: 400,
			el: 'body',
            margin: 50,
			title: function(d, i){
                return (self.options.key? self.options.key(d,i) : i) + " ("+d[self.keys[0]]+", "+d[self.keys[1]]+", "+d[self.keys[2]]+")";
                
            },
			cluster: function(datum,i){return datum[datum.length-1]},
			duration: 500
		}	

	
	this.options = {};
	$.extend(this.options, defaults, args);
    this.margin = {top: this.options.margin, right: this.options.margin, bottom: this.options.margin, left: this.options.margin};
    this.width = this.options.width;// - this.margin.left - this.margin.right,
    this.height = this.options.height;// - this.margin.top - this.margin.bottom;
    this.scale = {};
    this.axes = {};
    this.keys = args.dimensions; 
    this.el = this.options.el
    this.clusters = [];
    this.scale.color = function(clusterName){
    	return selectColor(self.clusters.indexOf(clusterName), self.clusters.length)
    }

    this.chart = d3.select(this.el).append("svg")
		.attr("width", this.width)
    	.attr("height", this.height)
        
    
    


    this.update = function(data){
    	var
    		self =this;
    	self.data = data;
		var circle = self.chart.selectAll("circle").data(data, self.options.key);

		self.updateScales();
		self.updateClusters();
        self.updateAxes();

        //update
        circle
            .transition()
                .duration(this.options.duration)
                .attr("cx", function(el){
                	return self.scale.x(
                		Number(el[self.keys[0]]))
                })
                .attr("cy", function(el){return self.scale.y(Number(el[self.keys[1]]))})
                .attr("r", function(el){return self.scale.radius(Number(el[self.keys[2]]))});

        //enter
        var entered = circle.enter()
            .append("circle")
                .attr("transform", "translate(60,0)")
                .attr("cx", function(el){return self.scale.x(Number(el[self.keys[0]]))})
                .attr("cy", function(el){return self.scale.y(Number(el[self.keys[1]]))})                
                .attr("fill", function(el){return self.scale.color(el[self.keys[3]])})
                .attr("fill-opacity", 0.5)
                .attr("stroke-width", 1)                
                .attr("stroke",  "black")
                .attr("stroke-opacity", 0.6)
                .attr("r", 0)
                .attr("cursor", "pointer")
                .on("mouseover", function(el){
                    d3.select(this)
                        .style('fill-opacity', 1)
                })
                .on("mouseout", function(el){
                    d3.select(this)
                        .style('fill-opacity', 0.5)
                });

                
        entered
            .transition()
                .duration(this.options.duration)
                .attr("r", function(el){return self.scale.radius(Number(el[self.keys[2]]))});
        entered
            .append("svg:title")
                .text(function(d,i) { return  self.options.title(d,i) });
       	
       	//exit
       	var exited = circle.exit();
       	exited
       		.transition()
       			.duration(this.options.duration)
       			.attr("r",0);
       	exited.
       		remove();

                
	}

	this.updateScales = function(){
		var
			self = this;

		self.scale.radius = d3.scale.linear()
		    .domain([d3.min(self.data, function(el){return Number(el[self.keys[2]])}), d3.max(self.data, function(el){return Number(el[self.keys[2]])})])
		    .range([5, 16]);
		self.scale.x = d3.scale.linear()
		    .domain([d3.min(self.data, function(el){return Number(el[self.keys[0]])}), d3.max(self.data, function(el){return Number(el[self.keys[0]])})])
		    .range([50, self.width - 50 - 60]);
		self.scale.y = d3.scale.linear()
		    .domain([d3.min(self.data, function(el){return Number(el[self.keys[1]])}), d3.max(self.data, function(el){return Number(el[self.keys[1]])})])
		    .range([self.height - 50,  50]);
	}

    this.updateAxes = function(){
         $(".axis", this.el).remove();
        this.axes.x = d3.svg.axis()
                  .scale(this.scale.x)
                  .orient("bottom");
        this.axes.y = d3.svg.axis()
                  .scale(this.scale.y)
                  .orient("left");        
       
        this.chart.append("g")
            .attr("class", "axis")  //Assign "axis" class
            .attr("transform", "translate(60," + (this.height - 20) + ")")
            .call(this.axes.x);
         this.chart.append("g")
            .attr("class", "axis")  //Assign "axis" class
            .attr("transform", "translate(" + 60 + ",0)")
            .call(this.axes.y);
    }


	this.updateClusters = function(){
		var
			clusters = []
		for(var i = 0; i < this.data.length; i ++){
			if(clusters.indexOf(this.data[i][this.keys[3]])==-1)
				clusters.push(this.data[i][this.keys[3]])
		}
		this.clusters = clusters;
	}

	this.updateDimensions = function(keys){
		this.keys = keys;
		this.update(this.data);
	}

    this.updateSize = function(width, height){
        this.width = width;
        this.height = height;
        this.chart
            .attr("width", this.width)
            .attr("height", this.height);
        this.update(this.data);
    }

	function selectColor(colorNum, colors){
    	if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    		return "hsl(" + (colorNum * (360 / colors) % 360) + ",100%,50%)";
	}

}