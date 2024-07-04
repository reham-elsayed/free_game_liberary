



let Gamedetail = function (id){
	this.gameId = id;
}
Gamedetail.prototype.getData=  async function(){
const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e2477d3caamsh84984fb36ef7e23p180628jsncf7aaef6e595',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return(result);
} catch (error) {
	console.error(error);
}
}
export { Gamedetail };


