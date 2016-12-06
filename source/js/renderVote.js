var store = require('./start').store;

function renderVote(state) {
	if (!state.vote) {
		var mount = $('#options-mount');

		if (mount.length) {
			mount.append('<div>lo sentimos no hay votación activa</div>');
		 }

		 return null;
	}

	var pair = state.vote.pair;
	var options = '';

	var votedEntry = state.hasVoted;

	var disabled = votedEntry
		? 'disabled'
		: '';

	pair.forEach(function (ele) {
		options += (
			'<button type="button" class="opciones js-option" data-option="' + ele +'" ' + disabled + '>' +
				ele +
			'</button>'
		);
	});

	if (votedEntry) {
		options += '<div>Has votado por: ' + votedEntry + '</div>';
	}

	var mount = $('#options-mount');

	if (mount.length) {
		mount.empty();
		mount.append(options);
	}
};

module.exports = renderVote;
