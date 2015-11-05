/*TILES*/
tiles = function(){ /*Insert your own tiles here*/

	/* READ THE TUTORIAL AT METRO-WEBDESIGN.INFO */
	tileTitleText(0,0,0,2,1,'#1a8ec7','external:gotolink:links/mundodirectv.html','MUNDO DIRECTV','DIRECTV Perú es el líder de televisión satelital que ofrece una experiencia única de video con insuperable calidad de programación, tecnología y servicio.',['','',''],'');

	tileLive(0,2,0,1,1,"#C33","","Nosotros","","","","",3000,["Bienvenido","","DirecTV Es el sistema de televisión satelital líder en el mundo","ofrece más canales y una espectacular selección de programación","Visitanos en www.directv.com.pe"],['','',''],"noClick");


	//tileTitleText(0,0,1,1,1,"#1a8ec7","external:gotolink:links/perfil.html","<h3 class='white' style='font-weight:lighter'>PERFILES</h3>","",['','',''],'');
	tileImageSlider(0,0,1,1,1,'#1a8ec7','external:gotolink:links/beneficios.html','img/bg/directv.png',1,"<h4 class='white'>PERFILES</h4>",0.4,['','#854C8F','top'],'');

	tileTitleText(0,1,1,2,1,"#1a8eFF","external:gotolink:links/valores.html","<h3 class='white' style='font-weight:lighter'>VALORES DE LA COMPAÑIA</h3>","",['','',''],'');

	
	tileImageSlider(0,0,2,2,1,'#854C8F','external:gotolink:links/beneficios.html','img/bg/beneficios.png',1,"<h4 class='white'>Beneficios</h4>",0.4,['Aqui los beneficios','#854C8F','top'],'');

	tileImageSlider(0,2,2,1,1,"#BBB","external:gotolink:links/fotos.php","img/arrows/arrowRight.png",0.3,"<h5 class='align-center'>Ver las fotos</h5>",0.5,['','',''],'');
	
	tileLive(0,1,3,2,1,"#3B659C","external:gotolink:links/video.html","Video","img/icons/box_hint.png",50,2,5,6000,['Video DIRECTV','Haga click aqui'],['Click para reproducir','#789600','bottom'],'');
	
	/*GROUP 2 */
	
	
	tileImg(1,0,0,1,1,"#F60","external:gotolink:links/fotos.php","img/bg/img_square.jpg",1,1,['Fotos evento','#789600','bottom','DirecTV',true],'');
	tileImg(1,1,0,1,1,"#F90","external:gotolink:links/fotos.php","img/bg/img_square.jpg",1,1,['Fotos','#F90','top','DirectTV',true],'');
	tileImg(1,2,0,1,1,"#C33","external:gotolink:links/subir.php","img/bg/img_square.jpg",1,1,['Subir Fotos','#C33','bottom','Click Aqui',false],'');
	
	/*GROUP 3 */
	/*Fadeslide and fliphorizontal are effects, other options are 'fade','flipvertical'*/
	tileSlideshow(2,0,0,2,2,"","",5000,true,"fadeslide",["img/bg/img1.png","img/bg/img2.jpg","img/bg/img3.jpg"],['Slideshow','#789600','top'],'noClick');
	tileSlideshow(2,0,2,1,1,"","",2500,false,"fliphorizontal",["img/bg/img1.png","img/bg/img2.jpg","img/bg/img3.jpg"],['','',''],'noClick');
	
	tileCustom(2,1,2,1,1,"#BBB","#&home","<img src='img/arrows/arrowLeft.png' style='margin-top:42px;margin-left:52px;padding-bottom:15px;' height='41'><h4 class='align-center'>Go home</h4>",['','',''],'');
}

