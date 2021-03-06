var app = app || {};
(function ($) {

	'use strict';	

	app.BaseDetailsView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			//'click  .js-??????-button'  : 'buttonClicked',			
		},		
		
		options: {
			
		},	

		template: _.template($('#base-details-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			
		},		

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));			
			return this;			
		},

		start: function(options){
			this.options = _.extend(this.options, options);
			this.render();
			return this;		
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