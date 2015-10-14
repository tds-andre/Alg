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
			this.clones = {};
		},		

		render: function () {
			var
				json ={},
				self = this,
				defaults =  {};
			$.extend(defaults, 				
				app.domain.Clusterization.prototype.defaults				
			);
			json.defaults = defaults;
			this.$el.html(this.template(json));
			this.clones.$metrics = $(".js-metrics-el", this.$el).clone();
			this.listenTo(this.collection, "reset", this.addFiles)
			if(!this.options.fetched){
				this.collection.reset();
				this.collection.fetch({reset: true});
			}else
				this.addFiles();
			this.$name = $(".js-name", this.$el);
			this.$quality = $(".js-quality", this.$el);
			this.$initial = $(".js-initial", this.$el);
			this.$normalize = $(".js-normalize", this.el);
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
			this.file.nest();
			if(this.metricsView){
				this.metricsView.remove();
				$(".js-metrics-container").append(this.clones.$metrics);
			}
			this.metricsView = new app.MetricListView({el: $(".js-metrics-el", this.el)[0], collection: this.file.get("metrics")});
			this.metricsView.start();

		},

		save: function(){
			var
				self = this;
			if(this.isSaving)
				return;
			this.isSaving = true;
			try{
				this.clearInvalidation();				
				this.model = new app.domain.Clusterization();			
				this.model.on("invalid", function(model, errors){
					self.showInvalidation(model, errors)					
				})
				
				if(self.metricsView.values.length == 0){
					this.model.trigger("invalid", this.model, [{field:"metrics", message:"Selecione pelo menos uma métrica"}]);
					throw null;
				}

				this.model.set("file", this.file ? this.file.href : null);
				this.model.set("name", this.$name.val());
				this.model.set("initial", this.$initial.val());
				this.model.set("quality", this.$quality.val());
				this.model.set("normalize", this.$normalize.prop("checked"));

				app.collections.clusterizations.persist(this.model,{success: function(){
					self.metricsView.values.forEach(function(href,index){
						var selected = new app.domain.SelectedMetric();
						selected.set("clusterization", self.model.href );
						selected.set("metric", href);
						app.collections.selecteds.persist(selected);
					});
					self.trigger("create", self);
					this.isSaving = false;
				}});
			}catch(e){
				this.isSaving = false;
			}
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
		},



		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		clearInvalidation: function(){
			var $fields = $(".js-validation", this.$el);
			$fields.removeClass("has-warning")
			$fields.each(function(field){
				$("input",field).attr("placeholder",$(field).data("default-placeholder"))
			})
			$(".js-validation-message", this.$el).hide();

		},

		showInvalidation: function(model, errors){
			var
				self = this;			
				self.isSaving = false;
				errors.forEach(function(e){
					var
						$i = $(".js-validation-"+e.field,self.$el);
					$i.data("default-placeholder", $("input",$i).attr("placeholder"));
					$("input",$i).attr("placeholder", e.message);
					$(".js-validation-message-"+e.field, self.$el).html(e.message).show();
					$i.addClass("has-warning")
					
					
					
					
				})

		}

	});
})(jQuery);