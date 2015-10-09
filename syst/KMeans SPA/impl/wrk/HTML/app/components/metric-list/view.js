var app = app || {};
(function ($) {

	'use strict';	

	app.MetricListView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			//'click  .js-??????-button'  : 'buttonClicked',			
		},		
		
		defaults: {
			fetched: false
		},	

		template: _.template($('#metric-list-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {}
			this.$data = null;
			this.listId = (Math.Random * (100000000)).toFixed(0);
			this.values = [];		},		

		render: function () {
			this.$el.html(this.template());
			$(".js-data", this.$el).prop("id", this.listId);
			return this;			
		},

		start: function(options){
			$.extend(this.options, this.defaults, options);
			this.render();
			this.$data = $(".js-data", this.$el);
			this.listenTo(this.collection, "reset", this.addMetrics);
			if(!this.options.fetched){
				this.collection.reset();
				this.collection.fetch({reset: true});
			}else
				this.addMetrics();
			this.addField();

				
		},

		// -------------------------------------------------------------------------------- //
		// View callbacks ----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		

		// -------------------------------------------------------------------------------- //
		// Other callbacks ---------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //
		addMetrics: function(){
			var
				self = this;			
			this.$data.html("");
			this.collection.each(function(metric,index){self.addMetric(metric,index)});
		},

		addMetric: function(metric, index){
			this.$data.append("<option value="+metric.get("name")+">"+metric.href+"</options>");
		},


		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		addField: function(){
			var 
				self = this,
				view = new app.MetricListItemView();
			view.on("select", function(v, value){
				var $opt = $("option[value="+value+"",this.$data);
				if($opt.length>0){
					v.lock();
					self.addField();
					self.values.push($opt.html());
				}
			});
			$(".js-list", this.$el).append(view.start({listId: this.listId}).$el);
			$("input", view.$el).focus();
		}

	});
})(jQuery);