
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<meta name="description" content="description">
 
 
<link rel="stylesheet" type="text/css" media="screen" href="css/css.css"/>
<<<<<<< HEAD
<link rel="stylesheet" type="text/css" media="screen" href="css/your.css"/>
=======

  <title>Fotos</title>


>>>>>>> 122bda2689432dcd48b6cc561e2ee7b7f5bc4013
 
<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
 
</head>
 
<body>   
	<div id="container">
	
		<div class="nav">
			<ul>
				<li><h1><a href="../index.php">Inicio</a></h1></li>
				<li><a href="#" class="current">Fotos del evento</a></li>
			</ul>
		</div>
	
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
