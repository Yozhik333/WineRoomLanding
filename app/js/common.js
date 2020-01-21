$(function () {

	
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