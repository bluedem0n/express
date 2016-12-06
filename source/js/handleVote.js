var store = require('./start').store;

module.exports = function () {
	var mount = $('#options-mount');

	console.log('test');
	console.log(mount);

	if (mount.length) {
		mount.on('click', '.js-option', function () {
			var option = $(this).data('option');			
			store.dispatch({
				meta: {remote: true},
				type: 'VOTE',
				select: option,
			});
		});	
	}
}