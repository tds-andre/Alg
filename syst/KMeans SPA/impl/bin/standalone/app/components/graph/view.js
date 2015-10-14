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
			this.hash = (Math.random() * 100000000).toFixed();
		},		

		render: function () {
			this.$el.html(this.template());
			$(".js-graph", this.$el).prop("id", "graph-"+this.hash);
			this.$dim = $(".js-dim", this.$el);
		},		

		start: function(options){
			var
				file = null,
				self = this;
			$.extend(this.options, this.defaults, options);
			this.render();
			this.model.nest();			
			file = this.model.get("file");
			file.fetch({url: this.model.get("file").href, success: function(){
				file.nest();
				self.listenTo(file.get("metrics"), "reset", self.metricsReset);
				file.get("metrics").fetch({reset: true, url: file.get("metrics").href});
			}});			
			
				
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
				self.graph = new BubbleCluster({el: '#graph-'+self.hash, dimensions: self.initialMetrics() });
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