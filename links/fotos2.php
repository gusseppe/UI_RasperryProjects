
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<meta name="description" content="description">
 
<title>Masonry</title>
 
<link rel="stylesheet" type="text/css" media="screen" href="css/masonry.css"/>
 
<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
 
</head>
 
<body>
 
 	<div class="nav">
 	</div>
   
	<div id="container">
		
		<div class="masonryImage">


			<!--<img src="http://lorempixum.com/200/200/food/1" alt="" />-->
<?php 


if ($handle = opendir('../upload')) {
    while (false !== ($file = readdir($handle)))
    {
        if (($file != ".") && ($file != ".."))
        { ?>

<?php echo '<img src="../upload/'.$file.'" alt="" />'; ?>
<?php echo ''; ?>
 <?php           

        }
    }

    closedir($handle);
}
?>


		</div>
		
	
	</div>
   
   <script src="js/jquery-1.7.1.min.js"></script>
   <script src="js/jquery.masonry.min.js"></script>
   <script>
     $(function(){
   
       var $container = $('#container');
     
       $container.imagesLoaded( function(){
         $container.masonry({
           itemSelector : '.masonryImage'
         });
       });
     
     });
   </script>
 
</body>
</html>
