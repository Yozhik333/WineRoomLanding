$(function () {

	$(document).ready(function() {
		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	});

	new WOW().init();
	
	// Owl-Carousel;
	// $(".owl-carousel").owlCarousel();

	// MagnificPopup
	// $('a[href*="#callback"]').magnificPopup({
	// 	removalDelay: 500,
	// 	callbacks: {
	// 		beforeOpen: function () {
	// 			this.st.mainClass = this.st.el.attr('data-effect');
	// 		}
	// 	},
	// 	fixedContentPos: true
	// });

	$('#phone-id').mask('+7(999) 999-99-99', { placeholder: "+7 (   )   -  -  " });


	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

// top-line

$('.top-line__burger').click(function(event) {
	$(".top-line__burger,.top-line__menu").toggleClass('burger-active');
	$('body').toggleClass('lock');
});

$(function() {
	$(".handler span").on("click", function() {
		$(this)
			.addClass("choosen")
			.siblings()
			.removeClass("choosen");
		$(".slide")
			.eq($(this).index())
			.addClass("show")
			.siblings()
			.removeClass("show");
	});
});

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


$('.slider-1').on('initialized.owl.carousel changed.owl.carousel', function (e) {
	if (!e.namespace) {
		return;
	}
	var carousel = e.relatedTarget;
	$('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
	loop: true,
	// margin:10,
	nav: true,
	navText: ['<i class="prev">&#8249;</i>', '<i class="next">&#8250;</i>'],
	responsive: {
		0: {
			items: 1
		},
		700: {
			items: 2
		},
		1000: {
			items: 3
		},
		1279: {
			items: 3
		},
		1360: {
			items: 4
		},
		1500: {
			items: 5
		},
	}
});


$(document).ready(function () {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

$('.slider-2').owlCarousel({
	items: 3,
	loop: true,
	margin: 100,
	nav: true,
	navText: ['<i class="prev">&#8249;</i>', '<i class="next">&#8250;</i>'],
	center: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1,
			// margin: 5,
		},
		1200: {
			items: 3
		},
	}
})