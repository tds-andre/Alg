<!--Templates-->
<?php include_once "components/base/template.html"; ?>
<?php include_once "components/base-list/template.html"; ?>
<?php include_once "components/base-list-item/template.html"; ?>
<?php include_once "components/base-details/template.html"; ?>
<?php include_once "components/base-create-update/template.html"; ?>
<?php include_once "components/clusterization-list/template.html"; ?>
<?php include_once "components/clusterization-list-item/template.html"; ?>
<?php include_once "components/clusterization-details/template.html"; ?>
<?php include_once "components/clusterization-create-update/template.html"; ?>
<?php include_once "components/file-list/template.html"; ?>
<?php include_once "components/file-list-item/template.html"; ?>
<?php include_once "components/file-details/template.html"; ?>
<?php include_once "components/file-create-update/template.html"; ?>
<?php include_once "components/file-upload/template.html"; ?>






<div id="validation-modal" class="modal modal-message fade" style="display: none;" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <i class="fa"></i>
            </div>
            <div class="modal-title"></div><!--fa-warning-->

            <div class="modal-body">								
			</div>
			
            <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>

<div id="generic-modal" class="modal fade" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title"></h4>
                </div>

                <div class="modal-body">
                  
                    

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>                  
                </div>
            </div>
        </div>
    </div>


<!--Libraries-->
<script src="vendor/underscore/underscore-min.js" type="text/javascript"></script>
<script src="vendor/backbone/backbone.js" type="text/javascript"></script>
<script src="vendor/jfeldstein/jQuery.AjaxFileUpload.js/jQuery.AjaxFileUpload.js" type="text/javascript"></script>
<script type="text/javascript" src="libs/spring-model.js"></script>
<script type="text/javascript" src="libs/spring-collection.js"></script>

<!--Groundwork-->
<script type="text/javascript" src="config.js"></script>
<script type="text/javascript" src="models.js"></script>

<!--Views-->
<script type="text/javascript" src="components/base/view.js"></script>
<script type="text/javascript" src="components/base-list/view.js"></script>
<script type="text/javascript" src="components/base-list-item/view.js"></script>
<script type="text/javascript" src="components/base-details/view.js"></script>
<script type="text/javascript" src="components/base-create-update/view.js"></script>
<script type="text/javascript" src="components/file-upload/view.js"></script>
<script type="text/javascript" src="components/clusterization-list/view.js"></script>
<script type="text/javascript" src="components/clusterization-list-item/view.js"></script>
<script type="text/javascript" src="components/clusterization-details/view.js"></script>
<script type="text/javascript" src="components/clusterization-create-update/view.js"></script>
<script type="text/javascript" src="components/file-list/view.js"></script>
<script type="text/javascript" src="components/file-list-item/view.js"></script>
<script type="text/javascript" src="components/file-details/view.js"></script>
<script type="text/javascript" src="components/file-create-update/view.js"></script>



<!--App & Initialization-->
<script type="text/javascript" src="routes.js"></script>
<script type="text/javascript" src="app.js"></script>


