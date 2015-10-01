var app = app || {};
app.models = app.models || {};

(function () {
	'use strict';

	//------------------------------------------------------------------------------//
	// Base Model & Collection -----------------------------------------------------//
	//------------------------------------------------------------------------------//

	app.BaseModel = Backbone.Model.extend({
		nested: {},
		inherited: {},
		destroy: function(args){
			for(var key in this.inherited){

			}
			args = args || {};
			$.ajax({
 				url: this.href, 
 				type: "DELETE", 
 				contentType: "application/json", 				
 				success: function(data,status,xhr){ 					
 					if(args.success)
 						args.success(data, status, xhr);
 					console.log("BaseModel, destroy success:", data,status,xhr);
 				},
 				error: function(request,status,error){
 					if(args.error)
 						args.error(request,status,error);
 					console.log("BaseModel, destroy error:", request,status,error);
 				},
 				complete: function(a,b,c){
 					if(args.complete)
 						args.complete(a,b,c); 					
 				}
 			});

		},

		validate: function(){
			return true
		},

		validationBoilerplate: function(attrs,options){
			var
				defaults = {validate: false};
			options = options || {};
			options = _.extend(options, defaults);
			return options;
		},

		setIdentity: function(url){
			var
				ss = url.split("/");
			this.href = url;
			this.id = ss[ss.length-1];
			this.typePath = ss[ss.length-2];

		},
		parse: function(a){			
			this.setIdentity(a._links.self.href);			
			return a;
		},
		nestedFetch: function(_args, _deep){
			var deep = _deep || false;
			var args = _args || {}
			var _this = this;
			var links = args.links || this.attributes._links;
			this.dummy = {};		
	        for(var key in links)
	        {
	            if(key=='self'){
	            	this.href = links[key].href;
	            	continue;
	            }
	            var embeddedClass = this.nested[key] || this.inherited[key];
	            var embeddedLink = links[key].href;
	            if(embeddedClass)            
	            	var mdl = new embeddedClass();
	            else
	            	var mdl = new app.BaseModel();
	            if(mdl instanceof app.BaseModel)          
	           		this.set(key, mdl);
	           	else
	           		this.set(key,mdl);

	           	if(args.beforeFetch)
	           		args.beforeFetch(this, mdl)
	           	mdl.fetch({url: embeddedLink});
	           	if(deep)
	           		mdl.nestedFetch(null, true)
	          	
	        }
	        this.trigger("nested");
    	}
	});

	app.BaseCollection = Backbone.Collection.extend({
		url: function() {
 		   return app.config.serverUrl + '/' + this.path;
 		},
 		deepFetch: false,
 		parse: function(response){
 			
 			var 
 				arrays = response._embedded,
 				result = [],
 				i = 0,
 				key;
 			for(key in arrays){
 				for(i = 0; i < arrays[key].length; i++){
 					arrays[key][i].typePath = key;
 					result.push(arrays[key][i]);
 				}
 			} 
 			
 			return result;
 		},
 		persist: function(model,args){
 			args = args ? args : {};
 			if(model.validate(model.attributes, args)){
	 			$.ajax({
	 				url: this.url(), 
	 				type: "POST", 
	 				contentType: "application/json", 
	 				data: JSON.stringify(model.toJSON()),  
	 				success: function(data,status,xhr){
	 					model.setIdentity(xhr.getResponseHeader("Location"));
	 					if(args.success)
	 						args.success(data, status, xhr);
	 					console.log(data,status,xhr);
	 				},
	 				error: function(request,status,error){
	 					if(args.error)
	 						args.error(request,status,error);
	 				},
	 				complete: function(a,b,c){
	 					if(args.complete)
	 						args.complete(a,b,c);
	 					console.log(a,b,c);
	 				}
	 			});
 			}
 		},
 		update: function(model, args){
 			args = args ? args : {};
 			if(model.validate(model.attributes, args)){
	 			$.ajax({
	 				url: this.url() + "/" + model.id, 
	 				type: "PATCH", 
	 				contentType: "application/json", 
	 				data: JSON.stringify(model.toJSON()),  
	 				success: function(data,status,xhr){ 					
	 					if(args.success)
	 						args.success(data, status, xhr);
	 					console.log(data,status,xhr);
	 				},
	 				error: function(request,status,error){
	 					if(args.error)
	 						args.error(request,status,error);
	 				},
	 				complete: function(a,b,c){
	 					if(args.complete)
	 						args.complete(a,b,c);
	 					console.log(a,b,c);
	 				}
	 			});
	 		}
 		} 

 		
 			
 		
	}); 		
 		

	//------------------------------------------------------------------------------//
	// Collections -----------------------------------------------------------------//
	//------------------------------------------------------------------------------//


	app.models.FileCollection = app.BaseCollection.extend({
		path: "file",
		model: app.models.File
	});

	app.models.FileCollection = app.BaseCollection.extend({
		path: "file",
		model: app.models.File
	});

	//------------------------------------------------------------------------------//
	// Models ----------------------------------------------------------------------//
	//------------------------------------------------------------------------------//

	app.models.File = app.BaseModel.extend({
		nested: {
			clusterizations: app.models.ClusrizationCollection
		},

		upload: function(formData, options){
			var
				url = app.LogCollection.prototype.url() + "/" + this.id + "/upload",
				defaults = {},
				settings = $.extend(options,defaults);

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
        				if(settings.progress)
         					myXhr.upload.addEventListener('progress', settings.progress, false); 
        			}
       				return myXhr;
       			},
      
       			success:  function(data) {       				
         			if(settings.success)
       					settings.success(data)      		
       			},
       			error: function(a,b,c){
       				if(settings.error)
       					settings.error(a,b,c)
       			},
       			complete: function(a,b,c){
       				if(settings.complete)
       					settings.complete(a,b,c)
       			}
			});
		}
	});

	

	app.models.Clusterization = app.BaseModel.extend({
		nested:{			
			file: app.models.File			
		},	

		validate: function(attrs,options){
			var
				result = true;
			if(!this.has("name"))
				result = false;
			if(!this.has("file"))
				result = false;

			return result;

		}
	});




	/*app.TransactionCollection = app.BaseCollection.extend({
		path:"transaction",
		model: app.TransactionModel,
		initialize: function(){
			this.on("reset", function(){
				this.models.forEach(function(mdl){mdl.nestedFetch()});				
			});			
		}
	});*/

	//------------------------------------------------------------------------------//
	// Others (e.g.: enums, constants) ---------------------------------------------//
	//------------------------------------------------------------------------------//

	

	//------------------------------------------------------------------------------//
	// End--------------------------------------------------------------------------//
	//------------------------------------------------------------------------------//


	console.log("models.js loaded");
})();