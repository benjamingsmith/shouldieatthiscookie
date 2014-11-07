(function(){
	$('#cookie-video').tubeplayer({
	  initialVideo: '7HrnWC8zBcE',
	  showinfo: false,
	  showControls: false,
	  'onPlayerEnded':checkAgain
	});

	function checkAgain(){
		$('#cookie-video').animate({'opacity':'.5'});
		$('.try-again').fadeIn("slow");
	}

	$('#cookie-button').on('click',function(){
		$('.start').fadeOut("slow");
		$('#cookie-video').fadeIn("slow");
		$('#cookie-video').tubeplayer('play');
	});

	$('.again').on('click',function(){
		$('.try-again, #cookie-video').hide();
		$('#cookie-video').animate({'opacity':'1'});
		$('.start').show();
	});


})();