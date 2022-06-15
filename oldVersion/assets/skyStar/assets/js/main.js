$( document ).ready(function() {

      // height is equal to the width for the picture on the main page
      $(function(){
        $('.previewImg').height($('.previewImg').width());
        $(window).resize(function(){
          $('.previewImg').height($('.previewImg').width());
        });
      });
      // hiding and showing the user menu block
      $('#user_menu')
        .mouseenter(function(){
          $('.user_menu.user_menu__menu.active').addClass('show');
          $('.user_basket.active').removeClass('show');
        })
        .mouseleave(function(){
          $('.user_menu.user_menu__menu.active').removeClass('show');
        });
      $('#user_basket') 
      .mouseenter(function(){
          $('.user_basket.active').addClass('show');
          $('.user_menu.user_menu__menu.active').removeClass('show');
        })
        .mouseleave(function(){
          $('.user_basket.active').removeClass('show');
        });
        // cross icon for burger
        $('.burgerIcon').on('click', function(e){
          e.preventDefault();
          $(this).toggleClass('burgerIcon__active');
        })
        //
        $(".description_cutText").text(function(i, text) {
          let numberСharacters = 30;
          if (text.length >= numberСharacters) {
            text = text.substring(0, numberСharacters);
            var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
            text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
          }
          
          $(this).text(text);
          
        });
        //scroll
        var Scrollbar = window.Scrollbar;

        Scrollbar.init(document.querySelector('#my-scrollbar_body'), {});
        if(document.getElementById('my-scrollbar_box')){
          Scrollbar.init(document.getElementById('my-scrollbar_box'),  {
            continuousScrolling: false,
            damping: 0.01
          });
        }
        
        // delete cart block in basket
        $('.delete_product').on("click", function(){
          const product = $(this).parents('.basket_product');
          setTimeout( () => {
            product.remove();            
            basketBlock ();
          }, 1); 
        });
});

function login (){
  document.querySelector('.user_menu.active').classList.remove('active');
  document.querySelector('.user_menu.authorized').classList.add('active');
}

function logout (){
  document.querySelector('.user_menu.active').classList.remove('active');
  document.querySelector('.user_menu.login').classList.add('active');
}

function basketBlock (){
  if( $('.wrapper_basket_list *').is('.basket_product')){
    $('.wrapper_basket_list').show();
    $('.basket_product_null').hide();
  } else {
    $('.wrapper_basket_list').hide();
    $('.basket_product_null').show();
  }
}

function buttonMinus(minus) {
  let bM = $(minus).parents('.wrapper_quantity_goods').find('.quantity_goods').val();
  if (bM <= 0) {
      return;
    }
  $(minus).parents('.wrapper_quantity_goods').find('.quantity_goods').val(bM-1);
}

function buttonPlus(plus) {
  let bP = $(plus).parents('.wrapper_quantity_goods').find('.quantity_goods').val();
  bP++;
  $(plus).parents('.wrapper_quantity_goods').find('.quantity_goods').val(bP);
}

 function initQuantityField(container) {
  container.each(function () {
    var $this = $(this);
    var input = $('input', $this);
    input.on('change keyup blur', function () {
    var $this = $(this);
    var value = $this.val() ? $this.val().replace(/[^0-9]/g, '') : 0;
    value = parseInt(value);
    $this.val(value < 0 ? 0 : value);
    })
  });
}
initQuantityField($('.wrapper_quantity_goods'));
;

