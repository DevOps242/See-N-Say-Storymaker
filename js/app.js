// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';


/* Variables to get html elements by id */
var resetButton = document.getElementById("resetButton");
var saveButton = document.getElementById("saveButton");
var playButton = document.getElementById("playButton");
var nextButton = document.getElementById("nextButton");
var randomButton = document.getElementById("randomButton");

var subjectImg = document.getElementById("subjectImg");
var subjectImg_2 = document.getElementById("subjectImg_2");

/*Variables to store word selection */
var ourSubject = "";
var ourVerb = "";
var ourAdjective = "";
var ourThing = "";
var ourPlace = "";
var currentLocation = 0;
var currentCol = 1;
var newPhrase;

// Five Arrays for Story Button Words
let subject = ['The turkey ', 'Mom ', 'Dad ', 'The Dog ', 'My teacher ', 'The elephant '];
let verb = ['sat on ', 'ate ', 'danced with ', 'saw ', 'doesn\'t like ', 'kissed ' ];
let adjective = ['a funny ', 'a scary ', 'a goofy ', 'a slimy ', 'a barking ', 'a fat '];
let thing = ['goat ', 'monkey ', 'fish ', 'cow ', 'frog ', 'bug '];
let place = ['on the moon ', 'on a chair ', 'in my spaghetti ', 'in my soup ', 'on the grass ', 'in my shoes '];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
saveButton.onclick = function() {
	//save current phrase fragment
		//detect what column then store into variable
    if(currentCol == 1){
		if(currentLocation == 0)
		{
			ourSubject = subject[currentLocation+5];
      		speakNow("Subject Saved");
		}
		else
		{
			ourSubject = subject[currentLocation-1];
      		speakNow("Subject Saved");
		}
    }
    if(currentCol == 2){
		if(currentLocation == 0)
		{
			ourVerb = verb[currentLocation+5];
      		speakNow("Verb Saved");
		}
		else
		{
			ourVerb = verb[currentLocation-1];
      		speakNow("Verb Saved");
		}  
    }
    if(currentCol == 3){
		if(currentLocation == 0)
		{
			ourAdjective = adjective[currentLocation+5];
			speakNow("Adjective Saved");
		}
		else
		{
			ourAdjective = adjective[currentLocation-1];
			speakNow("Adjective Saved");
		}
    }
    if(currentCol == 4){
		if(currentLocation == 0)
		{
			ourThing = thing[currentLocation+5];
			speakNow("Thing Saved");
		}
		else
		{
			ourThing = thing[currentLocation-1];
			speakNow("Thing Saved");
		}
    }
    if(currentCol == 5){
		if(currentLocation == 0)
		{
			ourPlace = place[currentLocation+5];
			speakNow("Place Saved");
		}
		else
		{
			ourPlace = place[currentLocation-1];
			speakNow("Place Saved");
		}
    }
	if(currentCol == 0){
		speakNow("Let's build a story.");
	}
	currentCol = currentCol + 1;
	currentLocation = 0;
    
}

/*Speak word at current column and current location within column then
increment the column and reset current location to zero */
nextButton.onclick = function() {

  checkImg();

  	if(currentCol == 1){
    	ourSubject = subject[currentLocation];
    	speakNow(subject[currentLocation]);
  	}
  	if(currentCol == 2){
    	ourVerb = verb[currentLocation];
   	 	speakNow(verb[currentLocation]);
  	}
	if(currentCol == 3){
		ourAdjective = adjective[currentLocation];
		speakNow(adjective[currentLocation]);
	}
	if(currentCol == 4){
		ourThing = thing[currentLocation];
		speakNow(thing[currentLocation]);
	}
	if(currentCol == 5){
		ourPlace = place[currentLocation];
		speakNow(place[currentLocation]);
	}
	if(currentLocation < 5){
    	currentLocation = currentLocation + 1;
  	}else{
    	currentLocation = 0;
  	}
}

