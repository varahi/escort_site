// SmartMenus mobile menu toggle button
$(function() {
  // SmartMenus init
  $('#main-menu').smartmenus({
	  mainMenuSubOffsetX: -1,
	  mainMenuSubOffsetY: 4,
	  subMenusSubOffsetX: 6,
	  subMenusSubOffsetY: -6
  });		
	
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});

//Parallax
$(document).ready(function(){
	$window = $(window);               
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // Назначаем объект                  
      $(window).scroll(function() {                   
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 		
		var coords = '50% '+ yPos + 'px';
		$bgobj.css({ backgroundPosition: coords });	
      }); 
   });	
}); 

document.createElement("article");
document.createElement("section");

//function checkSize(){
//  if ( $(window).width() > 992 ){
//		// Do some
//  } else {
//  	// Do nothing
//  }
//}

$(document).ready(function() {
	// Diasble right click menu
    $(this).bind("contextmenu", function(e) {
        e.preventDefault();
    });		
	
	// To Top	
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		    } else {
		      $('#toTop').fadeOut();
		    }
	});

		$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
});
	 	

// Animate		
  jQuery('.ce-textpic, .tx-escortcities, .model-detail__img-wrap, .animate').addClass("visible").viewportChecker ({
  	classToAdd: 'visible animated fadeIn',
  	offset: 150
  });	
  jQuery('.parallax-section__title').addClass("visible").viewportChecker ({
	  classToAdd: 'visible animated fadeIn',
	  //classToAdd: 'visible animated fadeInLeft',
  	offset: 150
  });	
  jQuery('.parallax-section__caption').addClass("visible").viewportChecker ({
	  classToAdd: 'visible animated fadeIn',	
	  //classToAdd: 'visible animated fadeInRight',
	  offset: 150
  });	  
  jQuery('.news-list-view, #c40').addClass("visible").viewportChecker ({
	  	classToAdd: 'visible animated zoomIn',
	  	offset: 150
  });	
  
});

// Filter for models category 
var chosen = "";
jQuery("#filter a").on("click", function (event) {
    jQuery("#filter a").removeClass("current");
    jQuery(this).addClass("current");
    chosen = jQuery(this).attr("rel");
    jQuery(".model-list__item").not("." + chosen).hide('slow');
    jQuery("." + chosen).show('slow');

});
var $items = jQuery('.model-list__item');
