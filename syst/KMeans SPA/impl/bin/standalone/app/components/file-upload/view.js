var app = app || {};
(function ($) {

	'use strict';	

	app.FileUploadView = Backbone.View.extend({

		// Variables----------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //
		
		events: {
			'click  .js-file-container'  : 'containerClicked',
			'change .js-file-input'      : 'fileSelected'	
		},		
		
		defaults: {
			
		},	

		

		template: _.template($('#file-upload-template').html()),

		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {};
		},		

		render: function () {
			this.$el.html(this.template());	
			this.$progress = $(".js-progress", this.$el)
			this.$message = $(".js-progress-message", this.$el);
			this.uploaded = false;	
			return this;			
		},

		start: function(options){
			$.extend(true, this.options, this.defaults, options);			
			return this.render();			
		},

		// View callbacks------------------------------------------------------------------ //
		// -------------------------------------------------------------------------------- //

		containerClicked: function(ev){
			$(".js-file-input", this.$el)[0].click()
		},

		fileSelected: function(ev){
			
			var
				form = $(ev.currentTarget).parents("form")[0],
				formData = new FormData(form),
				ss =  $(ev.currentTarget).val().split("\\");
				name = ss[ss.length-1];
			if(app.isDefined(name))
				this.updateFilename(name);
			this.upload(name,formData);
				
			
		},

		// Other callbacks----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //
		uploadProgress: function(event){
			var
				progress = parseInt(event.loaded/event.total * 100);
			console.log(event);
			this.setProgress(this.setProgress(progress))
			this.setProgressMessage(progress + "%")
			if(this.options.progress)
				this.options.progress(this, event);
		}
		,

		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //
       
		updateFilename: function(name){
			this.filename = name;
			$(".js-file-name", this.$el).val(name);
		},

		setProgressMessage: function(msg, type){
			this.$message.html(msg);
			if(type == "info"){
       			this.$progress.removeClass("progress-bar-success")
       			this.$progress.removeClass("progress-bar-danger")
       			this.$progress.addClass("progress-bar-info")
       		}
			if(type == "success"){
       			this.$progress.removeClass("progress-bar-info")
       			this.$progress.addClass("progress-bar-success")
       		}
       		if(type == "danger"){
       			this.$progress.removeClass("progress-bar-info")
       			this.$progress.addClass("progress-bar-danger")
       		}
		},

       	setProgress: function(val){ 
       		if(val)     		
       			this.$progress.css("width", val + "%");
       	},

		upload: function(name, formData){
			var
				self = this,
				url = this.options.url;

			if(self.options.before)
				if(self.options.before(self))
					return;

			self.setProgressMessage("Iniciando upload", "info");
			$.ajax({
       			url: url,  
       			type: 'POST',
       			data: formData,
		     	cache: false,
		        contentType: false,
		        processData: false,
       			xhr: function() { 
        			var
        				myXhr = $.ajaxSettings.xhr();
        			if(myXhr.upload){
        				myXhr.upload.addEventListener('progress', function(event){
        					self.uploadProgress(event)
        				}, false); 
        			}
       				return myXhr;
       			},
      
       			success:  function(data) {
       				self.uploaded = true;
       				self.setProgressMessage("Upload concluído", "success")
         			if(self.options.success)
       					self.options.success(self,data)      		
       			},
       			error: function(a,b,c){
       				if(a.readyState == 4 && a.status == 200){
       					self.uploaded = true;
       					self.setProgressMessage("Upload concluído", "success")
         				if(self.options.success)
       						self.options.success(self,data)     
       				}else{
	       				self.setProgressMessage("Erro", "danger")
	       				if(self.options.error)
	       					self.options.error(self,a,b,c)
       				}
       			},
       			complete: function(a,b,c){       				
       				if(self.options.complete)
       					self.options.complete(self,a,b,c)
       			}
			});
		

		}
	});
})(jQuery);