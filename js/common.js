$(document).ready(function(){

	$('.carousel').owlCarousel({
		loop:true,
		items:1,
		margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true
    });

    //SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
    };

    //fancybox iframe + pdf
    $('[data-fancybox]').fancybox({
        toolbar  : false,
        smallBtn : true,
        iframe : {
            preload : false
        }
    });

    //iziModal
    $(".modal").iziModal({
        radius: 2,
        headerColor: '#666666',
        padding: 15,
        closeOnEscape: true,
        closeButton: true,
        zindex: 9999,
        transitionIn: 'comingIn',
        transitionOut: 'comingOut',
        transitionInOverlay: 'fadeIn',
        transitionOutOverlay: 'fadeOut',
    });

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".sendform").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            alert("Thank you!");
            $('.modal').iziModal('close');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });
    
    $(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	
});

