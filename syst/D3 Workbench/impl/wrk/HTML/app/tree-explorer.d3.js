function TreeExplorer(args){
	var
		self = this,
		defaults = {
			width: 2000,
			height: 1000,
			el: 'body',
            margin: 0,
            hue: [0,120],
            radius: [5,35],
            name: function(d){return d.name},
            value: function(d){return d.value},
            deviation: function(return d.deviation),
            key: function(d) { return d.id || (d.id = ++gen); }
            duration: 750,
			title: function(d, i){
                return (self.options.key? self.options.key(d,i) : i) + " ("+d[self.keys[0]]+", "+d[self.keys[1]]+", "+d[self.keys[2]]+")";
                
            },
			cluster: function(datum,i){return datum[datum.length-1]},
			duration: 500
		}

	//merge options with defaults
	this.options = {};
	$.extend(this.options, defaults, args);

	//zero ground
	var gen = 0;
	this.margin = this.options.margin;
	this.el = this.options.el;
	this.duration = 750;
	this.paths ={};


	//initialize scales
	this.scales = {
		hue: d3.scale.linear().range(this.options.hue).clamp(true),
		radius: d3.scale.linear().range(this.options.radius).clamp(true),
		diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; })
	}	

	//set size
	this.setSize(this.options.width,this.options.height);

	//set tree layout
	this.tree = d3.layout.tree().size([this.height, this.width]);

	//create svg
	this.svg = d3.select(this.el).append("svg")
   		.attr("width", width)
    	.attr("height", height)
  		.append("g")
    		.attr("transform", "translate(" + this.margin + "," + this.margin ")");

    this.refresh = function(source,root){
    	root = root || this.data;
    	root.x0 = height / 2;
		root.y0 = 0;
    	this.data = root;    	  	
    	root.children.forEach(collapse);

		// Compute the new tree layout.
		var 
			nodes = tree.nodes(root).reverse(),
			links = tree.links(nodes),
			self = this,
			i = 0;

		// Normalize for fixed-depth.
		nodes.forEach(function(d) { d.y = d.depth * 300; });

		// Update the nodes…
		var node = svg.selectAll("g.node")
			.data(nodes, self.key);

		// Update scales
		this.refreshHue();
		this.refreshRadius();

		// Enter any new nodes at the parent's previous position.
		var nodeEnter = node.enter().append("g")
			.attr("class", "node")
			.attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
			.on("click", click)
			.on("mouseover", function (d) {
				d3.select(this).style("stroke-opacity",1);
				mouseover(d);
			})
			.on("mouseout", function (d) {
				d3.select(this).style("stroke-opacity",.5);
				mouseout(d);
			});		
		nodeEnter.append("circle")
			.attr("r", function(d){return self.scales.radius(d.value)})
			.style("fill", function(d) { return d3.hsl(self.scales.hue(self.deviation(d)) ,1,.7) });
		
		nodeEnter.append("text")
			.attr("x", function(d) { return d.children || d._children ? -10 : 10; })
			.attr("dy", ".35em")
			.attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
			.text(function(d) { return self.name(d); })
			.style("fill-opacity", 1e-6);		

		
		// Transition nodes to their new position.
		var nodeUpdate = node.transition()
			.duration(duration)
			.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
		nodeUpdate.select("circle")
			.attr("r", function(d) { return  self.scales.radius(d.value)})
			.style("fill", function(d) { return d3.hsl(self.scales.hue(self.deviation(d)) ,1,.7)  });
		nodeUpdate.select("text")
			.style("fill-opacity", 1);

		// Transition exiting nodes to the parent's new position.
		var nodeExit = node.exit().transition()
			.duration(self.options.duration)
			.attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
			.remove();
		nodeExit.select("circle")
			.attr("r", 1e-6);
		nodeExit.select("text")
			.style("fill-opacity", 1e-6);

		// Update the links…
		var link = svg.selectAll("path.link")
			.data(links, function(d) { return d.target.id; });

		// Enter any new links at the parent's previous position.
		link.enter().insert("path", "g")
			.attr("class", "link")
			.style("stroke-width",function(d){return self.scales.radius(d.target.value)*2})
			.attr("d", function(d) {
				paths[d.target.id] = this;
				var o = {x: source.x0, y: source.y0};
				return self.scales.diagonal({source: o, target: o});
			})
			.style("stroke", function(d) { return d3.hsl(huescale(d.target.deviation+hueoffset) ,1,.8) })
			.on("mouseover", function (d) {mouseover(d.target);})
			.on("mouseout", function (d) {mouseout(d.target);});
		

		// Transition links to their new position.
		link.transition()
			.duration(duration)
			.attr("d", self.scales.diagonal);

		// Transition exiting nodes to the parent's new position.
		link.exit().transition()
		.duration(duration)
		.attr("d", function(d) {
		var o = {x: source.x, y: source.y};
		return diagonal({source: o, target: o});
		})
		.remove();

		// Stash the old positions for transition.
		nodes.forEach(function(d) {
		d.x0 = d.x;
		d.y0 = d.y;
		});
    }

    this.setSize(width, height){
    	this.width = width;
    	this.height = height;
    	this.tree = d3.layout.tree()
    		.size([height, width]);
    },
    this.setHue(hue){
    	this.scales.hue = 
    },
    this.setRadius = function(radius){

    }

    this.collapse = function(d) {
  		if (d.children) {
    		d._children = d.children;
    		d._children.forEach(collapse);
    		d.children = null;
  		}
	}
}