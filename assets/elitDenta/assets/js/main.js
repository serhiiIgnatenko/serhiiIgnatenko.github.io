(function($){
	$( document ).ready(function() {
	
		$('.comment_slider__slider').slick({
		  dots: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  variableWidth: true,
//		  adaptiveHeight: true,
		  appendArrows: $('.button_slider'),
		  prevArrow: '<i class="fas fa-chevron-left"></i>',
		  nextArrow: '<i class="fas fa-chevron-right"></i>',
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
		});
		
		$(".sledding").viewportChecker({
			callbackFunction:function(){
				$('.counter').each(function () {
					var $this = $(this),
					  countTo = $this.attr('data-count');

					$({countNum: $this.text()}).animate({
						countNum: countTo
					  },

					  {

						duration: 1500,
						easing: 'linear',
						step: function () {
						  $this.text(Math.floor(this.countNum));
						},
						complete: function () {
						  $this.text(this.countNum);
						}

					  });


				  });
			}
		});
		
		$(".small_img").click(function(){	// Событие клика на маленькое изображение
				var img = $(this);	// Получаем изображение, на которое кликнули
				var src = img.attr('src'); // Достаем из этого изображения путь до картинки
				$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
								 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
								 "<img src="+src+" class='popup_img' />"+ // Само увеличенное фото
								 "</div>"); 
				$(".popup").fadeIn(800); // Медленно выводим изображение
				$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
					$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
					setTimeout(function() {	// Выставляем таймер
					  $(".popup").remove(); // Удаляем разметку высплывающего окна
					}, 800);
				});
			});
		
		// Фикмированная шапка при скролле
		$(".wrapper_nav__scroll").removeClass("default");
		$(window).scroll(function(){
			if ($(this).scrollTop() > 128) {				
				$(".wrapper_nav__scroll").addClass("default").fadeIn('fast');
			} else {
//				$(".wrapper_nav__scroll").hide();
				$(".wrapper_nav__scroll").removeClass("default").fadeIn('fast');
			};
		});
		
		$(".mobile_menu").removeClass("default");
		$(window).scroll(function(){
			if ($(this).scrollTop() > 128) {				
				$(".mobile_menu").addClass("default").fadeIn('fast');
			} else {
//				$(".wrapper_nav__scroll").hide();
				$(".mobile_menu").removeClass("default").fadeIn('fast');
			};
		});
		
//		$(".wrapper_nav").removeClass("default");
//		$(window).scroll(function(){
//			if ($(this).scrollTop() > 128) {				
//				$(".wrapper_nav").addClass("default").fadeIn('fast');
//			} else {
//				$(".wrapper_nav").removeClass("default").fadeIn('fast');
//			};
//		});
		
	});
})(jQuery);