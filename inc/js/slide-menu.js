$(document).ready(function () {
	$(".m-menu").click(function(){
		$("#container").toggleClass("active");
		$(".m-menu").toggleClass("active");
		$(".mobile-menu").toggleClass("active");
		$(".mobile-menu-bg").addClass("active");
	});
	
	$(".mobile-menu").css('right','-200px');
	$(".mobile-menu-bg").css('right', '-200px');

	var isExpanded = false;
	$(".m-menu").click(function () {
	    if (!isExpanded) {
	        $('.mobile-menu').animate({ right: '0' }, { duration: 500, queue: false });
	        $('.mobile-menu-bg').animate({ right: '0' }, { duration: 500, queue: false });
	        $('#wrapper').animate({ 'margin-left': '200px' }, { duration: 500, queue: false });
	        $('#wrapper').animate({ 'margin-left': '-200px' }, { duration: 500, queue: false });
	    }
	    else {
	        $('.mobile-menu-bg').animate({ right: '-200' }, { duration: 500, queue: false });
	        $('.mobile-menu').animate({ right: '-200' }, { duration: 500, queue: false });
	        $('#wrapper').animate({ 'margin-left': '0' }, { duration: 500, queue: false });
	        $('#wrapper').animate({ 'margin-left': '0' }, { duration: 500, queue: false });
	    }
	    isExpanded = !isExpanded;
	});
})

