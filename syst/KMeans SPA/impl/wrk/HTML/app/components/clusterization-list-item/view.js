var app = app || {};
(function ($) {

	'use strict';	

	app.ClusterizationListItemView = Backbone.View.extend({

		tagName: "tr",

		events: {
			'click  .js-detail'  : 'detailClicked',
			'click  .js-edit'  : 'editClicked',
			'click  .js-delete'  : 'deleteClicked',
			'click  .js-link'    : 'linkClicked',
			'click  .js-play'    : 'playClicked'
		},		
		
		options: {
			
		},	

		template: _.template($('#clusterization-list-item-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {};
			this.ready = this.model.get("status") == 'READY';
		},		

		render: function () {
			var
				json = this.model.toJSON();
			this.$el.html(this.template(json));	
			this.$play = $(".js-play", this.$el);
			this.$status = $(".js-status", this.$el);
			return this;			
		},

		start: function(options){
			$.extend(true, this.options, this.defaults, options);
			
		},

		// -------------------------------------------------------------------------------- //
		// View callbacks ----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		detailClicked: function(ev){
			this.trigger("detail",this);
		},
		editClicked: function(ev){
			this.trigger("edit",this);
		},
		linkClicked: function(ev){
			if(this.ready)
				this.trigger("link",this);
		},
		playClicked: function(ev){
			var
				self = this;
			this.trigger("play",this);
			this.$play.attr("disabled", "disabled");
			this.$status.html("RUNNING");
			app.collections.clusterizations.run(this.model,{success: function(){
				self.$status.html("READY");
				self.ready = true;
			},error: function(){
				this.$status.html("ERROR");
			}});
		},
		deleteClicked: function(ev){
			var
				self = this;
			bootbox.confirm("Tem certeza que deseja excluir o arquivo "+this.model.get("name")+" ?", function (result) {
				if (result) {
					self.model.destroy({
						success:function(ev){
							self.trigger("delete",self);
						},
						error: function(a,b,error){
							self.trigger("error",{view: self, message:error});
						}
					})
				}
			});
		},
		// -------------------------------------------------------------------------------- //
		// Other callbacks ---------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //
		enable: function(){
			this.ready = true;
			
		}
	});
})(jQuery);