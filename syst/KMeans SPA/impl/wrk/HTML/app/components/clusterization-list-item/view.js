var app = app || {};
(function ($) {

	'use strict';	

	app.ClusterizationListItemView = Backbone.View.extend({

		tagName: "tr",

		events: {
			'click  .js-detail'  : 'detailClicked',
			'click  .js-edit'  : 'editClicked',
			'click  .js-delete'  : 'deleteClicked',
			'click  .js-link'    : 'linkClicked'
		},		
		
		options: {
			
		},	

		template: _.template($('#clusterization-list-item-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {};
		},		

		render: function () {
			var
				json = this.model.toJSON();
			this.$el.html(this.template(json));			
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
			this.trigger("link",this);
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

	});
})(jQuery);