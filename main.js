//global variables
var population = [];
var width, height;

//Button Controls
var predefinedButtons = document.getElementsByClassName('game-size-button');
console.log(predefinedButtons);

for(var i = 0; i < predefinedButtons.length; i++ ){

	predefinedButtons[i].addEventListener("click", function(){
		var size = this.getAttribute("size");
		
		if(checkIfGameFieldExists()){
			clearGameField();
		}
		width = size;
		height = size;
		createGamefield();
	});
}

var deleteButton = document.getElementById('delete');
deleteButton.addEventListener("click" , clearGameField);

var testPopulationButton = document.getElementById('test-population');
testPopulationButton.addEventListener("click" , initiateTestPopulation);



//Create and delete game field funcions
function createGamefield(){
	var gamefield = document.getElementById('gamefield');
	

	for(var i = 0; i < width; i++){
		for (var j = 0; j < height; j++) {

			var cell = document.createElement("DIV");
			 if (j==0){
				cell.className ="first-cell cell";
				gamefield.appendChild(cell);
			}
			else{
				cell.className ="cell";
				gamefield.appendChild(cell);
				
			}
		}
	}

}

function checkIfGameFieldExists(){
	var gamefield = document.getElementById('gamefield');
	children = gamefield.children;

	if(children.length == 0){
		return false;
	}else{
		return true;
	}
}

function clearGameField(){
	var gamefield = document.getElementById('gamefield');

	while(gamefield.firstChild){
      gamefield.removeChild(gamefield.firstChild);
    }
}


//Population Functions
function initiateTestPopulation(){

	if (width == 4 && height == 4) {
		insertLive(0, 2);
		insertLive(1, 2);
		insertLive(2, 2);
		insertLive(3, 2);
	};
	
}

function insertLive(row, column){
	var gamefield = document.getElementById('gamefield');
	cells = gamefield.children;
	cellNumber = row * width + column;
	cells[cellNumber].className += " alive";

}

function killLive(row, column){
	var gamefield = document.getElementById('gamefield');
	cells = gamefield.children;
	cellNumber = row * width + column;
	cells[cellNumber].classList.remove("alive");

}




console.log("loaded");