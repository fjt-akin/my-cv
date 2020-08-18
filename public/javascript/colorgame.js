var numSquares   = 9,
    colors       = [],
    pickedColor  = pickColor();

var   reset        = document.querySelector("#button1"),
	  answer       = document.querySelector("#answer"),
	  displayColor = document.querySelector("#displayColor"),
	  squares      = document.querySelectorAll(".box"),
	  h1           = document.querySelector("h1"),
	  difficulty   = document.querySelectorAll(".mode");
	 



init();

function init(){
  setupModeButtons();
  setupSquares();
  reseto();
}


function setupModeButtons(){
	for(var i = 0; i < difficulty.length; i++){
		difficulty[i].addEventListener("click", function(){
			difficulty[0].classList.remove("selected");
			difficulty[1].classList.remove("selected");
			this.classList.add("selected");
			
			if(this.textContent === "Easy"){
				numSquares = 6;
			} else {
				numSquares = 9;
			}
			reseto()
		})
	}
}



function reseto(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	reset.textContent = "New Colors";
	answer.textContent = " ";
	h1.style.backgroundColor = "#FFF5EE"
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	
reset.addEventListener("click", function(){
	reseto();
})
	
	
}


function setupSquares() {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			
			if(clickedColor === pickedColor){
				answer.textContent = "correct!!!"
				reset.textContent = "play again?"
				changeColor(clickedColor)
				h1.style.backgroundColor = clickedColor
			} else {
				this.style.backgroundColor ="rgba(128, 128, 128, 0.1)";
				answer.textContent = "try again"
			}
		})
	}
}

function randomColor(){
// 	rgb(r, g, b)
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num){
	colorArray = [];
	
	for( let i = 0; i < num; i++){
		colorArray.push(randomColor());
	}
	return colorArray;
}

function pickColor(){
	let i = Math.floor(Math.random()*colors.length);
	return colors[i]
}

function changeColor(colorz){
	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colorz;
	}
}






