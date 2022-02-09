// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
<<<<<<< HEAD
var speakButton = document.querySelector('button');

// Five Arrays for Story Button Words
let subject = ['the turkey', 'Mom', 'Dad', 'The Dog', 'My teacher', 'The elephant'];
let verb = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed' ];
let adjective = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let thing = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let place = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];
=======
var resetButton = document.getElementById("resetButton");
var saveButton = document.getElementById("saveButton");
var playButton = document.getElementById("playButton");
var nextButton = document.getElementById("nextButton");

var subjectImg = document.getElementById("subjectImg");
var subjectImg_2 = document.getElementById("subjectImg_2");

var ourSubject = "";
var ourVerb = "";
var ourAdjective = "";
var ourThing = "";
var ourPlace = "";
var currentLocation = 0;
var currentCol = 1;

// Five Arrays for Story Button Words
let subject = ['The turkey ', 'Mom ', 'Dad ', 'The Dog ', 'My teacher ', 'The elephant '];
let verb = ['sat on ', 'ate ', 'danced with ', 'saw ', 'doesn\'t like ', 'kissed ' ];
let adjective = ['a funny ', 'a scary ', 'a goofy ', 'a slimy ', 'a barking ', 'a fat '];
let thing = ['goat ', 'monkey ', 'fish ', 'cow ', 'frog ', 'bug '];
let place = ['on the moon ', 'on the chair ', 'in my spaghetti ', 'in my soup ', 'on the grass ', 'in my shoes '];

//  This will loop over every element in the subject array and console log.
subject.forEach($item => {
	console.log($item);
})
>>>>>>> 8ae13fc (update: Aidan js function and images selection)

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

<<<<<<< HEAD
/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
=======

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
saveButton.onclick = function() {
	//save current phrase fragment
		//detect what collumn then store into variable
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
    currentCol = currentCol + 1;
	currentLocation = 0;
}

nextButton.onclick = function() {
	//go to next in list
  //come back to this
  checkImg();
	if(currentLocation < 5){
    	currentLocation = currentLocation + 1;
  	}else{
    	currentLocation = 0;
  	}

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
}

playButton.onclick = function() {
	//play saved story
  if(currentCol > 5){
    newPhrase = ourSubject + ourVerb + ourAdjective + ourThing + ourPlace;
    speakNow(newPhrase)

  }else{
    speakNow("Story not ready");
  }

}
resetButton.onclick = function() {
  speakNow("reset");
  currentCol = 0;
  currentLocation = 0;

}

//this is for subject only
function checkImg(){

	// Subject Images
	if (currentCol == 1) {
		if(currentLocation == 0){
			subjectImg.src="assets/images/subject/mother.png";
		}
		if(currentLocation == 1){
			subjectImg.src="assets/images/subject/father.jpg";
		}
		if(currentLocation == 2){
			subjectImg.src="assets/images/subject/dog.jpg";
		}
		if(currentLocation == 3){
			subjectImg.src="assets/images/subject/teacher.jpg";
		}
		if(currentLocation == 4){
			subjectImg.src="assets/images/subject/elephant.jpg";
		}
		if(currentLocation == 5){
			subjectImg.src="assets/images/subject/turkey.png";
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
			subjectImg_2.src="assets/images/verb/turkey.png";
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

/* very complex
const frameworks = [
	{
	  name: "angular",
	  image: "generic-image-placeholder.png"
	},
	{
	  name: "ember",
	  image: "generic-image-placeholder.png"
	},
	{
	  name: "react",
	  image: "generic-image-placeholder.png"
	},
	{
	  name: "vue",
	  image: "generic-image-placeholder.png"
	}
  ];


// This function will generate a card item for each item in the array which is passed, argument 1 (array of objects), argument 2 (ID on the div you want it placed)
const generateCardCollection = (data, divID) => {
	data.forEach( data => {
		const card = `<div class="row mb-3">
					  <div class="card" style="width: 16rem;">
						  <img src="./assets/images/${data.image}" class="card-img-top" alt="placeholder-image" height="100">
						  <div class="card-body">
							  <p class="card-text">${data.name}</p>
						  </div>
					  </div>
				  </div>`

	  const ele = document.createElement('div');
	  ele.innerHTML = card;
	  document.getElementById(divID).appendChild(ele.firstChild);
	})
}

generateCardCollection(frameworks, "card-collection");
*/
>>>>>>> 8ae13fc (update: Aidan js function and images selection)
