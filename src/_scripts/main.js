const $ = require('jquery');

(function() {
	let $body = $('body');

	$body.on('click', '[data-add-to-cart]', function(e) {
		let $this = $(this);

		e.preventDefault();
		
		$.getJSON({
			url: './fakedata/cartResponse.json',
			success: (res) => {
				if (res.success) {
					$this
						.text('Добавлено')
						.removeClass('btn-primary')
						.addClass('btn-success');
						
					$('[data-cart-count]').text(res.count);
				}
			}
		});
	});
}());
