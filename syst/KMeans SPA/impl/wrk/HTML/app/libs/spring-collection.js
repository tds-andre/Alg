var app = app || {};

(function () {
	'use strict';

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
 			if(!app.isDefined(model.validate(model.attributes, args))){
	 			$.ajax({
	 				url: this.url(), 
	 				type: "POST", 
	 				contentType: "application/json", 
	 				data: JSON.stringify(model.toJSON()),  
	 				success: function(data,status,xhr){
	 					model.setIdentity(xhr.getResponseHeader("Location"));
	 					if(args.success)
	 						args.success(model, data, status, xhr);
	 					console.log(data,status,xhr);
	 				},
	 				error: function(request,status,error){
	 					if(args.error)
	 						args.error(model, request,status,error);
	 				},
	 				complete: function(a,b,c){
	 					if(args.complete)
	 						args.complete(model, a,b,c);
	 					console.log(a,b,c);
	 				}
	 			});
 			}
 		},
 		update: function(model, args){
 			args = args ? args : {};
 			if(!app.isDefined(model.validate(model.attributes, args))){
	 			$.ajax({
	 				url: this.url() + "/" + model.idd, 
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
 		},
 		patch: function(model, attrs, args){
 			args = args ? args : {};
 			if(!app.isDefined(model.validate(model.attributes, args))){
	 			$.ajax({
	 				url: this.url() + "/" + model.idd, 
	 				type: "PATCH", 
	 				contentType: "application/json", 
	 				data: JSON.stringify(attrs),  
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
 		
})();		