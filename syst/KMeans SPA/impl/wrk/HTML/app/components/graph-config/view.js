var app = app || {};
(function ($) {

	'use strict';	

	app.GraphConfigView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			//'click  .js-??????-button'  : 'buttonClicked',			
		},		
		
		defaults: {
			
		},	

		template: _.template($('#graph-config').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		show: function(){
			this.$modal.modal("show");
		},

		initialize: function(){
			this.options = {}
		},		

		render: function () {
			this.$el.html(this.template());	
			this.$modal = $(".js-modal", this.el);
			return this;			
		},

		start: function(options){
			$.extend(this.options, this.defaults, options);
			return this.render();			
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