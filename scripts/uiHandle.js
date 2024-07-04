

//import { fetchData } from "./main.js";


import { Game } from "./main.js";
import { Gamedetail } from "./newjs.js";
let localList = [];
const gameName = document.querySelectorAll(".nav-item")
const parent =document.querySelector(".parent")
export const displayData = document.getElementById("display")
const loader = document.querySelector(".loader");
if (JSON.parse(localStorage.getItem("gameData"))){
   localList = JSON.parse(localStorage.getItem("gameData"));
}
window.addEventListener("load", async function(){
   let category = "mmorpg"; 
   let loadData = await newData(category);
console.log(loadData);
if(!loadData){
  
   loader.classList.replace("d-none","d-block");
}
else{
   loader.classList.replace("d-block","d-none");
   display(loadData)
}

  
})

async function newData(category){
   
   let game = new Game(category)
   let movieData =await game.getData()
   localStorage.setItem("gameData", JSON.stringify(movieData))
/*localList = JSON.parse(localStorage.getItem("gameData"))
   console.log(localList);
 
   const cards_container = document.getElementById("display");
    console.log(cards_container.getAttribute("id"));

    for (let i = 0; i < cards_container.children.length; i++) {
        let childElement = cards_container.children[i].getAttribute("id");
        console.log(childElement)
        if (childElement.hasOwnProperty('id')) {
            console.log(`Child ${i} has an id: ${childElement.id}`);
        } else {
            console.log(`Child ${i} does not have an id.`);
        }
    }
*/

  return (movieData)
}


 
gameName.forEach((name)=> name.addEventListener("click",async function(){
	displayData.innerHTML='';
   loader.classList.replace("d-none", "d-block");
	let textt = name.innerText
   let movieData = await newData(textt)
	// let game = new Game(textt)
   //  let movieData =await game.getData()
	// console.log(movieData);
   // localStorage.setItem("gameData", JSON.stringify(movieData))
   // localList = JSON.parse(localStorage.getItem("gameData"))
if (!movieData){
   loader.classList.replace("d-none", "d-block");

}
else
{
   loader.classList.replace("d-block","d-none");

   display(movieData);}
	
}))
//console.log("all data from uihandle file ",fetchData)
function display(dataGames) {
   console.log(dataGames);
   if (Array.isArray(dataGames)) { // Check if dataGames is an array
       dataGames.forEach(item => {
           console.log(item);
           const card = new Gamedata(item);
           card.cardMaker(); // Call the cardMaker method on each item

       });
   } else {
       console.error("Expected an array, got:", typeof dataGames);
   }
   const gameCards = document.querySelectorAll(".col-md-3");
   let minheight = 0
      gameCards.forEach((gameCard)=>

      {  console.log("gameCard",gameCard),
         // gameCard.addEventListener("click", async function(){
         //    displayInfo(id)
         // })
        console.log("Height of gameCard:", gameCard.offsetHeight);
        if (gameCard.offsetHeight > minheight)
        {minheight = gameCard.offsetHeight

        }
        gameCard.style.minHeight = minheight + 'px'; 
       
     })

}



///////////////////////////////////////////////////////////////////
// Constructor function for Gamedata
let Gamedata = function (data) {
   this.img = data.thumbnail;
   this.name = data.title;
   this.desc = data.short_description;
   this.game_url = data.game_url;
   this.freetogame_profile_url = data.freetogame_profile_url;
   this.publisher = data.publisher;
   this.platform = data.platform;
   this.genre = data.genre;
   this.id= data.id
}

// Adding the cardMaker method to the prototype of Gamedata

Gamedata.prototype.cardMaker = async function() {
   let gameCard = document.createElement("div");
   gameCard.classList.add("col-md-3");
 //  gameCard.classList.add("card");
   gameCard.classList.add("g-4");
  // gameCard.classList.add("bg-card-color");
gameCard.setAttribute('id', `game-${this.id}`)
  // gameCard.style.width = "18rem";
  gameCard.addEventListener('click', () => displayInfo(this.id));
   gameCard.innerHTML = `
   <div class="inner bg-card-color">
     <div class="p-2 card bg-card-color" > 
     <div class="img-card">
 <img  src="${this.img}" class="card-img-top" alt="game img">
 <div class="layer"></div></div>
 <div class="card-body px-0 bg-card-color">
 <div class="d-flex justify-content-between align-items-start">
 <h6 class="">${this.name}</h6>
 <small class="btn btn-info p-0">free</small>
 </div>
 <div class="text-center text-set">
     <small class="card-text">${this.desc.split(" ").slice(0,8).join(" ")}</small>

 </div>
 </div>
 </div>
 <div class="genre"><span>${this.genre}</span>
 <span>${this.platform}</span></div>
</div>
`;
   displayData.append(gameCard);
  
};
/*function displayInfo(id){
   console.log(id)
}*/

Gamedata.prototype.gameInfoMaker = async function(){
   const gameInfoCard = document.getElementById("game-info");
   const img = document.querySelector("#game-info img")
   img.setAttribute("src", `${this.img}`);
   const info_game = document.getElementById("info-game")
   info_game.innerHTML =`<h3>Title : ${this.title}</h3>
             <p>Category: ${this.category}</p>
             <p>Platform: ${this.Platform}</p>
             <p>Status: ${this.category}</p>
             <p>${this.desc}</p>
<button class="btn btn-outline-warning"><a href="/${this.game_url}"></a>Show Game</button>`



}

class Infodetail { constructor(data) {
   this.id = data.id;
   this.title = data.title;
   this.thumbnail = data.thumbnail;
   this.status = data.status;
   this.shortDescription = data.short_description;
   this.description = data.description;
   this.gameUrl = data.game_url;
   this.genre = data.genre;
   this.platform = data.platform;
   this.publisher = data.publisher;
   this.developer = data.developer;
   this.releaseDate = data.release_date;
   this.minimumSystemRequirements = data.minimum_system_requirements;
}}
const mainCard = document.querySelector("#game-info")
Infodetail.prototype.createCardInfo = async function(){
   
   const img = document.querySelector("#game-img")
   img.setAttribute("src", `${this.thumbnail}`);
   const info_game = document.getElementById("info-game")
   info_game.innerHTML =`
   
   <h3>Title : ${this.title}</h3>
            <p>Category: ${this.genre}</p>
             <p>Platform: ${this.platform}</p>
             <p>Status: ${this.status}</p>
             <p>${this.description}</p>
<a class="btn btn-outline-warning" href="${this.gameUrl}">Show game</a>`
 mainCard.classList.replace("d-none", "d-block")
parent.classList.add("d-none")
 
}


async function displayInfo(id){
let gameDetail = new Gamedetail(id);
let game_info = await gameDetail.getData();
console.log(game_info);

await handleInfoDisplay(game_info)
   
}

async function handleInfoDisplay(game_info){
let info_game = new Infodetail(game_info);
console.log('info_game', info_game);
info_game.createCardInfo();
}
const cross_icon = document.querySelector(".cross-icon");
cross_icon.addEventListener("click", function(){
   mainCard.classList.replace("d-block", "d-none");
  parent.classList.remove("d-none");
})


const nav =document.querySelector("nav")
window.addEventListener("scroll", function (){
  nav.classList.replace("nav", "navscroll")
 
})