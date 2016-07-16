$(document).ready(function() {

	function invisibleMenu() {
		var now = 0;
		var pixels = 300;
		var opacity = -1;

                var move = function() {
                    now = $(window).scrollTop();
                    if (now > pixels && opacity !== 0)
                        opacity = 0;
                    else if (now < pixels){
                        // Depends on the position not if scrolls down or up
                        opacity = (1 - now/pixels);
                    }
                    $("div.navigation").css({"opacity": opacity});
                }
                $(window).scroll(move);
                move();
	}

	invisibleMenu();

	function externalLinks() {
                  var hostname = window.location.hostname;
                  var new_tab = true;
                  var set_icon = true;
                  for (var links = document.links, i = 0, a; a = links[i]; i++) {
                      if (a.hostname !== hostname) {
                          if (new_tab)
                               a.target = '_blank';
                          if (set_icon)
                               a.innerHTML +='<i class="fa fa-external-link fa-1 external-link-margin" />';
                      }
                  }
	}

	externalLinks();

});
