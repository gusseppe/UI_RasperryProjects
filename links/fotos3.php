
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<meta name="description" content="description">
 
<title>CSS</title>
 
<link rel="stylesheet" type="text/css" media="screen" href="css/css.css"/>
<link rel="stylesheet" type="text/css" media="screen" href="css/your.css"/>
 
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
