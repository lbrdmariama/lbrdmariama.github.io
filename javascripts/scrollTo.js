$(document).ready(function(){
	$.fn.scrollify = function(){
		var target = this.data('target');

		this.click(function(){
			$('html, body').animate({
				scrollTop: $('#' + target).offset().top
			}, 2000)
			return false;
		});
	};

	$('.scroll').each(function(index, value){
		$(value).scrollify();
	})
});
