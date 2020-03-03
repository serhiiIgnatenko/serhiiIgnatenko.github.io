(function ($) {
  $(document).ready(function () {
	  
	$('.button__sidebar').on('click', function(){
		$(this).find('.fas').toggleClass('show_pa_menu');
		$('.wrapper_sidebar_pa_menu').toggle();
	})
	// slider
	$('.similar_products__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<div class="prevArrow"><i class="fas fa-angle-left"></i></div>',
      nextArrow: '<div class="nextArrow"><i class="fas fa-angle-right"></i></div>',
      responsive: [ 
		  {
          breakpoint: 1911,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
		{
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
	
	//похожеи товары понравившееся
    $('.card-heart').click(function () {
      $(this).toggleClass('active');
    });  
	
	//scroll up
	$('.lift_up').on('click', 'a', function(event){
		event.preventDefault();
		let  name  = $(this).attr('href'),
		top = $(name).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	})
	newHeaderBlockBacket();
  });
})(jQuery);


	//delete block
		function deleteProductCard(element) {
		 
			setTimeout(()=>{
				$(element).parents('.Card_Product__card').remove();
			newHeaderBlockBacket();
			}, 1);
		}
	// the header block of the basket with the quantity of goods more than number
	function newHeaderBlockBacket(){
		if( $('.Card_Product__card').length > 3){
			$('.wrapper_basket_description__visibility').show();
		} else if ($('.Card_Product__card').length == 0){
			$('.main_container.favorites').hide();
		} else {			$('.wrapper_basket_description__visibility').hide();
		}
	}
	//hinst bootstrap
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip()
		})
