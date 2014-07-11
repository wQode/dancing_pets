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

//////////////////////////// cat dancing

var cat = document.getElementById('cat');

cat.style.position = 'absolute';
cat.style.right = '1000px';

var catFromLeftIntervalID;
var catFromRightIntervalID; 

function catWalkFromRight() {
	var currentLeft = parseInt(cat.style.left);
	var newRight = currentLeft - 80;
	cat.style.left = newRight + 'px';

	if (newRight <= -600 ) {
		// STOP GOING LEFT !
		window.clearInterval(catFromRightIntervalID);
		// Flip the pet.
		// cat.setAttribute("class", "flip");
		// ask the pet to go RIGHT!
		catFromLeftIntervalID = window.setInterval(catWalkFromLeft, 200);
	};
};

function catWalkFromLeft() {
	var initialLeft = parseInt(cat.style.left);
	var newLeft = initialLeft + 100;
	cat.style.left = newLeft + 'px';


	if (newLeft > window.innerWidth) {
		// Stop going left
		window.clearInterval(catFromLeftIntervalID)
		//Flip pet
		// cat.setAttribute("class", "flip");

		catFromRightIntervalID = window.setInterval(catWalkFromRight, 200);
 	};
};

catFromRightIntervalID = window.setInterval(catWalkFromRight, 200);

//////////////////////////// corehound pet walking

var corehound = document.getElementById('corehound');

corehound.style.position = 'absolute';
corehound.style.left = '0px';

var corehoundFromLeftIntervalID;
var corehoundFromRightIntervalID; 

function corehoundWalkFromLeft() {
	var initialLeft = parseInt(corehound.style.left);
	var newLeft = initialLeft + 100;
	corehound.style.left = newLeft + 'px';

	// console.log(newLeft);

	if (newLeft > window.innerWidth) {
		// STOP GOING LEFT !
		window.clearInterval(corehoundFromLeftIntervalID);
		// Flip the CAT.
		corehound.setAttribute("class", "flip");
		// ask the cat to go RIGHT!
		corehoundFromRightIntervalID = window.setInterval(corehoundWalkFromRight, 160);
	};
};

function corehoundWalkFromRight() {
	var currentLeft = parseInt(corehound.style.left);
	var newRight = currentLeft - 100;
	corehound.style.left = newRight + 'px';

	// console.log(corehound.style.left);

	if (newRight <= -600) {
		// Flip the pet.
		corehound.setAttribute("class", "");

		window.clearInterval(corehoundFromRightIntervalID)
		corehoundFromLeftIntervalID = window.setInterval(corehoundWalkFromLeft, 160);
 	};
};

corehoundFromLeftIntervalID = window.setInterval(corehoundWalkFromLeft, 160);
//////////////////////////// change corehound image on hover
var audio = new Audio('http://upload.wikimedia.org/wikipedia/commons/8/88/State_of_the_Union_Address_%28January_25%2C_2011%29_Barack_Obama_%28WhiteHouse.gov%29.ogg');

function makeChange() {
        if (corehound.src == "http://www.abload.de/img/animation2dirzc7.gif") 
        {
            corehound.src = "http://www.petbattlearena.com/img/pic493.png";
        }
        else 
        {
            corehound.src = "http://www.abload.de/img/animation2dirzc7.gif";
        }

		audio.play();
};

function stopMusic() {
	audio.pause();
}

corehound.addEventListener("mouseenter", makeChange);
corehound.addEventListener("mouseout", stopMusic);

// var corehoundStop = document.getElementById('corehound');
// corehoundStop.addEventListener('click', coreHoundStopWalk)  
//////////////////////////// boomkin pet walking

var boomkin = document.getElementById('boomkin');

boomkin.style.position = 'absolute';
boomkin.style.left = '0px';

var boomkinFromLeftIntervalID;
var boomkinFromRightIntervalID; 

