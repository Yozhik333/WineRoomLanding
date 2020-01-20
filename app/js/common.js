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
