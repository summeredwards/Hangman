var images = [
	"img/0.png",
	"img/1.png",
	"img/2.png",
	"img/3.png",
	"img/4.png",
	"img/5.png",
	"img/6.png",
	"img/7.png",
	"img/8.png",
	"img/9.png",
	"img/10.png"
]
var words = [
	"pandemic",
	"university",
	"engineering",
	"coronavirus",
	"technology",
	"broadway",
	"baseline",
	"boulder",
	"ketchup",
	"mustard",
	"sandwich",
	"lettuce",
	"spaghetti",
	"lemonade",
	"barbecue",
	"apartment",
	"complex",
	"strawberry",
	"banana",
	"avocado",
	"onion",
	"apple",
	"broccoli",
	"grape",
	"coffee",
	"christmas",
	"halloween",
	"easter",
	"spring",
	"summer",
	"winter",
	"autumn",
	"scissors",
	"notebook",
	"pencil",
	"folder",
	"octopus",
	"dolphin",
	"fish",
	"mermaid",
	"whale",
	"ocean",
	"waves",
	"clouds",
	"weather",
	"thunder",
	"rain",
	"tornado",
	"hurricane",
	"nighttime"
]
var letter = "";
var word = "";
var blanks = "";
var wrong = 0;
var wrongLetters = "";

// different functoins depending on the letter you select 
function letterSelectA(){
	letter = document.getElementById("letterA").value;
	console.log(letter);
}
function letterSelectB(){
	letter = document.getElementById("letterB").value;
	console.log(letter);
}
function letterSelectC(){
	letter = document.getElementById("letterC").value;
	console.log(letter);
}
function letterSelectD(){
	letter = document.getElementById("letterD").value;
	console.log(letter);
}
function letterSelectE(){
	letter = document.getElementById("letterE").value;
}
function letterSelectF(){
	letter = document.getElementById("letterF").value;
}
function letterSelectG(){
	letter = document.getElementById("letterG").value;
}
function letterSelectH(){
	letter = document.getElementById("letterH").value;
}
function letterSelectI(){
	letter = document.getElementById("letterI").value;
}
function letterSelectJ(){
	letter = document.getElementById("letterJ").value;
}
function letterSelectK(){
	letter = document.getElementById("letterK").value;
}
function letterSelectL(){
	letter = document.getElementById("letterL").value;
}
function letterSelectM(){
	letter = document.getElementById("letterM").value;
}
function letterSelectN(){
	letter = document.getElementById("letterN").value;
}
function letterSelectO(){
	letter = document.getElementById("letterO").value;
}
function letterSelectP(){
	letter = document.getElementById("letterP").value;
}
function letterSelectQ(){
	letter = document.getElementById("letterQ").value;
}
function letterSelectR(){
	letter = document.getElementById("letterR").value;
}
function letterSelectS(){
	letter = document.getElementById("letterS").value;
}
function letterSelectT(){
	letter = document.getElementById("letterT").value;
}
function letterSelectU(){
	letter = document.getElementById("letterU").value;
}
function letterSelectV(){
	letter = document.getElementById("letterV").value;
}
function letterSelectW(){
	letter = document.getElementById("letterW").value;
}
function letterSelectX(){
	letter = document.getElementById("letterX").value;
}
function letterSelectY(){
	letter = document.getElementById("letterY").value;
}
function letterSelectZ(){
	letter = document.getElementById("letterZ").value;
}
//console.log(letter);
function playGame(){
	blanks = "";
	wrongLetters = "";
	wrong = 0;

	// randomly choose between 0 and 49 (index for words[] array)
	var index = Math.floor(Math.random() * (50));
	// got Math.floor(Math.random() * (max + 1)) for random # b/t 0-49 from https://www.codegrepper.com/code-examples/delphi/get+random+number+between+1+and+50+js

	// set that index in words[] to the variable word
	word = words[index];
	console.log(word);

	// for the length of the word, replace letters with blanks
	for (var i=0; i < word.length; i++){
		blanks = blanks + "_ ";
		console.log(blanks.length);
	}
	// write the blanks into the html 
	document.getElementById("word").innerHTML = blanks;
	document.getElementById("wrong").innerHTML = wrongLetters;
	document.getElementById("images").innerHTML = "<img src='img/0.png' alt='Summer Edwards'>"
}

function checkLetter(){
	console.log(word);
	console.log(letter);
	var match = false;
	var temp="";

	// for the length of the word str
	for (var j=0; j < word.length; j++){
		// if the character in the word str matches the selected letter
		if (word[j] == letter){
			// for the length of the blanks str (this rewrites the blank str)
			 for (var k=0; k < blanks.length; k++){
				// if the index in the blanks str is in the correct spot for the letter
			 	if (k == (j*2)){
			 		// add letter
			 		temp = temp + letter;
			 	}
			 	// if the character in the blank str is not "_" and not " "
			 	else if (blanks[k] != "_" && blanks[k] != " "){
			 		// add the character
			 		temp = temp + blanks[k];
			 	}
			 	// if the character in the blank str is "_" and not the correct index
			 	else if (blanks[k] == "_" && k != (j*2)){
			 		// add "_"
			 		temp = temp + "_";
			 	}
			 	// if the character in the blanks str is " "
			 	else if (blanks[k] == " "){
			 		// add " "
			 		temp = temp + " ";
			 	}
			 }
			
			blanks = temp;
			//console.log(blanks);
			//console.log(temp);

			// rewrite the blanks str in the html
			document.getElementById("word").innerHTML = blanks;
			
			// if the selected letter matches
			match = true;
			temp = "";
		}
	}

	// if selected letter does not match 
	if (match == false){
		if (wrong == 0){
			wrongLetters = wrongLetters + letter;
			document.getElementById("wrong").innerHTML = wrongLetters;
		}
		else if (wrong != 0 && wrong != 10){
			wrongLetters = wrongLetters + ", " + letter;
			document.getElementById("wrong").innerHTML = wrongLetters;
		}
		if (wrong != 10){
			wrong++;
		}
		console.log(wrong);
	}

	// if you lose
	if (wrong == 10){
		document.getElementById("word").innerHTML = word;
		document.getElementById("images").innerHTML = "<img src='img/10.png' alt='Summer Edwards'>"
	}
	else{
		// puts correct hangman image based on how many you have gotten wrong
		document.getElementById("images").innerHTML = "<img src='img/" + wrong + ".png' alt='Summer Edwards'>"
	}
}




