




let Game = function (n){
	this.name = n;
}
Game.prototype.getData=  async function(){
	let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=${this.name}&sort-by=release-date`;
const options = {
method: 'GET',
headers: {
	'Content-Type': 'application/json',
	'x-rapidapi-key': 'e2477d3caamsh84984fb36ef7e23p180628jsncf7aaef6e595',
	'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
}}
let response = await fetch(url, options)
let data = await response.json()
	return(data)

}
export { Game };







  


// Example usage

/**       mmorpg
shooter
sailing
permadeath
superhero
pixel
 */