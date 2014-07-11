// <p>Move the above code into a separate JS file!
// <p>Add an event listener to the start button, so that the pet starts moving across 
// the screen when its clicked.
// <p>Add an event listener to the stop button, so that the pet stops moving when clicked.
// <p>Add an event listener to the speed button, so that the pet moves faster when 
// it's clicked.
// <p>When the pet reaches the edge of the screen, have her walk back to the start. 
// Repeat forever.
// <p>Make sure your code works even when the screen is resized (you will need to find the 
// 	window width with Javascript.
// <p>BONUS: When the pet reaches half way, have her stop and replace the image with a 
// dancing pet gif for a moment, then resume.

// element.setAttribute(name, value);
//     name is the name of the attribute as a string.
//     value is the desired new value of the attribute.

// clearInterval method
// Cancels the interval previously started using the setInterval method.
// Syntax
// var retval = window.clearInterval(timerID); 

	// var movePixels = 10;
	// var delayMs = 50;
	// var petTimer = null;

	// function petWalk() {
	// 	var img = document.getElementsById('blackpet');
	// 	var currentLeft = parseInt(img.style.left);
	// 	img.style.left = (currentLeft + movePixels) + 'px';
		
	// 	if (currentLeft > (window.innerWidth-img.width)) {
	// 		img.style.left = '0px';
	// 	}
	// }
	
	// function startpetWalk() {
	// 	catTimer = window.setInterval(catWalk, delayMs);
	// }

var corehound = document.getElementById('corehound');

corehound.style.position = 'absolute';
corehound.style.left = '0px';

var fromLeftIntervalID;
var fromRightIntervalID; 

function petWalkFromLeft() {
	var initialLeft = parseInt(corehound.style.left);
	var newLeft = initialLeft + 100;
	corehound.style.left = newLeft + 'px';

	// console.log(newLeft);

	if (newLeft > window.innerWidth) {
		// STOP GOING LEFT !
		window.clearInterval(fromLeftIntervalID);
		// Flip the CAT.
		corehound.setAttribute("class", "flip");
		// ask the cat to go RIGHT!
		fromRightIntervalID = window.setInterval(petWalkFromRight, 135);
	};
};

function petWalkFromRight() {
	var currentLeft = parseInt(corehound.style.left);
	var newRight = currentLeft - 100;
	corehound.style.left = newRight + 'px';

	console.log(corehound.style.left);

	if (newRight <= -600) {
		// Flip the pet.
		corehound.setAttribute("class", "");

		window.clearInterval(fromRightIntervalID)
		fromLeftIntervalID = window.setInterval(petWalkFromLeft, 135);
 	};
};

fromLeftIntervalID = window.setInterval(petWalkFromLeft, 135);



var moonkin = document.getElementById('corehound');

moonkin.style.position = 'absolute';
moonkin.style.left = '0px';

var fromLeftIntervalID;
var fromRightIntervalID; 

function petWalkFromLeft() {
	var initialLeft = parseInt(moonkin.style.left);
	var newLeft = initialLeft + 100;
	moonkin.style.left = newLeft + 'px';

	// console.log(newLeft);

	if (newLeft > window.innerWidth) {
		// STOP GOING LEFT !
		window.clearInterval(fromLeftIntervalID);
		// Flip the pet.
		corehound.setAttribute("class", "flip");
		// ask the pet to go RIGHT!
		fromRightIntervalID = window.setInterval(petWalkFromRight, 135);
	};
};

function petWalkFromRight() {
	var currentLeft = parseInt(moonkin.style.left);
	var newRight = currentLeft - 100;
	moonkin.style.left = newRight + 'px';

	console.log(moonkin.style.left);

	if (newRight <= -600) {
		// Flip the pet.
		moonkin.setAttribute("class", "");

		window.clearInterval(fromRightIntervalID)
		fromLeftIntervalID = window.setInterval(petWalkFromLeft, 135);
 	};
};

fromLeftIntervalID = window.setInterval(petWalkFromLeft, 135);