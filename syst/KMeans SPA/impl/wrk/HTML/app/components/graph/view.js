var app = app || {};
(function ($) {

	'use strict';	

	app.GraphView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			//'click  .js-??????-button'  : 'buttonClicked',			
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
		},		

		render: function () {
			var
				self = this,
				json = this.model.toJSON();
			this.$el.html(this.template(json));
			d3.tsv(app.config.serverUrl + "/clusterization/" + self.model.idd + "/get",function(error, data){
				self.data = data;
				self.createD3();
			});			
			return this;			
		},

		start: function(options){
			var
				self = this;
			$.extend(this.options, this.defaults, options);
			return this.render();
				
		},

		createD3: function(){
			$(".js-main", this.$el).show();
			$(".js-progress", this.$el).hide();
			this.graph = new BubbleCluster({el: '#graph', dimensions: ["m7","idade", "m3","cluster"] });
			this.graph.update(this.data)

		},

		// -------------------------------------------------------------------------------- //
		// View callbacks ----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		buttonClicked: function(ev){}

		// -------------------------------------------------------------------------------- //
		// Other callbacks ---------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

	});
})(jQuery);