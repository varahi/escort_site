// SmartMenus init
$(function() {
  $('#main-menu').smartmenus({
    mainMenuSubOffsetX: -1,
    mainMenuSubOffsetY: 4,
    subMenusSubOffsetX: 6,
    subMenusSubOffsetY: -6
  });
});

// SmartMenus mobile menu toggle button
$(function() {
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
		

// Parallax
$(document).ready(function(){
	// Кешируем объект окна
	$window = $(window);               
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // Назначаем объект                  
      $(window).scroll(function() {                   
		// Прокручиваем фон со скоростью var.
		// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 		
		// Размещаем все вместе в конечной точке
		var coords = '50% '+ yPos + 'px';
		// Смещаем фон
		$bgobj.css({ backgroundPosition: coords });	
      }); 
   });	
}); 
/* 
 * Создаем элементы HTML5 для IE
 */

document.createElement("article");
document.createElement("section");

// To top
$(document).ready(function() {
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
  	classToAdd: 'visible animated fadeInLeft',
  	offset: 150
  });	
  jQuery('.parallax-section__caption').addClass("visible").viewportChecker ({
	  	classToAdd: 'visible animated fadeInRight',
	  	offset: 150
  });	  
  jQuery('.news-list-view, #c40').addClass("visible").viewportChecker ({
	  	classToAdd: 'visible animated zoomIn',
	  	offset: 150
  });	
  
});




//bg
/*
$(window).load(function() {    
    var theWindow        = $(window),
        $bg              = $(".test"),
        aspectRatio      = $bg.width() / $bg.height();
    function resizeBg() {
            if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                $bg
                    .removeClass()
                    .addClass('bgheight');
            } else {
                $bg
                    .removeClass()
                    .addClass('bgwidth');
            }
    }
    theWindow.resize(function() {
            resizeBg();
    }).trigger("resize");
}); 
*/