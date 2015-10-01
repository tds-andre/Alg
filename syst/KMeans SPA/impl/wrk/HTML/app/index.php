<!DOCTYPE html>
<!--
BeyondAdmin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.1
Version: 1.3
Purchase: http://wrapbootstrap.com
-->

<html xmlns="http://www.w3.org/1999/xhtml" >

<!-- Head -->
<head>
    <meta charset="utf-8" />
    <title>Clusterizador</title>

    <meta name="description" content="Dashboard" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="shortcut icon" href="../assets/img/favicon.png" type="image/x-icon">

    <!--Basic Styles-->
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />

    <link href="../assets/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../assets/css/weather-icons.min.css" rel="stylesheet" />

    <!--Fonts-->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,600,700,300" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>
    <!--Beyond styles-->
    <link id="beyond-link" href="../assets/css/beyond.min.css" rel="stylesheet" type="text/css" />
    <link href="../assets/css/demo.min.css" rel="stylesheet" />
    <link href="../assets/css/typicons.min.css" rel="stylesheet" />
    <link href="../assets/css/animate.min.css" rel="stylesheet" />
    <link href="../assets/css/skins/mais.css" rel="stylesheet" type="text/css" />
    
    <!--Page Related styles-->
    <link href="../assets/css/dataTables.bootstrap.css" rel="stylesheet" />

    <!--Skin Script: Place this script in head to load scripts for skins and rtl support -->
    <script src="../assets/js/skins.min.js"></script>
