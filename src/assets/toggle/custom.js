import $ from "jquery";

$(document).on("click", function () {
	function toggleHandler() {
		const ul = $(this).next("ul");
		const icon = $(this).find("i");
		if (ul.is(":hidden")) {
			ul.slideDown(500);
			$(this).addClass("expanded");
			icon.text("\f00d");
		} else {
			ul.slideUp(500);
			$(this).removeClass("expanded");
			icon.text("\f067"); 
		}
	}

	function handleResize() {
		const headers = $(".footer-links-wrapper h3");
		const uls = $(".footer-links-wrapper ul");
		if ($(window).width() <= 768) {
			headers.off("click").on("click", toggleHandler);
			uls.hide();
		} else {
			headers.off("click", toggleHandler);
			uls.show();
		}
	}

	$(window).on("resize load", handleResize);
	handleResize();
});