/*Tile Templates */
tileTitleText = function(group,x,y,width,height,bg,linkPage,title,text,labelSettings,optClass){ /* Tile with only a title and description */	
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px; margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	<div class='tileTitle'>"+title+"</div>\
	<div class='tileDesc'>"+text+"</div>\
	"+labelText+"\
	</a>");
}
tileImg = function(group,x,y,width,height,bg,linkPage,img,imgSizeWidth,imgSizeHeight,labelSettings,optClass){
	if(labelSettings!='' && labelSettings[0] != ''){
		var id= "tileimg_"+(group+''+x+''+y).replace(/\./g,'_')
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		var desc=labelSettings[3];
		var showDescOnHover=labelSettings[4];		
		var displayLabel = (showDescOnHover) ? " showOnHover": ""; 
		var labelDescText = (desc!='') ? "<div class='tileLabelDesc "+displayLabel+"'>"+desc+"</div>" : '';	
		if(labelposition=='top'){
			var totalLabel ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div>"+labelDescText+"</div>";
		}else{
			
			var totalLabel ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div>"+labelDescText+"</div>";
		}		
		$(function(){
			$.plugin($afterTilesAppend,{
				tileImg:function(){
					var id2 = id;
					if(labelposition=='top'){
						$("."+id2).bind("mouseenter",function(){$(this).find("div.showOnHover").show(200);});
						$("."+id2).bind("mouseleave",function(){$(this).find("div.showOnHover").stop().hide(200);});
					}else{
						$("."+id2).bind("mouseenter",function(){$(this).find("div.showOnHover").css("bottom",0).slideDown(200);});
						$("."+id2).bind("mouseleave",function(){$(this).find("div.showOnHover").css("top",0).stop().slideUp(200);});	
					}
				}
			});
		});
	}else{
		var id="";
		var totalLabel = "";
	}
	var drawHeight = (imgSizeWidth*$tile.scalespacing-$tile.spacing)
	var drawWidth = (imgSizeHeight*$tile.scalespacing-$tile.spacing)
	var tileHeight = (height*$tile.scalespacing-$tile.spacing)
	var tileWidth = (width*$tile.scalespacing-$tile.spacing)
	$page.content += ("<a "+makeLink(linkPage)+" class='tile tileImg group"+group+" "+id+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px ;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+tileWidth+"px; height:"+tileHeight+"px; \
	background:"+bg+";'>\
	<img src='"+img+"' width="+drawWidth+" height="+drawHeight+" \
	style='margin-left: "+((tileWidth-drawWidth)*0.5)+"px; \
	margin-top: "+((tileHeight-drawHeight)*0.5)+"px'/>\
	"+totalLabel+"\
	</a>");
}

tileTitleTextImage = function(group,x,y,width,height,bg,linkPage,title,text,img,imgSize,imgToTop,imgToLeft,labelSettings,optClass){ // Tile with an image on the left side, a title, and a description, width is always 2
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/> \
	<div class='tileTitle' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div class='tileDesc' style='margin-left:"+(imgSize+6+imgToLeft)+"px;'>"+text+"</div>\
	"+labelText+"\
	</a>");
}
tileLive = function(group,x,y,width,height,bg,linkPage,title,img,imgSize,imgToTop,imgToLeft,speed,textArray,labelSettings,optClass){
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	var id= "livetile_"+(group+''+x+''+y).replace(/\./g,'_')
	if(img!=''){
		imgInsert = "<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/>"
	}else{
		imgInsert = '';
		imgSize = 0;
		imgToLeft = 0;
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px; margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	"+imgInsert+"\
	<div class='tileTitle' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div class='livetile' style='margin-left:"+(imgSize+10+imgToLeft)+"px;' id='"+id+"' >"+textArray[0]+"</div>\
	"+labelText+"\
	</a>");
	setTimeout(function(){newLiveTile(id,group,textArray,speed,0)},speed); // init this tile
}
tileImageSlider = function(group,x,y,width,height,bg,linkPage,img,imgsize, text,slideDistance,labelSettings,optClass){
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	tileWidth = width*$tile.scalespacing-$tile.spacing
	tileHeight = height*$tile.scalespacing-$tile.spacing
	$page.content += ("<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+" tileImageSlider' id='"+slideDistance+" ' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+tileWidth+"px; height:"+tileHeight+"px; \
	background:"+bg+"; text-align:center;'>\
	<div class='tileImageSliderWrapper' style='position:absolute;'>\
	<div style='width: "+tileWidth+"px; height:"+tileHeight+"px;'>\
	<img src='"+img+"' height="+tileHeight*imgsize+" style='margin-top: "+((tileHeight-tileHeight*imgsize)*0.5)+"px'/>\
	</div>\
	<div text='tileImageSliderText'>"+text+"</div>\
	"+labelText+"\
	</div>\
	</a>");
	$(document).on("mouseover",'.tileImageSlider',function(){
		$(this).find(".tileImageSliderWrapper").stop(true,false).animate({"margin-top":-$(this).height()*$(this).attr("id")},250,"linear");
	}).on("mouseleave",'.tileImageSlider',function(){
		$(this).find(".tileImageSliderWrapper").stop(true,false).animate({'margin-top':0},300,"linear");
	});
}
tileCustom = function(group,x,y,width,height,bg,linkPage,content,labelSettings,optClass){ // make your own tiles
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	"+content+"\
	"+labelText+"\
	</a>");
}
