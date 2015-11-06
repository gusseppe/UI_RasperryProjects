
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<meta name="description" content="description">
 
 
<link rel="stylesheet" type="text/css" media="screen" href="css/css.css"/>
<link rel="stylesheet" type="text/css" media="screen" href="css/your.css"/>

  <title>Fotos</title>

<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Beneficios</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
  <link rel="stylesheet" type="text/css" href="../css/your.css"/>
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>
  <link href='http://fonts.googleapis.com/css?family=Raleway:400,700,200,100,300,500,600,800,900' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,700italic,900,400italic,300italic' rel='stylesheet' type='text/css'>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/jquery.sticky.js"></script>
  <script>
    $(window).load(function(){
      $("#menu").sticky({ topSpacing: 0 });
    });
  </script>
  </head>
 
</head>
 
<body>   
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
        <li><a href="#banner" class="page-scroll active">Fotos</a></li>
        <li><a href="../index.php" class="page-scroll">Inicio</a></li>
      </ul>
      </nav>
      </div>
  </div>
  </div>
<br>
<br>
	<div id="container">
	
	
		<ul id="myContent"> 			

<!--			<li><img src="http://lorempixum.com/200/206/nature/1" alt="" /></li>-->

<?php 


if ($handle = opendir('../upload')) {
    while (false !== ($file = readdir($handle)))
    {
        if (($file != ".") && ($file != ".."))
        { ?>

<?php echo '<li><img src="../upload/'.$file.'"  alt=""/></li>'; ?>

<?php echo ''; ?>
 <?php           

        }
    }

    closedir($handle);
}
?>


		</ul> 
	
	</div>
 
</body>
</html>
