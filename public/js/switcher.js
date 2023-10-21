	
	jQuery(document).ready(function($){
		$('.preset-list li a').on('click',function(event){
			event.preventDefault();
			var color = $(this).data('color'),
				url = 'css/presets/'+color+'.css';				
				logoSrc = 'images/presets/'+color+'/icon5.png';			
				logoSrc1 = 'images/presets/'+color+'/icon6.png';			
				logoSrc2 = 'images/presets/'+color+'/icon7.png';			
				logoSrc3 = 'images/presets/'+color+'/icon8.png';			
				
			$('.choose-info .choose-icon.icon1 img').attr('src', logoSrc);
			$('.choose-info .choose-icon.icon2 img').attr('src', logoSrc1);
			$('.needs-info .needs-icon.icon1 img').attr('src', logoSrc2);
			$('.needs-info .needs-icon.icon2 img').attr('src', logoSrc3);
			$('#preset').attr('href', url);			
		});

		$('.style-chooser .toggler').on('click', function(event){
			event.preventDefault();
			$(this).closest('.style-chooser').toggleClass('opened');
		});
	});