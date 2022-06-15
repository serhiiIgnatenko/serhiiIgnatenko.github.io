$(document).ready(function(){
	$(".list_menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
            top = top-200;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	
	window.onscroll = function() {
		var scrolled;
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 100){
			$(".header").addClass('header__blur')
		}
		if(100 > scrolled){
			$(".header").removeClass('header__blur')        
		}

	}

});
