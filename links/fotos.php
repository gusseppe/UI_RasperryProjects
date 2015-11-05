<!doctype html>
<html class="export">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width">
  <meta name="description" content="Cascading grid layout library">

  <title>Fotos</title>

  <link rel="stylesheet" type="text/css" href="style.css"/>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>
  <link href='http://fonts.googleapis.com/css?family=Raleway:400,700,200,100,300,500,600,800,900' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,700italic,900,400italic,300italic' rel='stylesheet' type='text/css'>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/masonry-docs.css" media="screen">

</head>
<div class="navbar menubar" id="menu">
    <div class="container">
    <div class="navbar-header"> 
    	<button type="button" class="navbar-toggle menu-button" data-toggle="collapse" data-target="#myNavbar">
			<span class="glyphicon glyphicon-align-justify"></span>
		 </button>
    <a class="navbar-brand logo" href="../index.php">DIRECTV</a> 
    </div>
    <div>
    	<nav class="collapse navbar-collapse" id="myNavbar" role="navigation">
        <ul class="nav navbar-nav navbar-right navstyle">
        <li><a href="#banner" class="page-scroll active">FOTOS</a></li>
        <li><a href="../index.php" class="page-scroll">Inicio</a></li>
      </ul>
      </nav>
      </div>
  </div>
  </div>
<body class="page--layout" data-page="layout">



  <div id="content" class="content container">

      <h1>Fotos del Evento</h1>


  </div>
  <div class="">
    <div class="grid grid--images" data-js-module="imagesloaded-progress">
      <div class="grid-sizer"></div>


      <div class="grid-image-item">

<?php 


if ($handle = opendir('../upload')) {
    while (false !== ($file = readdir($handle)))
    {
        if (($file != ".") && ($file != ".."))
        { ?>

<?php echo '<div class="grid-image-item">'.'<img src="../upload/'.$file.'"></div>'; ?>
<?php echo ''; ?>
 <?php           

        }
    }

    closedir($handle);
}
?>


      </div>

    </div>
    
</div>

    </div>
  
  </div>

<!-- Masonry does NOT require jQuery.
     jQuery is only used to demonstrate Masonry as a jQuery plugin -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="bower_components/jquery/dist/jquery.min.js"><\/script>')</script>

  <script src="js/masonry-docs.min.js"></script>


</body>
</html>
