// declare variables for position of diglett, dugtrio and voltorb
let currentDiglettTile;
let currentDugtrioTile;
let currentVoltorbTile;
// declare variable for total score
let score = 0;
// declare variable for game state
let gameOver = false;


// when the GameScreen starts or get refreshed, run the code below
window.onload = function() {

  const difficulty = localStorage.getItem('difficulty');
  // call an array of elements with class "hole"
  let holes = document.getElementsByClassName("hole");
  // append the click (or "whack") feature to each of the holes from id 1 to 9
  for(let i = 0; i < 9; i++){
    holes[i].addEventListener("click",whack);
  }

  adjustDifficulty(difficulty);

}

function adjustDifficulty(difficulty){
  if(difficulty == "Novice"){
    setInterval(setDiglett, 3000);
    setInterval(setDugtrio, 3000);
    setInterval(setVoltorb, 3000);
  }
  else if(difficulty == "Great"){
    setInterval(setDiglett, 2000);
    setInterval(setDugtrio, 2000);
    setInterval(setVoltorb, 2000);
  }
  else if(difficulty == "Ultra"){
    setInterval(setDiglett, 1000);
    setInterval(setDugtrio, 1000);
    setInterval(setVoltorb, 1000);
  }
  else if(difficulty == "Master"){
    setInterval(setDiglett, 500);
    setInterval(setDugtrio, 500);
    setInterval(setVoltorb, 500);
  }
}


// function to choose random hole the mole would appear
function getRandomHole() {
  let hole = Math.floor(Math.random() * 9);
  return hole.toString();
}

// function to spawn a diglett
function setDiglett(){
  // once game over, diglett would stop spawning 
  if (gameOver) {
    return;
  }

  /* this line is to prevent the mole from appearing at the same hole */
  if(currentDiglettTile) {
    currentDiglettTile.innerHTML = "";
  }

  // first create diglett as an img element
  let diglett = document.createElement("img");
  diglett.src = "./images/diglett2.png";
  // create a random number to later assign it as a hole for diglett
  let num = getRandomHole();
  // since there will be voltorb and dugtrio spawning randomly and possibly simultaneously, this line prevents them spawing in the same hole
  if((currentDugtrioTile && currentDugtrioTile.id == num) || (currentVoltorbTile && currentVoltorbTile.id == num)){
    return;
  }
  // retrieve the corresponding hole from 1-9 corresponding to the random generated number  
  currentDiglettTile = document.getElementById(num);
  // use appendChild function to add the diglett img to to the hole
  currentDiglettTile.appendChild(diglett);
  // function to set random duration of diglett
  let timeout = 800 + Math.floor(Math.random() * 2201);
  setTimeout(removeMole, timeout);
}

// function to spawn a dugtrio, similar to diglett
function setDugtrio(){

  if (gameOver) {
    return;
  }

  /* this line is to prevent the mole from appearing at the same hole */
  if(currentDugtrioTile) {
    currentDugtrioTile.innerHTML = "";
  }

  let dugtrio = document.createElement("img");
  dugtrio.src = "./images/dugtrio.png";
  let num = getRandomHole();
  if((currentDiglettTile && currentDiglettTile.id == num) || (currentVoltorbTile && currentVoltorbTile.id == num)){
    return;
  } 
  currentDugtrioTile = document.getElementById(num);
  currentDugtrioTile.appendChild(dugtrio);
  let timeout = 800 + Math.floor(Math.random() * 2201);
  setTimeout(removeMole, timeout);
}

// function to spawn a voltorb, similar to diglett
function setVoltorb(){

  if (gameOver) {
    return;
  }

  /* this line is to prevent the mole from appearing at the same hole */
  if(currentVoltorbTile) {
    currentVoltorbTile.innerHTML = "";
  }

  let voltorb = document.createElement("img");
  voltorb.src = "./images/voltorb-seeklogo.svg";
  let num = getRandomHole();
  if((currentDugtrioTile && currentDugtrioTile.id == num) || (currentDiglettTile && currentDiglettTile.id == num)){
    return;
  } 
  currentVoltorbTile = document.getElementById(num);
  currentVoltorbTile.appendChild(voltorb);
  let timeout = 800 + Math.floor(Math.random() * 2201)
  setTimeout(removeMole, timeout);
}

// function to despawn a mole
function removeMole(cell) {
  this.cell.removeChild(cell.firstChild)
}


// function to make the mole disappear after 1 click
function whack() {

  // stop this function if game over is declared
   if (gameOver) {
    return;
   }

   if (this == currentDiglettTile) {
    // once clicked, add 10 points to total score
    score += 10;
    // despawn everything after one is clicked
    currentDiglettTile.innerHTML = "";
    currentDugtrioTile.innerHTML = "";
    currentVoltorbTile.innerHTML = "";
    // update and display the new score
    document.getElementById("score-display").innerText = "Score: " + score.toString();
   }
   else if (this == currentDugtrioTile) {
    // once clicked, add 30 points to total score
    score += 30;
    // despawn everything after one is clicked
    currentDiglettTile.innerHTML = "";
    currentDugtrioTile.innerHTML = "";
    currentVoltorbTile.innerHTML = "";
    // update and display the new score
    document.getElementById("score-display").innerText = "Score: " + score.toString();
   }
   else if(this == currentVoltorbTile) {
    gameOver = true;
    document.getElementById("score-display").innerText = "GAME OVER: " + score.toString();
   }
}