/*Speaks the word currently stored in each word selection variable*/
playButton.onclick = function() {
	//play saved story
  if(currentCol > 5){
    newPhrase = ourSubject + ourVerb + ourAdjective + ourThing + ourPlace;
    speakNow(newPhrase);

  }else{
    speakNow("Story not ready");
  }

}

/*Reset column and current location in column to zero and return images to first position */
resetButton.onclick = function() {
  speakNow("reset");
  currentCol = 0;
  currentLocation = 0;
  resetImg();
}

/*Function to display correct picture associated with each spoken word selection */
function checkImg(){

	// Subject Images
	if (currentCol == 1) {
		if(currentLocation == 0){
			subjectImg.src="assets/images/subject/turkey.png";
		}
		if(currentLocation == 1){
			subjectImg.src="assets/images/subject/mother.png";
			
		}
		if(currentLocation == 2){
			subjectImg.src="assets/images/subject/father.jpg";
			
		}
		if(currentLocation == 3){
			subjectImg.src="assets/images/subject/dog.jpg";
			
		}
		if(currentLocation == 4){
			subjectImg.src="assets/images/subject/teacher.jpg";
			
		}
		if(currentLocation == 5){
			subjectImg.src="assets/images/subject/elephant.jpg";
		}

		// Verb Images
	} else if (currentCol == 2) {
		if(currentLocation == 0){
			subjectImg_2.src="assets/images/verb/sat-on.png";
		}
		if(currentLocation == 1){
			subjectImg_2.src="assets/images/verb/eat.png";
		}
		if(currentLocation == 2){
			subjectImg_2.src="assets/images/verb/dancing.jpg";
		}
		if(currentLocation == 3){
			subjectImg_2.src="assets/images/verb/saw.png";
		}
		if(currentLocation == 4){
			subjectImg_2.src="assets/images/verb/dislike.jpg";
		}
		if(currentLocation == 5){
			subjectImg_2.src="assets/images/verb/kissing.jpg";
		}

		// Adjective Images
	} else if (currentCol == 3) {
		if(currentLocation == 0){
			subjectImg_3.src="assets/images/adjective/a-funny.png";
		}
		if(currentLocation == 1){
			subjectImg_3.src="assets/images/adjective/a-scary.jpg";
		}
		if(currentLocation == 2){
			subjectImg_3.src="assets/images/adjective/a-goofy.png";
		}
		if(currentLocation == 3){
			subjectImg_3.src="assets/images/adjective/a-slimy.jpg";
		}
		if(currentLocation == 4){
			subjectImg_3.src="assets/images/adjective/a-barking.jpg";
		}
		if(currentLocation == 5){
			subjectImg_3.src="assets/images/adjective/a-fat.png";
		}

		// Thing Images
	} else if (currentCol == 4) {
		if(currentLocation == 0){
			subjectImg_4.src="assets/images/thing/a-goat.jpg";
		}
		if(currentLocation == 1){
			subjectImg_4.src="assets/images/thing/a-monkey.jpg";
		}
		if(currentLocation == 2){
			subjectImg_4.src="assets/images/thing/a-fish.png";
		}
		if(currentLocation == 3){
			subjectImg_4.src="assets/images/thing/a-cow.jpg";
		}
		if(currentLocation == 4){
			subjectImg_4.src="assets/images/thing/a-frog.png";
		}
		if(currentLocation == 5){
			subjectImg_4.src="assets/images/thing/a-bug.jpg";
		}

		// Place Images
	} else if (currentCol == 5) {
		if(currentLocation == 0){
			subjectImg_5.src="assets/images/place/on-the-moon.png";
		}
		if(currentLocation == 1){
			subjectImg_5.src="assets/images/place/on-a-chair.png";
		}
		if(currentLocation == 2){
			subjectImg_5.src="assets/images/place/in-my-spaghetti.png";
		}
		if(currentLocation == 3){
			subjectImg_5.src="assets/images/place/in-my-soup.png";
		}
		if(currentLocation == 4){
			subjectImg_5.src="assets/images/place/on-the-grass.png";
		}
		if(currentLocation == 5){
			subjectImg_5.src="assets/images/place/in-my-shoes.png";
		}
	} 
	
}