function boomkinWalkFromLeft() {
	var initialLeft = parseInt(boomkin.style.left);
	var newLeft = initialLeft + 100; 
	boomkin.style.left = newLeft + 'px';

	// console.log(newLeft);

	if (newLeft > window.innerWidth) {
		// STOP GOING LEFT !
		window.clearInterval(boomkinFromLeftIntervalID);
		// Flip the CAT.
		boomkin.setAttribute("class", "flip");
		// ask the cat to go RIGHT!
		boomkinFromRightIntervalID = window.setInterval(boomkinWalkFromRight, 160);
	};
};

function boomkinWalkFromRight() {
	var currentLeft = parseInt(boomkin.style.left);
	var newRight = currentLeft - 110;
	boomkin.style.left = newRight + 'px';

	// console.log(boomkin.style.left);

	if (newRight <= -600) {
		// Flip the pet.
		boomkin.setAttribute("class", "");

		window.clearInterval(boomkinFromRightIntervalID)
		boomkinFromLeftIntervalID = window.setInterval(boomkinWalkFromLeft, 160);
 	};
};

boomkinFromLeftIntervalID = window.setInterval(boomkinWalkFromLeft, 160);

//////////////////////////// babyMoonkin pet walking

var babyMoonkin = document.getElementById('babyMoonkin');

babyMoonkin.style.position = 'absolute';
babyMoonkin.style.right = '800px';

var babyMoonkinFromLeftIntervalID;
var babyMoonkinFromRightIntervalID; 

function babyMoonkinWalkFromRight() {
	var currentLeft = parseInt(babyMoonkin.style.left);
	var newRight = currentLeft - 80;
	babyMoonkin.style.left = newRight + 'px';

	if (newRight <= -600 ) {
		// STOP GOING LEFT !
		window.clearInterval(babyMoonkinFromRightIntervalID);
		// Flip the pet.
		// babyMoonkin.setAttribute("class", "flip");
		// ask the pet to go RIGHT!
		babyMoonkinFromLeftIntervalID = window.setInterval(babyMoonkinWalkFromLeft, 200);
	};
};

function babyMoonkinWalkFromLeft() {
	var initialLeft = parseInt(babyMoonkin.style.left);
	var newLeft = initialLeft + 100;
	babyMoonkin.style.left = newLeft + 'px';


	if (newLeft > window.innerWidth) {
		// Stop going left
		window.clearInterval(babyMoonkinFromLeftIntervalID)
		//Flip pet
		// babyMoonkin.setAttribute("class", "flip");

		babyMoonkinFromRightIntervalID = window.setInterval(babyMoonkinWalkFromRight, 200);
 	};
};

babyMoonkinFromRightIntervalID = window.setInterval(babyMoonkinWalkFromRight, 200);

//////////////////////////// murloc pet walking

var murloc = document.getElementById('murloc');

murloc.style.position = 'absolute';
murloc.style.left = '0px';
murloc.style.top = '1350px';

// var hordeBoomkin = document.getElementById('hordeBoomkin');

// hordeBoomkin.style.position = 'absolute';
// hordeBoomkin.style.left = '300px';
// hordeBoomkin.style.top = '1350px';

var murlocFromLeftIntervalID;
var murlocFromRightIntervalID; 

// var hordeBoomkinFromLeftIntervalID;
// var hordeBoomkinFromRightIntervalID; 

function murlocWalkFromLeft() {
	var initialLeft = parseInt(murloc.style.left);
	var newLeft = initialLeft + 190;
	murloc.style.left = newLeft + 'px';

	var initialTop = parseInt(murloc.style.top);
	var newTop = initialTop + 10;
	murloc.style.top = newTop + 'px';

	if (newLeft > window.innerWidth) {
		// Murloc stop heading right
		window.clearInterval(murlocFromLeftIntervalID);
		// Flip the murloc
		murloc.setAttribute("class", "flip");
		// Murloc is heading left now
		murlocFromRightIntervalID = window.setInterval(murlocWalkFromRight, 180);
	};
};

function murlocWalkFromRight() {
	var currentLeft = parseInt(murloc.style.left);
	var newRight = currentLeft - 100;
	murloc.style.left = newRight + 'px';

	var initialTop = parseInt(murloc.style.top);
	var newTop = initialTop - 10;
	murloc.style.top = newTop + 'px';

	if (newRight <= 0) {
		// Flip the pet.
		murloc.setAttribute("class", "");

		window.clearInterval(murlocFromRightIntervalID)
		murlocFromLeftIntervalID = window.setInterval(murlocWalkFromLeft, 180);
 	};
};

