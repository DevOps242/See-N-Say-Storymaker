// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

// Five Arrays for Story Button Words
let subject = ['the turkey', 'Mom', 'Dad', 'The Dog', 'My teacher', 'The elephant'];
let verb = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed' ];
let adjective = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let thing = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let place = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

//  This will loop over every element in the subject array and console log.
subject.forEach($item => {
	console.log($item);
})

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
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
