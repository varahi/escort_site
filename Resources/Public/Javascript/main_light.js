//SmartMenus mobile menu toggle button
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
  
});

//Filter for models category 
var chosen = "";
jQuery("#filter a").on("click", function (event) {
    jQuery("#filter a").removeClass("current");
    jQuery(this).addClass("current");
    chosen = jQuery(this).attr("rel");
    jQuery(".model-list__item").not("." + chosen).hide('slow');
    jQuery("." + chosen).show('slow');

});
var $items = jQuery('.model-list__item');