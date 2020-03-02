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

	
$('.input_name').validity = {  
	valid: false, // Поле валидно
	customError: false, // Установленно специальное сообщение ошибки
	patternMismatch: false, // Значение не удовлетворяет шаблону, установленному в атрибуте pattern
	rangeOverflow: false, // Значение превосходит атрибут max
	rangeUnderflow: true, // Значение меньше атрибута min
	stepMismatch: true, // Значение не соответствует указаному шагу
	tooLong: false, // Значение слишком длинное
	tooShort: false, // Значение слишком короткое
	typeMismatch: false, // Значение не соответствует указаному атрибуту type
	valueMissing: false // Отсутствует обязательное значение
  };

function CustomValidation() { }

	CustomValidation.prototype = {
	// Установим пустой массив сообщений об ошибках
	invalidities: [],

	// Метод, проверяющий валидность
	checkValidity: function(input) {

		var validity = input.validity;

		if (validity.patternMismatch) {
		this.addInvalidity('This is the wrong pattern for this field');
		}

		if (validity.rangeOverflow) {
		var max = getAttributeValue(input, 'max');
		this.addInvalidity('The maximum value should be ' + max);
		}

		if (validity.rangeUnderflow) {
		var min = getAttributeValue(input, 'min');
		this.addInvalidity('The minimum value should be ' + min);
		}

		if (validity.stepMismatch) {
		var step = getAttributeValue(input, 'step');
		this.addInvalidity('This number needs to be a multiple of ' + step);
		}

		if (validity.tooLong) {
		var step = getAttributeValue(input, 'maxlength');
		this.addInvalidity('The maximum length should be ' + maxlength);
		}

		if (validity.tooShort) {
		var step = getAttributeValue(input, 'minlength');
		this.addInvalidity('The minimum length should be' + minlength);
		}

		if (validity.typeMismatch) {
		var step = getAttributeValue(input, 'type');
		this.addInvalidity('The tupe value must be ' + type);
		}

		if (validity.valueMissing) {
		var step = getAttributeValue(input, 'step');
		this.addInvalidity('field value is empty  ' + value);
		}
	},

	// Добавляем сообщение об ошибке в массив ошибок
	addInvalidity: function(message) {
		this.invalidities.push(message);
	},

	// Получаем общий текст сообщений об ошибках
	getInvalidities: function() {
		return this.invalidities.join('. \n');
	}
	};

	// Добавляем обработчик клика на кнопку отправки формы
	$('.button').addEventListener('click', function(e) {
	// Пройдёмся по всем полям
	for (var i = 0; i < inputs.length; i++) {

		var input = inputs[i];

		// Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
		if (input.checkValidity() == false) {

		var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
		inputCustomValidation.checkValidity(input); // Выявим ошибки
		var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
		input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

		} // закончился if
	} // закончился цикл
	});

});
