function LineHistogram(args){
	var
		self = this,
		defaults = {
			width: 2960,
			height: 700,
			el: 'body',
	        margin: 50,						          
	        min:5,
	        max:16,
	        margin: {top: 20, right: 120, bottom: 20, left: 120},
	        range: [5,25],
	        size: function(d){return d.count},
	        indicator: function(d){return d.value},
	       	domain: [0,2],
	       	gap: 200,
	       	luminescence: 0.6,
	       	opacity: 0.8,
	       	title: function(d){return acessors.indicator(d)}
		}

	this.options = {};
	$.extend(this.options, defaults, args);

}