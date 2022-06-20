
document.addEventListener("DOMContentLoaded", function (event) {

	'use strict';

	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll('.needs-validation')

		// Loop over them and prevent submission
		Array.prototype.slice.call(forms)
			.forEach(function (form) {
				form.addEventListener('submit', function (event) {
					if (!form.checkValidity()) {
						event.preventDefault()
						event.stopPropagation()
					}

					form.classList.add('was-validated')
				}, false)
			})
	})();

	$('.custom-select').select2({
		minimumResultsForSearch: Infinity,
	});

	$('.custom-select').on('select2:select', function (e) {
		$(e.target.nextElementSibling).addClass('selected');
	});

	$('.sorting-select').select2({
		minimumResultsForSearch: Infinity,
	});

	$('.sorting-select').on('select2:opening', function (e) {
		console.log('open');
		$('.sorting-select').select2('close');
		$("body").attr('data-sorting-select', true);
	});

	$('.sorting-select').on('select2:close', function (e) {
		console.log('close');
		$("body").removeAttr('data-sorting-select');
	});

	$('.sorting-select').on('select2:select', function (e) {
		let dataAttrOption = $(e.params.data.element).attr('data-sort');

		if (dataAttrOption == 'ascending') {
			$(e.currentTarget).attr('data-sort-select', 'ascending');
		} else {
			$(e.currentTarget).attr('data-sort-select', 'descending');
		};
	});

	function setAttrForeSortingSelect() {
		$('.sorting-select option').each(function () {
			if (this.selected) {
				let valueDataSortOption = $(this).attr('data-sort');
				$(this).parent().attr('data-sort-select', valueDataSortOption)
			}
		})
	};

	if ($('.sorting-select')) {
		setAttrForeSortingSelect();
	};

	if ($('.accordion-collapse.collapse')) {

		let accordion = $('.accordion-collapse.collapse');
		$(accordion).each(function (i, elem) {
			elem.addEventListener('hidden.bs.collapse', function () {
				let parent = $(elem).closest('.accordion-item');
				$(parent).removeClass('open');
				$(parent).prev().removeClass('hide-border');
			});

			elem.addEventListener('show.bs.collapse', function () {
				let parent = $(elem).closest('.accordion-item');
				$(parent).addClass('open');
				$(parent).prev().addClass('hide-border');
			});
		});

		if ('.accordion-collapse.collapse.show') {
			let accordionOpen = $('.accordion-collapse.collapse.show');
			$(accordionOpen).each(function (i, elem) {
				let parent = $(elem).closest('.accordion-item');
				$(parent).addClass('open');
				$(parent).prev().addClass('hide-border');
			});
		}
	};

});
