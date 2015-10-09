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
		},		

		render: function () {
			var
				json = this.model.toJSON();
			this.$el.html(this.template(json));			
			return this;			
		},

		start: function(options){
			var
				self = this;
			$.extend(this.options, this.defaults, options);
			if(this.model.get("status")=="CREATED"){
				app.collections.clusterizations.run(this.model, {success: function(error,data){
					d3.tsv(app.config.serverUrl + "/clusterization/" + self.model.idd + "/get",function(){
						self.data = data;
						self.createD3();
					})
				}})
				return this;
			}
			else
				d3.tsv(app.config.serverUrl + "/clusterization/" + self.model.idd + "/get",function(data, error){
						self.data = data;
						self.createD3();
					});		
		},

		createD3: function(){
			$(".js-main", this.$el).show();
			$(".js-progress", this.$el).hide();
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