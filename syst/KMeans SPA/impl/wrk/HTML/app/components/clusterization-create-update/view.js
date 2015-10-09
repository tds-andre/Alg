var app = app || {};
(function ($) {

	'use strict';	

	app.ClusterizationCreateUpdateView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			'change  .js-files'  : 'fileSelected',
			'click .js-save'     : 'save'
		},		
		
		defaults: {
			fetched: false
		},	

		template: _.template($('#clusterization-create-update-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {};
			this.metricsView = null;
			this.model = null;
			this.isSaving = false;
		},		

		render: function () {
			var
				self = this;
			this.$el.html(this.template());
			this.listenTo(this.collection, "reset", this.addFiles)
			if(!this.options.fetched){
				this.collection.reset();
				this.collection.fetch({reset: true});
			}else
				this.addFiles();
			this.$name = $(".js-name", this.$el);			
			return this;			
		},

		start: function(options){
			$.extend(this.options, this.defaults, options);
			return this.render();			
		},

		// -------------------------------------------------------------------------------- //
		// View callbacks ----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		fileSelected: function(){
			if(this.metricsView)
				this.metricsView.remove();
			this.file = this.collection.models[$(".js-files", this.$el).val()];
			this.file.nestedFetch();
			this.metricsView = new app.MetricListView({el: $(".js-metrics-el", this.el)[0], collection: this.file.get("metrics")});
			this.metricsView.start();

		},

		save: function(){
			var
				self = this;
			if(this.isSaving)
				return;
			this.isSaving = true;
			this.model = new app.domain.Clusterization();
			this.model.set("file", this.file.href);
			this.model.set("name", this.$name.val());
			app.collections.clusterizations.persist(this.model,{success: function(){
				self.metricsView.values.forEach(function(href,index){
					var selected = new app.domain.SelectedMetric();
					selected.set("clusterization", self.model.href );
					selected.set("metric", href);
					app.collections.selecteds.persist(selected);
				});
				self.trigger("create", self);
				this.isSaving = false;
			}})


		},

		// -------------------------------------------------------------------------------- //
		// Other callbacks ---------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //
		addFiles: function(){
			$(".js-files", self.$el).html("<option selected disabled>Selecione</option>")
			this.collection.each(this.addFile);
		},

		addFile: function(file, index){
			$(".js-files", self.$el).append("<option value="+index+">"+file.get("name")+"</options>")
		}



		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

	});
})(jQuery);