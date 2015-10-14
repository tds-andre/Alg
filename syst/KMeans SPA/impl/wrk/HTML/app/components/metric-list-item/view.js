var app = app || {};
(function ($) {

	'use strict';	

	app.MetricListItemView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		tagName: "li",

		events: {
			'keypress  .js-input'  : 'metricWritten',
			'click .js-add' : 'addClicked',
			'click .js-clear': 'clearClicked'
		},		
		
		defaults: {
			
		},	

		template: _.template($('#metric-list-item-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {}
		},		

		render: function () {
			this.$el.html(this.template());
			this.$el.addClass("dd-item").addClass("dd2-item")
			this.$input = $(".js-input", this.$el);
			this.$input.attr("list", this.options.listId);
			return this;			
		},

		start: function(options){
			$.extend(this.options, this.defaults, options);
			return this.render();			
		},

		lock: function(){
			this.$input.attr("disabled", "disabled")			;
			$(".js-clear", this.$el).show();
			$(".js-bg", this.$el).addClass("bg-azure");
			$(".js-icon").removeClass("fa-plus")
			$(".js-icon").addClass("fa-check")
		},


		// -------------------------------------------------------------------------------- //
		// View callbacks ----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		metricWritten: function(ev){			
			if(ev.keyCode==13)
				this.trigger("select", this, this.$input.val())
		},
		addClicked: function(ev){
			this.trigger("select", this, this.$input.val())
		},
		clearClicked: function(ev){
			this.remove();
		}


		// -------------------------------------------------------------------------------- //
		// Other callbacks ---------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

	});
})(jQuery);