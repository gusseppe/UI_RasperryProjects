
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<meta name="description" content="description">
 
 
<link rel="stylesheet" type="text/css" media="screen" href="css/css.css"/>
<link rel="stylesheet" type="text/css" media="screen" href="css/your.css"/>

<link rel="stylesheet" type="text/css" href="style.css"/>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
  <link rel="stylesheet" type="text/css" href="../css/your.css"/>
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>


  <title>Fotos</title>


 

</head>
 
<body>   
<div class="navbar menubar" id="menu" style="background-color:#333230">
    <div class="container" style="background-color:#333230">
    <div class="navbar-header"> 
    	<button type="button" class="navbar-toggle menu-button" data-toggle="collapse" data-target="#myNavbar" >
			<span class="glyphicon glyphicon-align-justify"></span>
		 </button>
         <h1><a style="color:white" href="../index.php">DIRECTV</a><h1>
    </div>
    
  </div>
  </div>
  </br>
  </br>
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
