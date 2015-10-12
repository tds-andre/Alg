var app = app || {};
app.domain = app.domain || {};

(function () {
	'use strict';
	//------------------------------------------------------------------------------//
	// Models ----------------------------------------------------------------------//
	//------------------------------------------------------------------------------//

	

	app.domain.Metric = app.BaseModel.extend({
		
	});
	app.domain.MetricCollection = app.BaseCollection.extend({
		path: "metric",
		model: app.domain.Metric
	});

	//------------------------------------------------------------------------------//

	app.domain.Dimension = app.BaseModel.extend({
		
	});
	app.domain.DimensionCollection = app.BaseCollection.extend({
		path: "dimension",
		model: app.domain.Dimension
	});

	//------------------------------------------------------------------------------//

	app.domain.File = app.BaseModel.extend({
		nested: {
			clusterizations: app.domain.ClusterizationCollection,
			metrics: app.domain.MetricCollection,
			dimensions: app.domain.DimensionCollection
		}
	});	

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

	//------------------------------------------------------------------------------//	

	app.domain.SelectedMetric = app.BaseModel.extend({
		nested:{
			metric: app.domain.Metric
			
		},
		initialize: function(){
			this.nested.clusterization= app.domain.Clusterization
		}

	});
	app.domain.SelectedMetricCollection = app.BaseCollection.extend({
		path:"selected",
		model: app.domain.SelectedMetric
	});

	//------------------------------------------------------------------------------//

	app.domain.Clusterization = app.BaseModel.extend({
		nested:{
			metrics: app.domain.MetricCollection,
			selection: app.domain.SelectedMetricCollection
		}
	});
	app.domain.ClusterizationCollection = app.BaseCollection.extend({
		path: "clusterization",
		model: app.domain.Clusterization,
		run: function(model, options){
			options =  options || {};
			$.ajax({
				url: app.config.serverUrl + "/" +this.path + "/" + model.idd + "/run",
				type: "GET",
				success: function(data){
					if(options.success)
						options.success(model, data)
				}
			})
		}

	});

	//------------------------------------------------------------------------------//

	


	

	
	//------------------------------------------------------------------------------//
	// Others (e.g.: enums, constants) ---------------------------------------------//
	//------------------------------------------------------------------------------//


	
			
	

	//------------------------------------------------------------------------------//
	// End--------------------------------------------------------------------------//
	//------------------------------------------------------------------------------//


	
})();