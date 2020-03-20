const $ = require('jquery');

(function() {
	function addToCartHanlder() {
		let $btns = $('[data-add-to-cart]');

		$btns.on('click', function(e){
			e.preventDefault();
			
			$.getJSON({
				url: './fakedata/cartResponse.json',
				success: (res) => {
					if (res.succes) {
						$btns
							.text('Добавлено')
							.removeClass('btn-primary')
							.addClass('btn-success');
							
						$('[data-cart-count]').text(res.count);
					}
				}
			});
		});
	};

	function main() {
		addToCartHanlder();
	};

	main();
}());
