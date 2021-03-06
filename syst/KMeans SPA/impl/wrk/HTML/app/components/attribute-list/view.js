var app = app || {};
(function ($) {

	'use strict';	

	app.AttributeListView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			//'click  .js-??????-button'  : 'buttonClicked',			
		},		
		
		defaults: {
			
		},	

		template: _.template($('#attribute-list').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {}
		},		

		render: function () {
			this.$el.html(this.template());	
			this.$table = $(".js-table", this.$el);
			this.$list = $(".js-list", this.$el)
			for(var key in this.model){
				var v = new app.AttributeListItemView({model: {key: key, value: this.model[key]}});
				v.start();
				this.$table.append(v.el);
			}

			return this;			
		},

		start: function(options){
			$.extend(this.options, this.defaults, options);
			return this.render();			
		},

		expand: function(){
			$(".js-list", this.$el).removeClass("lista");
		},
		contract: function(){
			$(".js-list", this.$el).addClass("lista");
		},
		toggle: function(){
			$(".js-list").toggleClass("lista");
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