function TreeExplorer(args){
	var
		self = this,
		defaults = {
			width: 2960,
			height: 700,
			el: 'body',
	        margin: 50,						          
	        min:5,
	        max:16,
	        margin: {top: 20, right: 120, bottom: 20, left: 120},
	        range: [5,25],
	        size: function(d){return d.count},
	        indicator: function(d){return d.value},
	       	domain: [0,2],
	       	gap: 200,
	       	luminescence: 0.6,
	       	opacity: 0.8,
	       	title: function(d){return acessors.indicator(d)}
		}

	this.options = {};
	$.extend(this.options, defaults, args);


	var root;
	var paths ={};	
	var index = 0;	
	var duration = 750;
	var firstrun = true;
	var el = this.options.el;
	var margin = this.options.margin;
    var width = this.options.width - margin.right - margin.left;
    var height = this.options.height - margin.top - margin.bottom;
    var tree = d3.layout.tree().size([height, width]);
    var diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; });
    var huescale = d3.scale.linear().range([120,0]).domain(this.options.domain).clamp(true);
    var rscale = d3.scale.linear().range(this.options.range).clamp(true);
    var acessors = {size: this.options.size,indicator: this.options.indicator};

    this.acessors = acessors;

    var svg = d3.select(el)
  		.append("svg")
  			.attr("class", "te")
    		.attr("width", width + margin.right + margin.left)
    		.attr("height", height + margin.top + margin.bottom)
    		.append("g")
      			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    function updateScales(domain){
    	var xodes = tree.nodes(root).reverse();
		xodes.splice(xodes.length-1);
		rscale.domain([d3.min(xodes, function(node){return acessors.size(node)}),d3.max(xodes, function(node){return acessors.size(node)})]);
    }

    this.domain = function(domain){
    	huescale.domain(domain);
    }

    this.update = function(data,source){

    	//initialize
   		root = data;   		
   		root.x0 = height / 2;
		root.y0 = 0;
		
		if(firstrun){
			root.children.forEach(collapse);
			firstrun = false;
			updateScales();

		}
		source = source || root;
		

		//create nodes and links
		var nodes = tree.nodes(root).reverse();
        var links = tree.links(nodes);
        nodes.forEach(function(d) { d.y = d.depth * self.options.gap; });

        //node join data
        var node = svg.selectAll("g.te-node")
      		.data(nodes, function(d) { return d._d3id || (d._d3id = ++index); });

      	//node enter
      	var 
      	nodeEnter = node.enter().append("g")
      		.attr("class", "te-node")
      		.attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })      		
      		.on("click", click)
      		.on("mouseover", function (d) {
          		d3.select(this).style("stroke-opacity",1);          		
          		//COLOCAR LUMINESCENCE//COLOCAR LUMINESCENCE//COLOCAR LUMINESCENCE//COLOCAR LUMINESCENCE//COLOCAR LUMINESCENCE
          		//COLOCAR LUMINESCENCE//COLOCAR LUMINESCENCE//COLOCAR LUMINESCENCE//COLOCAR LUMINESCENCE//COLOCAR LUMINESCENCE
          		mouseover(d);
      		})
      		.on("mouseout", function (d) {
          		d3.select(this).style("stroke-opacity",.5);
          		mouseout(d);
      		});
      	nodeEnter.append("circle")
      		.attr("r", function(d){      			
      			return rscale(acessors.size(d))
      		})            		
      		.style("fill", function(d) { 
        		return d3.hsl(huescale(acessors.indicator(d)) ,1,self.options.luminescence) 
      		})
		nodeEnter.append("text")
			.attr("dy", ".35em")
		    .style("fill-opacity", 1e-6)
		    .text(function(d) { return d.name; })
			.attr("x", function(d) { return d.children || d._children ? -10 : 10; })
		    .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })

    	//node update
		var 
		nodeUpdate = node
		nodeUpdate.transition()
		      .duration(duration)
		      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
		nodeUpdate.select("circle")		    
		    .transition()		    
		    	.attr("r", function(d) { return rscale(acessors.size(d))})
		    	.style("fill", function(d) { return d3.hsl(huescale(acessors.indicator(d)) ,1,self.options.luminescence) })
		nodeUpdate.select("text")
			.style("fill-opacity", 1);

		//node exit
		var nodeExit = node.exit()
		var rem = nodeExit.transition()
		  	.duration(duration)
		  	.style("stroke-width",1)
		  	.attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
		  	
		  	.remove();
		rem.select("circle")
		  	.attr("r", 1e-6)
		rem.select("text")
			.style("fill-opacity", 1e-6);

		//link data join
		var link = svg.selectAll("path.te-link")
      		.data(links, function(d) { 
      			return d.target._d3id; 
      		});

      	//link enter
		link.enter().insert("path", "g")
		  	.attr("class", "te-link")
		  	.style("stroke-width",function(d){
		    	return rscale(acessors.size(d.target))*2;
			})
		  	.attr("d", function(d) {
		    	paths[d.target._d3id] = this;
		    	var o = {x: source.x0, y: source.y0};		    	
		    	return diagonal({source: o, target: o});
		  	})
			.style("stroke", function(d){		  
		  		return d3.hsl(huescale(acessors.indicator(d.target)),1,self.options.luminescence + 0.1);
			})
			.on("mouseover", function (d) {
		    	mouseover(d.target);
			})
			.on("mouseout", function (d) {
		    	mouseout(d.target);
			});

		//link update
		link
			.transition(0)    			
    			.style("stroke", function(d){    				
      				return d3.hsl(huescale(acessors.indicator(d.target)),1,self.options.luminescence + 0.1);;
    			})    	
    	link        		
    		.transition() 
    			.duration(duration)
    			.attr("d", diagonal);

		//link exit
		link.exit()
			.transition()
		  		.duration(duration)
		  		.style("stroke-width",1e-6)
		  		.attr("d", function(d) {
			        var o = {x: source.x, y: source.y};
			        return diagonal({source: o, target: o});
      			})
		  	.remove();

		//stash the old positions for transition.
		nodes.forEach(function(d) {
			d.x0 = d.x;
			d.y0 = d.y;
		});

		//create tooltips for the circle
		$("circle", $(el)).each(function(i,circle){
    		$(circle).tooltip({html: true, title: title(d3.select(circle).datum()), container: el});
  		})
    }



    function collapse(d) {
  		if (d.children) {
		    d._children = d.children;
		    d._children.forEach(collapse);
		    d.children = null;
		}
  	}

  	function click(d) {
  		d3.select(".te-selected")
  			.attr("class", "")
  		try{
  			d3.select(this).select("circle").attr("class", "te-selected")
  		}catch(e){}
		if (d.children) {
			d._children = d.children;
			d.children = null;
		} else {
			d.children = d._children;
			d._children = null;
		}
		if(self.options.select)
			self.options.select(d)
		self.update(root,d);
	}

	this.click = click;

	function mouseover(dd){
  		function highlight(d){
      		d3.select(paths[d._d3id]).style("stroke-opacity",1);
      		if(d.parent) highlight(d.parent)
  		}
  		highlight(dd);
	}

	function mouseout(dd){
  		function dehighlight(d){
      		d3.select(paths[d._d3id]).style("stroke-opacity",0.5);
      		if(d.parent) dehighlight(d.parent)
  		}
  		dehighlight(dd);
	}
}