</head>
<!-- /Head -->
<!-- Body -->
<body>

    <!-- Navbar -->
    <div class="navbar">
        <div class="navbar-inner">
            <div class="navbar-container">
                <!-- Navbar Barnd -->
                <div class="navbar-header pull-left">
                    <a href="#" class="navbar-brand">
                        <small>
                            <img src="../assets/img/logo.png" alt="" />
                        </small>
                    </a>
                </div>
                <!-- /Navbar Barnd -->
                
                <!-- Sidebar Collapse -->
                <div class="sidebar-collapse hidden-print" id="sidebar-collapse">
                    <i class="collapse-icon fa fa-bars"></i>
                </div>
                <!-- /Sidebar Collapse -->
                
                <!-- Account Area and Settings --->
                <div class="navbar-header pull-right hidden-print">
                    <div class="navbar-account">
                        <ul class="account-area">
                            
                            <!-- atalho aplicacoes -->
                            <li>
                                <a class=" dropdown-toggle" data-toggle="dropdown" title="Atalho Aplicações" href="#">
                                    <i class="icon fa fa-desktop"></i>
                                </a>
                                <!--aplicacoes Dropdown-->
                                <ul class="pull-right dropdown-menu dropdown-arrow dropdown-notifications atalho_aplicacoes">
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <img src="../assets/img/aplic_icons/aplic_icon_gpd.jpg" />
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">GPD TCIS</span>
                                                    <span class="description">v 3.7.0</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <img src="../assets/img/aplic_icons/aplic_icon_painel.jpg" />
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Painel TCIS</span>
                                                    <span class="description">v 3.7.0</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <img src="../assets/img/aplic_icons/aplic_icon_cbi.jpg" />
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Calandra BI TCIS</span>
                                                    <span class="description">v 1.2</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <img src="../assets/img/aplic_icons/aplic_icon_unimed2.jpg" />
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">GPD Unimed</span>
                                                    <span class="description">v 3.6.1</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <img src="../assets/img/aplic_icons/aplic_icon_embelleze.jpg" />
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">GPD Embelleze</span>
                                                    <span class="description">v 3.6.1</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    
                                    <li class="bg-whitesmoke">
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="text-center">
                                                <span class="glyphicon glyphicon-cog"></span> <span class="title">Gerenciador de Aplicações</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>                                   
                                    
                                    

                                </ul>
                                <!--/aplicacoes Dropdown-->
                            </li>
                            <!-- /atalho aplicacoes -->
                            
                            
                            <li>
                                <a class=" dropdown-toggle" data-toggle="dropdown" title="Notificações" href="#">
                                    <i class="icon fa fa-warning warning"></i>
                                </a>
                                <!--Notification Dropdown-->
                                <ul class="pull-right dropdown-menu dropdown-arrow dropdown-notifications">
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <i class="fa fa-check bg-success white"></i>
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Indexação base de dados Calandra BI TCIS completada com sucesso</span>
                                                    <span class="description">05/05/2015 - 01:00</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <i class="fa fa-warning bg-danger white"></i>
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Erro ao indexar base de dados Calandra BI HCIS</span>
                                                    <span class="description">03/05/2015 - 15:27</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <i class="fa fa-warning bg-warning white"></i>
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Indicador Lorem Ipsum Dolor Sit próximo à data de expiração</span>
                                                    <span class="description">03/05/2015 - 12:15</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <i class="fa fa-warning bg-danger white"></i>
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Atenção: erro inesperado...</span>
                                                    <span class="description">30/04/2015 - 10:17</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <i class="fa fa-check bg-success white"></i>
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Indexação base de dados Calandra BI TCIS completada com sucesso</span>
                                                    <span class="description">05/05/2015 - 01:00</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <i class="fa fa-warning bg-danger white"></i>
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Erro ao indexar base de dados Calandra BI HCIS</span>
                                                    <span class="description">03/05/2015 - 15:27</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <i class="fa fa-warning bg-warning white"></i>
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Indicador Lorem Ipsum Dolor Sit próximo à data de expiração</span>
                                                    <span class="description">03/05/2015 - 12:15</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="clearfix">
                                                <div class="notification-icon">
                                                    <i class="fa fa-warning bg-danger white"></i>
                                                </div>
                                                <div class="notification-body">
                                                    <span class="title">Atenção: erro inesperado...</span>
                                                    <span class="description">30/04/2015 - 10:17</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="bg-whitesmoke">
                                        <a href="#" class="no-padding">
                                            <div class="clearfix">
                                                <div class="text-center">
                                                    <span>Ver mais</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>                                   
                                    <li class="dropdown-footer ">
                                        <span>
                                            Hoje - 07 de Maio
                                        </span>
                                    </li>
                                </ul>
                                <!--/Notification Dropdown-->
                            </li>
                            
                            <li>
                                <a class="login-area dropdown-toggle" data-toggle="dropdown">
                                    <div class="avatar" title="View your public profile">
                                        <img src="../assets/img/avatars/adam-jansen.jpg">
                                    </div>
                                    <section>
                                        <h2><span class="profile"><span>Administrador</span></span></h2>
                                    </section>
                                </a>
                                <!--Login Area Dropdown-->
                                <ul class="pull-right dropdown-menu dropdown-arrow dropdown-login-area">
                                    <li class="username"><a>Administrador</a></li>
                                    <!--Avatar Area-->
                                    <li>
                                        <div class="avatar-area">
                                            <img src="../assets/img/avatars/adam-jansen.jpg" class="avatar">
                                        </div>
                                    </li>
                                    <!--Avatar Area-->
                                    <li class="edit">
                                        <a href="usuario_perfil.html" class="pull-right">Perfil</a>
                                    </li>

                                    <li class="dropdown-footer">
                                        <a href="login.html">
                                            Sair
                                        </a>
                                    </li>
                                </ul>
                                <!--/Login Area Dropdown-->
                            </li>
                            <!-- /Account Area -->
                            <!--Note: notice that setting div must start right after account area list.
                            no space must be between these elements-->
                            <!-- Settings -->
                        </ul><div class="setting">
                            <a id="btn-setting" title="Setting" href="#">
                                <i class="icon glyphicon glyphicon-cog"></i>
                            </a>
                        </div><div class="setting-container">
                            <label>
                                <input type="checkbox" id="checkbox_fixednavbar">
                                <span class="text">Fixar Topo</span>
                            </label>
                            <label>
                                <input type="checkbox" id="checkbox_fixedsidebar">
                                <span class="text">Fixar Menu Lateral</span>
                            </label>
                            <label>
                                <input type="checkbox" id="checkbox_fixedbreadcrumbs">
                                <span class="text">Fixar BreadCrumbs</span>
                            </label>
                            <label>
                                <input type="checkbox" id="checkbox_fixedheader">
                                <span class="text">Fixed Título</span>
                            </label>
                        </div>
                        <!-- Settings -->
                    </div>
                </div>
                <!-- /Account Area and Settings -->
            </div>
        </div>
    </div>
    <!-- /Navbar -->
    <!-- Main Container -->
    <div class="main-container container-fluid">
        <!-- Page Container -->
        <div class="page-container">

            <!-- Page Sidebar -->
            <div class="page-sidebar hidden-print" id="sidebar">
                <!-- Page Sidebar Header-->
                <div class="sidebar-header-wrapper busca">
                    <input type="text" class="searchinput" />
                    <i class="searchicon fa fa-search"></i>
                    <div class="searchhelper">Search Reports, Charts, Emails or Notifications</div>
                </div>
                <!-- /Page Sidebar Header -->
                <!-- Sidebar Menu -->
                <ul class="nav sidebar-menu">
                    <!--Principal-->
                    <li class="active" id="transaction-report-button">
                        <a href="#" >
                            <i class="menu-icon fa fa-magic"></i>
                            <span class="menu-text"> Principal </span>
                        </a>
                    </li>
                    
                    <!-- transacoes -->
                    <li>
                        <a href="#" class="menu-dropdown">
                            <i class="menu-icon fa fa-upload"></i>
                            <span class="menu-text"> Uploads </span>
                            <i class="menu-expand"></i>
                        </a>
                        
                        <ul class="submenu">
                            <li id="file-list">
                                <a href="#">
                                    <span class="menu-text">Consultar</span>
                                </a>
                            </li>
                            <li id="file-new">
                                <a href="#">
                                    <span class="menu-text">Novo</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    
                    <!-- origens -->
                    <li>
                        <a href="#" class="menu-dropdown">
                            <i class="menu-icon fa fa-cogs"></i>
                            <span class="menu-text"> Clusterizações </span>
                            <i class="menu-expand"></i>
                        </a>
                        
                        <ul class="submenu">
                            <li id="clusterization-list">
                                <a href="#">
                                    <span class="menu-text" >Consultar</span>
                                </a>
                            </li>
                            <li id="clusterization-new">
                                <a href="#">
                                    <span class="menu-text" >Nova</span>
                                </a>
                            </li>
                        </ul>
                    </li>                   
                    
                   
                    
                </ul>
                <!-- /Sidebar Menu -->
            </div>
            <!-- /Page Sidebar -->
            

            <!-- Page Content -->
            <div class="page-content">
                <!-- Page Breadcrumb -->
                <div class="page-breadcrumbs">
                    <ul class="breadcrumb" id="main-breadcrumb">
                        <li>
                            <i class="fa fa-home"></i>
                            <a href="index.php">Data Importer</a>
                        </li>
                        <li class="active">Principal</li>
                    </ul>
                </div>
                <!-- /Page Breadcrumb -->
                <!-- Page Header -->
                <div class="page-header position-relative hidden-print">
                    <div class="header-title">
                        <h1 id="main-content-title">
                            Principal
                        </h1>
                    </div>
                    
                    <!-- Header Buttons -->
                    <div class="header-buttons">
                        <a class="sidebar-toggler" href="#">
                            <i class="fa fa-arrows-h"></i>
                        </a>
                        <a class="refresh" id="refresh-toggler" href="">
                            <i class="glyphicon glyphicon-refresh"></i>
                        </a>
                        <a class="fullscreen" id="fullscreen-toggler" href="#">
                            <i class="glyphicon glyphicon-fullscreen"></i>
                        </a>
                    </div>
                    <!-- Header Buttons End -->
                    
                </div>
                <!-- /Page Header -->
                <!-- Page Body -->
                <div class="page-body">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="main-content-placeholder">
                            
                            <!-- widget em execucao -->
                            <div class="widget radius-bordered" id="em_execucao">
                                <div class="widget-header bg-seashell bordered-bottom bordered-warning">
                                    <span class="widget-caption silver"><strong>Em Execução</strong></span>
                                    <div class="widget-buttons buttons-bordered hidden-print">                                  
                                        <a href="#" data-toggle="maximize">
                                            <i class="fa fa-expand silver"></i>
                                        </a>
                                        <a href="#" data-toggle="collapse">
                                            <i class="fa fa-minus silver"></i>
                                        </a>
                                    </div>                                  
                                </div>
                                <div class="widget-body">

                                    <div class="table-scrollable">
                                        <table class="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="sorting_asc">
                                                        Título
                                                    </th>                                                   
                                                    <th scope="col" class="sorting">
                                                        Origem
                                                    </th>
                                                    <th scope="col" class="sorting">
                                                        Destino
                                                    </th>
                                                    <th scope="col" style="width: 300px">
                                                        
                                                    </th>
                                                    <th class="hidden-print min-width"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Transação Dados 06
                                                    </td>                                                   
                                                    <td>
                                                        Origem Lorem
                                                    </td>
                                                    <td>
                                                        Destino Dolor
                                                    </td>
                                                    <td>
                                                        <div class="progress progress-striped progress-lg active no-margin">
                                                            <div style="width: 5%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-warning">
                                                                <span class="carbon padding-left-5 padding-right-5">
                                                                    <strong>Lendo Arquivo (05%)</strong>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a class="btn btn-danger btn-xs icon-only cancelar-confirm" href="#" title="Cancelar Execução"><i class="fa fa-ban"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Transação Dados 07
                                                    </td>                                                   
                                                    <td>
                                                        Origem Lorem
                                                    </td>
                                                    <td>
                                                        Destino Dolor
                                                    </td>
                                                    <td>
                                                        <div class="progress progress-striped progress-lg active no-margin">
                                                            <div style="width: 35%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-warning">
                                                                <span class="carbon padding-left-5 padding-right-5">
                                                                    <strong>Lendo Arquivo (35%)</strong>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a class="btn btn-danger btn-xs icon-only cancelar-confirm" href="#" title="Cancelar Execução"><i class="fa fa-ban"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Transação Dados 08
                                                    </td>                                                   
                                                    <td>
                                                        Origem Lorem
                                                    </td>
                                                    <td>
                                                        Destino Dolor
                                                    </td>
                                                    <td>
                                                        <div class="progress progress-striped progress-lg active no-margin">
                                                            <div style="width: 75%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-warning">
                                                                <span class="carbon padding-left-5 padding-right-5">
                                                                    <strong>Lendo Arquivo (75%)</strong>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a class="btn btn-danger btn-xs icon-only cancelar-confirm" href="#" title="Cancelar Execução"><i class="fa fa-ban"></i></a>
                                                    </td>
                                                </tr>                                               
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                            <!-- /widget em execucao -->
                            
                            
                            <!-- tabbable -->
                            <div class="tabbable">
                            
                                <!-- nav-tabs -->
                                <ul class="nav nav-tabs" id="">
                                    <li class="active">
                                        <a data-toggle="tab" href="#favoritos">
                                            Favoritos
                                        </a>
                                    </li>

                                    <li>
                                        <a data-toggle="tab" href="#recentes">
                                            Recentes
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a data-toggle="tab" href="#todos">
                                            Todos
                                        </a>
                                    </li>                                       
                                </ul>
                                <!-- /nav-tabs -->

                                <!-- tab-content -->
                                <div class="tab-content">
                                
                                    <!-- favoritos -->
                                    <div id="favoritos" class="tab-pane in active">
                                        
                                        <div class="table-scrollable">
                                            <table class="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="sorting_asc">
                                                            Título
                                                        </th>                                                   
                                                        <th scope="col" class="sorting">
                                                            Origem
                                                        </th>
                                                        <th scope="col" class="sorting">
                                                            Destino
                                                        </th>
                                                        <th scope="col" class="sorting">
                                                            Mapeamento
                                                        </th>
                                                        <th class="hidden-print min-width"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados 01</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Remover dos Favoritos" class="btn bg-gold btn-xs icon-only white bootbox-confirm" href="javascript:void(0);" onclick="$(this).toggleClass('bg-gold');$(this).toggleClass('bg-gray');"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_B_01.html">Transação Dados 02</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Remover dos Favoritos" class="btn bg-gold btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01" title="Executar Transação de Dados">Transação Dados 03</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Remover dos Favoritos" class="btn bg-gold btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01" title="Executar Transação de Dados">Transação Dados 04</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Remover dos Favoritos" class="btn bg-gold btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01" title="Executar Transação de Dados">Transação Dados 05</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Remover dos Favoritos" class="btn bg-gold btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>                                               
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                    </div>
                                    <!-- /favoritos -->
                                    
                                    
                                    <!-- recentes -->
                                    <div id="recentes" class="tab-pane">

                                        <div class="table-scrollable">
                                            <table class="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="sorting_asc">
                                                            Título
                                                        </th>                                                   
                                                        <th scope="col" class="sorting">
                                                            Origem
                                                        </th>
                                                        <th scope="col" class="sorting">
                                                            Destino
                                                        </th>
                                                        <th scope="col" class="sorting">
                                                            Mapeamento
                                                        </th>
                                                        <th class="hidden-print min-width"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Fusce ornare</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="javascript:void(0);" onclick="$(this).toggleClass('bg-gold');$(this).toggleClass('bg-gray');"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Etiam in mauris</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Duis dictum nisi</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Nam interdum</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Etiam justo</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Fusce ornare</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Etiam in mauris</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Duis dictum nisi</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Nam interdum</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Etiam justo</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>   
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                    </div>
                                    <!-- /recentes -->
                                    
                                    
                                    <!-- todos -->
                                    <div id="todos" class="tab-pane">

                                        <!-- paginacao -->       
                                        <div class="margin-bottom-10 text-right">
                                            <ul class="pagination pagination-sm">
                                                <li class="disabled"><a title="Primeira" href="#">‹</a></li>
                                                <li class="disabled"><a title="Anterior" href="#">«</a></li>                                            
                                                <li class="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#">6</a></li>
                                                <li><a href="#">7</a></li>
                                                <li><a href="#">8</a></li>
                                                <li><a href="#">9</a></li>
                                                <li><a title="Próxima" href="#">›</a></li>                                          
                                                <li><a title="Última" href="#">»</a></li>
                                            </ul>
                                            
                                            <ul class="pagination pagination-sm margin-left-20">
                                                <li class="active"><a title="Itens por página" href="#">10</a></li>
                                                <li><a title="Itens por página" href="#">25</a></li>
                                                <li><a title="Itens por página" href="#">50</a></li>
                                                <li><a title="Itens por página" href="#">100</a></li>
                                            </ul>
                                        </div>
                                        <!-- /paginacao -->
                                
                                        <div class="table-scrollable">
                                            <table class="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="sorting_asc">
                                                            Título
                                                        </th>                                                   
                                                        <th scope="col" class="sorting">
                                                            Origem
                                                        </th>
                                                        <th scope="col" class="sorting">
                                                            Destino
                                                        </th>
                                                        <th scope="col" class="sorting">
                                                            Mapeamento
                                                        </th>
                                                        <th class="hidden-print min-width"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Fusce ornare</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="javascript:void(0);" onclick="$(this).toggleClass('bg-gold');$(this).toggleClass('bg-gray');"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Etiam in mauris</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Duis dictum nisi</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Nam interdum</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Etiam justo</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Fusce ornare</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Etiam in mauris</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Duis dictum nisi</a>
                                                        </td>                                                   
                                                        <td>
                                                            Origem Lorem
                                                        </td>
                                                        <td>
                                                            Destino Dolor
                                                        </td>
                                                        <td>
                                                            Mapeamento 01
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Nam interdum</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="wizard_A_01.html" title="Executar Transação de Dados">Transação Dados Etiam justo</a>
                                                        </td>   
                                                        <td>
                                                            Origem Ipsum
                                                        </td>
                                                        <td>
                                                            Destino Sit Amet
                                                        </td>
                                                        <td>
                                                            Mapeamento 02
                                                        </td>
                                                        <td class="hidden-print">
                                                            <a class="btn bg-silver btn-xs icon-only white" href="#" data-target="#modal-detalhes" data-toggle="modal" title="Detalhes"><i class="fa fa-search"></i></a>
                                                            <a title="Adicionar aos Favoritos" class="btn bg-gray btn-xs icon-only white bootbox-confirm" href="#"><i class="fa fa-star"></i></a>
                                                        </td>
                                                    </tr>   
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                        <!-- paginacao -->       
                                        <div class="margin-top-10 text-right">
                                            <ul class="pagination pagination-sm">
                                                <li class="disabled"><a title="Primeira" href="#">‹</a></li>
                                                <li class="disabled"><a title="Anterior" href="#">«</a></li>                                            
                                                <li class="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#">6</a></li>
                                                <li><a href="#">7</a></li>
                                                <li><a href="#">8</a></li>
                                                <li><a href="#">9</a></li>
                                                <li><a title="Próxima" href="#">›</a></li>                                          
                                                <li><a title="Última" href="#">»</a></li>
                                            </ul>
                                            
                                            <ul class="pagination pagination-sm margin-left-20">
                                                <li class="active"><a title="Itens por página" href="#">10</a></li>
                                                <li><a title="Itens por página" href="#">25</a></li>
                                                <li><a title="Itens por página" href="#">50</a></li>
                                                <li><a title="Itens por página" href="#">100</a></li>
                                            </ul>
                                        </div>
                                        <!-- /paginacao -->
                                        
                                    </div>
                                    <!-- /todos -->                                     
                                    
                                </div>
                                <!-- /tab-content -->
                                
                                
                            </div>
                            <!-- /tabbable -->
                            
                        </div>
                    </div>
                </div>
                <!-- /Page Body -->
            </div>
            <!-- /Page Content -->

        </div>
        <!-- /Page Container -->

    </div>
    <!-- Main Container -->
    
    
    
    <!--Modal Detalhes-->
    <div id="modal-detalhes" class="modal fade" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="mySmallModalLabel">Transação de Dados - Detalhes</h4>
                </div>

                <div class="modal-body">
                    <!-- secao -->
                    <div class="row">
                        <div class="col-sm-12">
                            <h6><strong>Título</strong></h6>
                            <h5>Transação Dados 01</h5>
                        </div>
                    </div>
                    <!-- /secao -->
                    
                    <!-- secao -->
                    <h6><strong>Origem</strong></h6>
                    <hr class="no-margin"/>
                    <div class="row">
                        <div class="col-sm-6">
                            <h6>Nome</h6>
                            <h5>Origem 01</h5>
                        </div>
                        <div class="col-sm-6">
                            <h6>Conector</h6>
                            <h5>CBI</h5>
                        </div>                          
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <h6>URL</h6>
                            <h5>localhost</h5>
                        </div>
                        <div class="col-sm-6" style="display: none;">
                            <h6>Porta</h6>
                            <h5>8080</h5>
                        </div>                  
                    </div>
                    <!-- /secao -->
                    
                    <!-- secao -->
                    <h6><strong>Destino</strong></h6>
                    <hr class="no-margin"/>
                    <div class="row">
                        <div class="col-sm-6">
                            <h6>Nome</h6>
                            <h5>Destino 01</h5>
                        </div>
                        <div class="col-sm-6">
                            <h6>Conector</h6>
                            <h5>MySQL</h5>
                        </div>                          
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <h6>URL</h6>
                            <h5>www.tcis.calndra.br/biserver-web/painel</h5>
                        </div>
                        <div class="col-sm-6">
                            <h6>Porta</h6>
                            <h5>8080</h5>
                        </div>                          
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <h6>Usuário</h6>
                            <h5>root</h5>
                        </div>
                        <div class="col-sm-6" style="display: none;">
                            <h6>Senha</h6>
                            <h5>************</h5>
                        </div>                          
                    </div>                  
                    <!-- /secao -->
                    
                    <!-- secao -->
                    <h6><strong>Mapeamento</strong></h6>
                    <hr class="no-margin"/>
                    
                    <h5>Mapeamento 01</h5>
                    <table class="table table-hover table-striped table-bordered table-condensed">
                        <thead>
                            <tr>
                                <th class="min-width">Chave<br/>Única</th>
                                <th>Nome</th>                               
                                <th class="text-center">Tipo</th>
                                <th>Variável CBI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-check silver"></i>
                                </td>
                                <td>
                                    Data de Admissão
                                </td>
                                <td class="text-center">
                                    data
                                </td>
                                <td>
                                    datadeadmissao_tdt
                                </td>                               
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-check silver"></i>
                                </td>
                                <td>
                                    Funcionário
                                </td>
                                <td class="text-center">
                                    texto
                                </td>
                                <td>
                                    funcionario_s
                                </td>   
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-check silver"></i>
                                </td>
                                <td>
                                    Salário
                                </td>
                                <td class="text-center">
                                    número
                                </td>
                                <td>
                                    salario_b
                                </td>   
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-check silver"></i>
                                </td>
                                <td>
                                    Data de Admissão
                                </td>
                                <td class="text-center">
                                    data
                                </td>
                                <td>
                                    datadeadmissao_tdt
                                </td>                               
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-check silver"></i>
                                </td>
                                <td>
                                    Funcionário
                                </td>
                                <td class="text-center">
                                    texto
                                </td>
                                <td>
                                    funcionario_s
                                </td>   
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-check silver"></i>
                                </td>
                                <td>
                                    Salário
                                </td>
                                <td class="text-center">
                                    número
                                </td>
                                <td>
                                    salario_b
                                </td>   
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-check silver"></i>
                                </td>
                                <td>
                                    Data de Admissão
                                </td>
                                <td class="text-center">
                                    data
                                </td>
                                <td>
                                    datadeadmissao_tdt
                                </td>                               
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-check silver"></i>
                                </td>
                                <td>
                                    Funcionário
                                </td>
                                <td class="text-center">
                                    texto
                                </td>
                                <td>
                                    funcionario_s
                                </td>   
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <i class="fa fa-check silver"></i>
                                </td>
                                <td>
                                    Salário
                                </td>
                                <td class="text-center">
                                    número
                                </td>
                                <td>
                                    salario_b
                                </td>   
                            </tr>
                        </tbody>
                    </table>
                
                    <!-- /secao -->                 
                
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>                  
                </div>
            </div>
        </div>
    </div>
    <!--/Modal Detalhes-->
    
    
    <!--Modal Seleciona arquivo-->
    <div id="modal-seleciona_arquivo" class="modal fade" style="display: none;" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="mySmallModalLabel">Executar Transação Dados 01</h4>
                </div>

                <div class="modal-body">
                
                    <!-- validacao -->
                    <div role="alert" class="alert alert-warning alert-dismissible" style="display: none;">
                        <h5>A seleção do arquivo é obrigatória.</h5>
                        <h5>O tipo de arquivo selecionado é incorreto.</h5>
                    </div>
                    <!-- /validacao -->
                
                    <div class="row">
                        <div class="col-sm-12">
                            <p>Você deve selecionar um arquivo do tipo "CSV" para executar essa transação:</p>
                            <p><input type="file"/></p>
                        </div>
                    </div>
                
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>                    
                    <a href="#" class="btn btn-primary" onclick="$(this).parents('.modal-content').find('.modal-body .alert').toggle();">Prosseguir</a>
                </div>
            </div>
        </div>
    </div>
    <!--/Modal Seleciona arquivo--> 
    
    

    <!--Basic Scripts-->
    <script src="../assets/js/jquery-2.0.3.min.js"></script>
    <script src="../assets/js/bootstrap.min.js"></script>
    <script src="../assets/js/slimscroll/jquery.slimscroll.min.js"></script>

    <!--Beyond Scripts-->
    <script src="../assets/js/beyond.js"></script>


    <!--Page Related Scripts-->
    <script src="../assets/js/bootbox/bootbox.js"></script>
    <script src="../assets/js/fuelux/wizard/wizard-custom.js"></script>
    <?php include_once "app.php"; ?>

    <script>
        // If you want to draw your charts with Theme colors you must run initiating charts after that current skin is loaded
        $(window).bind("load", function () {

            /*Sets Themed Colors Based on Themes*/
            themeprimary = getThemeColorFromCss('themeprimary');
            themesecondary = getThemeColorFromCss('themesecondary');
            themethirdcolor = getThemeColorFromCss('themethirdcolor');
            themefourthcolor = getThemeColorFromCss('themefourthcolor');
            themefifthcolor = getThemeColorFromCss('themefifthcolor');

            //-------------------------bootbox-confirm------------------//
            $(".cancelar-confirm").on('click', function () {
                bootbox.confirm("Tem certeza que deseja cancelar a execução de 'Transação Dados 06' ?", function (result) {
                    if (result) {
                        
                    }
                });
            });

        });

    </script>
    


</body>
<!--  /Body -->
</html>
