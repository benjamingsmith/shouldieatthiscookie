(function(){
	$('#cookie-video').tubeplayer({
	  initialVideo: '7HrnWC8zBcE',
	  showinfo: false,
	  showControls: false
	});

	$('#cookie-button').on('click',function(){
		$('.start').fadeOut("slow");
		$('#cookie-video').fadeIn();
		$('#cookie-video').tubeplayer('play');
	});
})();