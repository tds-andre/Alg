var app = app || {};
(function ($) {

	'use strict';	

	app.FileListView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			'click  .js-new'  : 'newClicked',			
		},			
		
		options: {
			
		},	

		template: _.template($('#file-list-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {};
		},		

		render: function () {
			this.$el.html(this.template());			
			return this;				
		},

		start: function(options){
			$.extend(true, this.options, this.defaults, options);
			this.render();
			this.$list = $(".js-list");
			this.collection.reset();
			this.listenTo(this.collection, "reset", this.addAll);			
			this.collection.fetch({reset: true});		
		},

		// -------------------------------------------------------------------------------- //
		// View callbacks ----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		newClicked: function(ev){
			this.trigger("new",this);
		},	

		// -------------------------------------------------------------------------------- //
		// Other callbacks ---------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		addOne: function (file) {
			var 
				view = new app.FileListItemView({ model: file }),
				self = this;
			view.start();
			this.$list.append(view.render().el);
			view.on("detail", function(view){self.trigger("detail",view)});
			view.on("edit", function(view){self.trigger("edit",view)});
			view.on("delete", function(view){view.remove();self.trigger("delete");});
			
		},

		addAll: function(){			
			this.$list.html('');
			this.collection.each(this.addOne, this);
		}

	});
})(jQuery);