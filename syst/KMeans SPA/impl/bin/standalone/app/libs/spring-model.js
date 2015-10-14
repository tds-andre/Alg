var app = app || {};

(function () {
	'use strict';

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
			this.idd = ss[ss.length-1];
			this.typePath = ss[ss.length-2];

		},
		parse: function(a){
			if(a._links)
				this.setIdentity(a._links.self.href);
			return a;
		},
		nest: function(_args){		
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
	           	mdl.href = embeddedLink;         	
	        }
	        this.trigger("nest");
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
	           	mdl.fetch({url: embeddedLink, reset: true});
	           	if(deep)
	           		mdl.nestedFetch(null, true)
	          	
	        }
	        this.trigger("innersync");
    	}
	});
})();

	