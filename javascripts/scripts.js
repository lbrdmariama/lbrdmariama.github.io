$(document).ready(function(){
	// scrollto function
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

	// overlay function
	$('#overlay').click(function(){
		$('#overlay-a-propos').addClass('show');
		$('#overlay-a-propos').removeClass('hidden');
	});
	$('#close-overlay').click(function(){
		$('#overlay-a-propos').removeClass('show');
		$('#overlay-a-propos').addClass('hidden');
	});
});
