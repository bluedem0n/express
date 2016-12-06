function setState(state,serverState){
	return Object.assign({},state, serverState);
	
}

function findIfExists(arr, item) {
	var index = arr.findIndex(function(element){
		return element === item;
	});
	if (index === -1) {
		return false;
	} else {
		return true;
	}
}

function vote(state,select){
	var pair = state.vote.pair;
	
	var exists = false;
	
	exists = findIfExists(pair,select);
	
	if (!exists) {
		return state;
	} else {
		return Object.assign({},state,{hasVoted:select});
	}
}

module.exports = {
	vote : vote,
	setState : setState
};