/*Reset images back to first location for every column */
function resetImg(){

	//Reset images
	subjectImg.src="assets/images/subject/turkey.png";
	subjectImg_2.src="assets/images/verb/sat-on.png";
	subjectImg_3.src="assets/images/adjective/a-funny.png";
	subjectImg_4.src="assets/images/thing/a-goat.jpg";
	subjectImg_5.src="assets/images/place/on-the-moon.png";
}


/*Generate a random story by selecting a random word from each category*/
randomButton.onclick = function (){

	
	x = Math.floor((Math.random()*5)+ 0);
	y = Math.floor((Math.random()*5)+ 0);
	z = Math.floor((Math.random()*5)+ 0);
	a = Math.floor((Math.random()*5)+ 0);
	b = Math.floor((Math.random()*5)+ 0);

	randomStory = subject[x] + verb[y] + adjective[z] + thing[a] + place[b]; 

	//Set images according to random story 
	// Subject Images
	if (x == 0) {
		subjectImg.src="assets/images/subject/turkey.png";
	}
	if(x == 1){
		subjectImg.src="assets/images/subject/mother.png";
		
	}
	if(x == 2){
		subjectImg.src="assets/images/subject/father.jpg";
		
	}
	if(x == 3){
		subjectImg.src="assets/images/subject/dog.jpg";
		
	}
	if(x == 4){
		subjectImg.src="assets/images/subject/teacher.jpg";
		
	}
	if(x == 5){
		subjectImg.src="assets/images/subject/elephant.jpg";
	}

	// Verb Images
	if(y == 0){
		subjectImg_2.src="assets/images/verb/sat-on.png";
	}
	if(y == 1){
		subjectImg_2.src="assets/images/verb/eat.png";
	}
	if(y == 2){
		subjectImg_2.src="assets/images/verb/dancing.jpg";
	}
	if(y == 3){
		subjectImg_2.src="assets/images/verb/saw.png";
	}
	if(y == 4){
		subjectImg_2.src="assets/images/verb/dislike.jpg";
	}
	if(y == 5){
		subjectImg_2.src="assets/images/verb/kissing.jpg";
	}

	// Adjective Images
	if(z == 0){
		subjectImg_3.src="assets/images/adjective/a-funny.png";
	}
	if(z == 1){
		subjectImg_3.src="assets/images/adjective/a-scary.jpg";
	}
	if(z == 2){
		subjectImg_3.src="assets/images/adjective/a-goofy.png";
	}
	if(z == 3){
		subjectImg_3.src="assets/images/adjective/a-slimy.jpg";
	}
	if(z == 4){
		subjectImg_3.src="assets/images/adjective/a-barking.jpg";
	}
	if(z == 5){
		subjectImg_3.src="assets/images/adjective/a-fat.png";
	}

	// Thing Images
	if(a == 0){
		subjectImg_4.src="assets/images/thing/a-goat.jpg";
	}
	if(a == 1){
		subjectImg_4.src="assets/images/thing/a-monkey.jpg";
	}
	if(a == 2){
		subjectImg_4.src="assets/images/thing/a-fish.png";
	}
	if(a == 3){
		subjectImg_4.src="assets/images/thing/a-cow.jpg";
	}
	if(a == 4){
		subjectImg_4.src="assets/images/thing/a-frog.png";
	}
	if(a == 5){
		subjectImg_4.src="assets/images/thing/a-bug.jpg";
	}

	// Place Images
	if(b == 0){
		subjectImg_5.src="assets/images/place/on-the-moon.png";
	}
	if(b== 1){
		subjectImg_5.src="assets/images/place/on-a-chair.png";
	}
	if(b == 2){
		subjectImg_5.src="assets/images/place/in-my-spaghetti.png";
	}
	if(b == 3){
		subjectImg_5.src="assets/images/place/in-my-soup.png";
	}
	if(b == 4){
		subjectImg_5.src="assets/images/place/on-the-grass.png";
	}
	if(b == 5){
		subjectImg_5.src="assets/images/place/in-my-shoes.png";
	}
	 
	speakNow(randomStory);

}


