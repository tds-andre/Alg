var app = app || {};
app.navigation = app.navigation || {};
app.views = app.views || {};
$(function () {
    'use strict';

    //core
    app.placeholderId = "#main-content-placeholder";   
    app.$placeholder = $(app.placeholderId);          //MARCAÇÃO : .header-title
    app.$title = $("#main-content-title");            //MARCAÇÃO : <!-- Page Body --> >>>> class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
    app.$validation = $("#validation-modal");         //MARCAÇÃO : Fica no arquivo app.php
    app.$modal = $("#generic-modal");                 //MARCAÇÃO : Fica no arquivo app.php
    app.$breadcrumb = $("#main-breadcrumb");          //MARCAÇÃO : Em cima do titulo
        
    //marcações
    // #new-origin-button :  menu >>>>> <!-- origens -->
    // #list-origins-button : menu >>>>> <!-- origens -->    

    //compact view for generic modal
    app.views.modal = {
        $el: app.$modal,
        $content: null,
        $title: null,
        show: function(title, html){
            if(html)
                this.$content.html(html);
            if(title)
                this.$title.html(title);
            this.$el.modal("show");           
        },
        init: function(){
            this.$content = this.$el.find(".modal-body");
            this.$title = this.$el.find(".modal-title");
        }
    }
    app.views.modal.init();

    //compact view for the breadcrumb
    app.views.validation = {
        $el: app.$validation ,
        $body: null,
        $title: null,
        $button: null,
        $icon: null,
        warn: function(msg){
            this.$el.removeClass("modal-success");
            this.$el.addClass("modal-warning");
            this.$icon.removeClass("glyphicon-check");
            this.$icon.removeClass("glyphicon");
            this.$icon.addClass("fa");
            this.$icon.addClass("fa-warning");   
            this.$body.html(msg);
            this.$el.modal("show");
            this.$title.html("Atenção");
            this.$button.removeClass("btn-success");
            this.$button.addClass("btn-warning")
        },

        success: function(msg){      
            this.$el.removeClass("modal-warning");
            this.$el.addClass("modal-success");
            this.$icon.removeClass("fa-warning");
            this.$icon.removeClass("fa");
            this.$icon.addClass("glyphicon-check");
            this.$icon.addClass("glyphicon");            
            this.$body.html(msg);
            this.$title.html("Sucesso")
            this.$el.modal("show");
            this.$button.removeClass("btn-warning");
            this.$button.addClass("btn-success")
        },
        init: function(){
            this.$body = this.$el.find(".modal-body");
            this.$title = this.$el.find(".modal-title");
            this.$button = this.$el.find(".btn");
            this.$icon = this.$el.find(".fa");
        }
    },    
    app.views.validation.init();

    //compact view for the breadcrumb and title
    app.views.breadcrumb = {
    	$el: app.$breadcrumb,
    	set: function(strings){
    		var
    			i = 0,
    			$last = null,
    			proto = this.$el.find("li:first-child").clone();

    		this.$el.html("").append(proto);
    		for(i = 0; i < strings.length; i++){
    			this.$el.append("<li>"+strings[i]+"</li>")
    		}
    		this.$el.find("li:last-of-type").addClass("active");
    		
    	}
    };
    app.views.title = {
        $el: app.$title,
        set: function(title){
            this.$el.html(title);
        }
    }

    //compact view for the menu
    app.views.menu = {
    	init: function(){
    		$("#clusterization-new").on("click", function(event){
    			app.navigation.to("NewClusterization");    			
    		});
            $("#clusterization-list").on("click", function(event){
                app.navigation.to("ClusterizationList");
            });
            $("#file-list").on("click", function(event){
                app.navigation.to("FileList");
            });
            $("#file-new").on("click", function(event){
                app.navigation.to("NewFile");
            });
           
    	}
    };
    app.views.menu.init();
    
    //utils
    app.sleep = function(millis)
	 {
	  var date = new Date();
	  var curDate = null;
	  do { curDate = new Date(); }
	  while(curDate-date < millis);
	}
    app.isDefined = function(obj){
        if(obj==null || obj=="undefined" || obj == "")
            return false;
        return true;
    }

    app.collections = {
        files: new app.domain.FileCollection()
    };

	

	//initialization
    /*app.transactions = new app.TransactionCollection({elEctor:"#transaction-list-placeholder"});
    app.logs = new app.LogCollection();
    app.showTransactionList();
    app.transactionView.on("selected", function(transaction){
    	app.showStartTransaction(transaction);
    })*/



    console.log("kmeans app loaded");
});