murlocFromLeftIntervalID = window.setInterval(murlocWalkFromLeft, 180);



//////////////////////////// hordeBoomkin pet fallin

var hordeBoomkin = document.getElementById('hordeBoomkin');

hordeBoomkin.style.position = 'absolute';
hordeBoomkin.style.left = '300px';
hordeBoomkin.style.top = '1350px';

var hordeBoomkinFromLeftIntervalID;
var hordeBoomkinFromRightIntervalID; 

function hordeBoomkinWalkFromLeft() {
	var initialLeft = parseInt(hordeBoomkin.style.left);
	var newLeft = initialLeft + 190;
	hordeBoomkin.style.left = newLeft + 'px';

	var initialTop = parseInt(hordeBoomkin.style.top);
	var newTop = initialTop + 10;
	hordeBoomkin.style.top = newTop + 'px';

	if (newLeft > window.innerWidth) {
		// hordeBoomkin stop heading right
		window.clearInterval(hordeBoomkinFromLeftIntervalID);
		// Flip the hordeBoomkin
		hordeBoomkin.setAttribute("class", "flip");
		// hordeBoomkin is heading left now
		hordeBoomkinFromRightIntervalID = window.setInterval(hordeBoomkinWalkFromRight, 180);
	};
};

function hordeBoomkinWalkFromRight() {
	var currentLeft = parseInt(hordeBoomkin.style.left);
	var newRight = currentLeft - 100;
	hordeBoomkin.style.left = newRight + 'px';

	var initialTop = parseInt(hordeBoomkin.style.top);
	var newTop = initialTop - 10;
	hordeBoomkin.style.top = newTop + 'px';

	if (newRight <= 0) {
		// Flip the pet.
		hordeBoomkin.setAttribute("class", "");

		window.clearInterval(hordeBoomkinFromRightIntervalID)
		hordeBoomkinFromLeftIntervalID = window.setInterval(hordeBoomkinWalkFromLeft, 180);
 	};
};

hordeBoomkinFromLeftIntervalID = window.setInterval(hordeBoomkinWalkFromLeft, 180);

//////////////////////////// horde falling

var horde = document.getElementById('horde');

horde.style.position = 'absolute';
horde.style.left = '1900px';
horde.style.top = '1350px';

var hordeFromBottomIntervalID;
var hordeFromTopIntervalID; 

function hordeWalkFromBottom() {
	// var initialLeft = parseInt(horde.style.left);
	// var newLeft = initialLeft + 190;
	// horde.style.left = newLeft + 'px'

	var initialTop = parseInt(horde.style.top);
	var newTop = initialTop + 10;
	horde.style.top = newTop + 'px';

	if (newTop > 900) {
		// horde stop heading right
		window.clearInterval(hordeFromBottomIntervalID);
		// horde is heading left now
		hordeFromTopIntervalID = window.setInterval(hordeWalkFromTop, 180);
	};
};

function hordeWalkFromTop() {
	// var currentLeft = parseInt(horde.style.left);
	// var newRight = currentLeft - 100;
	// horde.style.left = newRight + 'px';
	var initialTop = parseInt(horde.style.top);
	var newTop = initialTop - 10;
	horde.style.top = newTop + 'px';

	if (newTop <= 0) {
		// Flip the pet.
		horde.setAttribute("class", "");

		window.clearInterval(hordeFromTopIntervalID)
		hordeFromBottomIntervalID = window.setInterval(hordeWalkFromBottom, 180);
 	};
};

hordeFromBottomIntervalID = window.setInterval(hordeWalkFromBottom, 180);

//////////////////////////// music on hover
// function PlaySound(soundobj) {
//     var thissound=document.getElementById(soundobj);
//     thissound.play();
// }

// function StopSound(soundobj) {
//     var thissound=document.getElementById(soundobj);
//     thissound.pause();
//     thissound.currentTime = 0;
// }

