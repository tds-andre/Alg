var app = app || {};
(function ($) {

	'use strict';	

	app.GraphView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			'change  .js-dim'  : 'metricChanged',
			'click .js-export' : 'exportClicked'		
		},		
		
		defaults: {
			
		},	

		template: _.template($('#graph-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {}
			this.graph = null;
			this.pie = null;
			this.graphPallete = null;
			this.piePallete = null;
			this.attrs = null;
			this.pieId;
			this.clusterCount = null;
			this.hash = (Math.random() * 100000000).toFixed();
		},		

		render: function () {
			var
				self = this;
			this.$el.html(this.template());
			this.graphId = "graph-"+this.hash;
			this.$graph = $(".js-graph-el", this.$el).prop("id", this.graphId);
			this.pieId = "pie-"+this.hash;
			$(".js-pie-el", this.$el).prop("id", this.pieId);
			this.$dim = $(".js-dim", this.$el);
			$(".js-dim-tooltip", this.$el).tooltip();
			$(window).bind('resize', function(){self.resize()});
		},		

		clusterFetched: function(){
			var
				self = this,
				file = null,
				cluster = this.model.get("clusters");

			this.clusterCount = cluster.length;
			if(this.clusterCount > 20){
				this.graphPallete= BubbleCluster.prototype.selectColor;
				this.piePallete= function(i){
					BubbleCluster.prototype.selectColor(i, self.clusterCount);
				}
			}else if (this.clusterCount>10){
				this.graphPallete= d3.scale.category20();
				this.piePallete= d3.scale.category20();
			}else{
				this.graphPallete= d3.scale.category10();
				this.piePallete= d3.scale.category10();
			}
			this.pie = new SuperPie({el: "#" + this.pieId, width:228, height:228,value: function(d){return d.count}, color: this.piePallete});
			this.pie.update(cluster.toJSON());

			file = this.model.get("file");
			file.fetch({url: this.model.get("file").href, success: function(){
				file.nest();
				self.listenTo(file.get("metrics"), "reset", self.metricsReset);
				file.get("metrics").fetch({reset: true, url: file.get("metrics").href});
			}});

		},

		resize: function(e){
			var
				self = this;
			window.resizeEvt;
		    $(window).resize(function()
		    {
		        clearTimeout(window.resizeEvt);
		        window.resizeEvt = setTimeout(function()
		        {
		        	self.graph.updateSize(self.$graph.width() ,self.graph.height)
		        }, 250);
		    });
		},

		start: function(options){
			var
				file = null,
				self = this,
				clusters = null;
			$.extend(this.options, this.defaults, options);
			this.render();
			this.model.nest();			
			clusters = this.model.get("clusters");
			clusters.reset();
			this.listenTo(clusters, "reset", this.clusterFetched)
			clusters.fetch({reset: true})
			

			$('.widget-buttons *[data-toggle="maximize"]').off();
			InitiateWidgets();
			

			
				
		},		

		// -------------------------------------------------------------------------------- //
		// View callbacks ----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		metricChanged: function(ev){
			var 
				index = null,
				$select = $(ev.currentTarget);
			if($select.hasClass("js-x")){
				index = 0;
			}else if($select.hasClass("js-y")){
				index = 1;
			}else if($select.hasClass("js-z")){
				index = 2;
			}
			this.metrics[index] = $select.val();
			this.graph.updateDimensions(this.metrics);
		},

		exportClicked: function(ev){
			if(this.isExporting)
				return
			this.isExporting = true;
    		var link = document.createElement('a');    
       		document.body.appendChild(link); // Firefox requires the link to be in the body
        	link.download = this.model.get("name")+".csv";
       		link.href = app.config.serverUrl + "/clusterization/" + this.model.idd + "/get";
       		link.click();
        	document.body.removeChild(link); // remove the link when done

        	this.isExporting = false;
		},

		// -------------------------------------------------------------------------------- //
		// Other callbacks ---------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //
		
		metricsReset: function(){
			var
				self = this;
			d3.tsv(app.config.serverUrl + "/clusterization/" + self.model.idd + "/get",function(error, data){
				self.data = data;
				self.graph = new BubbleCluster({el: '#graph-'+self.hash, dimensions: self.initialMetrics(), height: 500, width: self.$graph.width(), color: self.graphPallete, clusters: self.model.get("clusters").map(function(el){ return el.get("ind").toString()})});
				self.graph.update(self.data);
			});
		},

		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialMetrics: function(){
			var 		
				result = [],		
				metrics = this.model.get("file").get("metrics");				
			for(var i = 0; i < 3; i++){
				result.push(metrics.models[i].get("name"));
			}
			result.push("cluster");
			
			for(var i = 0; i < metrics.length; i++){
				this.appendMetric(metrics.models[i],i);
			}
			this.setSelected(result);
			this.metrics = result;
			return result;
		},

		appendMetric: function(metric,index){
			this.$dim.append('<option class="js-new-option"></option>');
			var $opt = $(".js-new-option", this.$el);
			$opt.val(metric.get("name"));
			$opt.html(metric.get("name"));
			$opt.data("model", metric);
			$opt.removeClass('js-new-option');
		},
		setSelected: function(arr){
			var
				$x = $(".js-x", this.$el),
				$y = $(".js-y", this.$el),
				$z = $(".js-z", this.$el);
			$('option[value="'+arr[0]+'"]', $x).attr("selected", "selected");
			$('option[value="'+arr[1]+'"]', $y).attr("selected", "selected");
			$('option[value="'+arr[2]+'"]', $z).attr("selected", "selected");


		}
	});
})(jQuery);