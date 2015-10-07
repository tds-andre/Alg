var app = app || {};
app.domain = app.domain || {};

(function () {
	'use strict';
	//------------------------------------------------------------------------------//
	// Models ----------------------------------------------------------------------//
	//------------------------------------------------------------------------------//

	app.domain.File = app.BaseModel.extend({
		nested: {
			clusterizations: app.domain.ClusrizationCollection,
			metrics: app.domain.MetricCollection,
			dimensions: app.domain.DimensionCollection
		}
	});	

	app.domain.Clusterization = app.BaseModel.extend({
		nested:{			
			file: app.domain.File			
		}
	});

	app.domain.Metric = app.BaseModel.extend({
		nested:{
			file: app.domain.File
		}
	});

	app.domain.Dimension = app.BaseModel.extend({
		nested:{
			file: app.domain.File
		}
	});


	//------------------------------------------------------------------------------//
	// Collections -----------------------------------------------------------------//
	//------------------------------------------------------------------------------//


	app.domain.FileCollection = app.BaseCollection.extend({
		path: "file",
		model: app.domain.File,
		process: function(model, options){
			options =  options || {};
			$.ajax({
				url: app.config.serverUrl + "/" +this.path + "/" + model.idd + "/process",
				type: "GET",
				success: function(data){
					if(options.success)
						options.success(model, data)
				}
			})

		}
	});

	app.domain.ClusterizationCollection = app.BaseCollection.extend({
		path: "clusterization",
		model: app.domain.Clusterization
	});

	app.domain.MetricCollection = app.BaseCollection.extend({
		path: "metric",
		model: app.domain.Metric
	});

	app.domain.DimensionCollection = app.BaseCollection.extend({
		path: "dimension",
		model: app.domain.Dimension
	});

	
	//------------------------------------------------------------------------------//
	// Others (e.g.: enums, constants) ---------------------------------------------//
	//------------------------------------------------------------------------------//

	

	//------------------------------------------------------------------------------//
	// End--------------------------------------------------------------------------//
	//------------------------------------------------------------------------------//


	
})();