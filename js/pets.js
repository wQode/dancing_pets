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

//////////////////////////// cat & baby moonkin dancing
// declaration for cat
var cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.right = '1000px';
var catFromLeftIntervalID;
var catFromRightIntervalID; 

// declaration for babyMoonkin
var babyMoonkin = document.getElementById('babyMoonkin');
babyMoonkin.style.position = 'absolute';
babyMoonkin.style.right = '1000px';
babyMoonkin.style.top = '15px';
var babyMoonkinFromLeftIntervalID;
var babyMoonkinFromRightIntervalID; 

// function for cat & babyMoonkin to walk from right
function caboWalkFromRight() {
	var catCurrentLeft = parseInt(cat.style.left);
	var catNewRight = catCurrentLeft - 30;
	cat.style.left = catNewRight + 'px';

	var babyMoonkinCurrentLeft = parseInt(babyMoonkin.style.left);
	var babyMoonkinNewRight = babyMoonkinCurrentLeft - 30;
	babyMoonkin.style.left = babyMoonkinNewRight + 'px';

	if ((catNewRight <= -200 ) && (babyMoonkinNewRight <= -200)) {
		// Stop walking towards left
		window.clearInterval(catFromRightIntervalID);
		window.clearInterval(babyMoonkinFromRightIntervalID);
		// Call function for pets to walk towards right
		catFromLeftIntervalID = window.setInterval(caboWalkFromLeft, 400);
		babyMoonkinFromLeftIntervalID = window.setInterval(caboWalkFromLeft, 400);
	};
};
// function for cat & babyMoonkin to walk from left
function caboWalkFromLeft() {
	var catInitialLeft = parseInt(cat.style.left);
	var catNewLeft = catInitialLeft + 30;
	cat.style.left = catNewLeft + 'px';

	var babyMoonkinInitialLeft = parseInt(babyMoonkin.style.left);
	var babyMoonkinNewLeft = babyMoonkinInitialLeft + 30;
	babyMoonkin.style.left = babyMoonkinNewLeft + 'px';

	if ((catNewLeft > window.innerWidth) && (babyMoonkinNewLeft > window.innerWidth)) {
		// Stop walking towards right
		window.clearInterval(catFromLeftIntervalID)
		window.clearInterval(babyMoonkinFromLeftIntervalID)
		// Call function for pets to walk towards left
		catFromRightIntervalID = window.setInterval(caboWalkFromRight, 300);
		babyMoonkinFromRightIntervalID = window.setInterval(caboWalkFromRight, 300);
 	};
};

catFromRightIntervalID = window.setInterval(caboWalkFromRight, 400);
babyMoonkinFromRightIntervalID = window.setInterval(caboWalkFromRight, 400);

//////////////////////////// corehound pet walking
// declaration for corehound
var corehound = document.getElementById('corehound');
corehound.style.position = 'absolute';
corehound.style.left = '0px';
corehound.style.top = '50px'
var corehoundFromLeftIntervalID;
var corehoundFromRightIntervalID; 

// declaration for boomkin
var boomkin = document.getElementById('boomkin');
boomkin.style.position = 'absolute';
boomkin.style.left = '-50px';
boomkin.style.top = '220px'
var boomkinFromLeftIntervalID;
var boomkinFromRightIntervalID; 

// function for cat & babyMoonkin to walk from left
function coboWalkFromLeft() {
	var corehoundInitialLeft = parseInt(corehound.style.left);
	var corehoundNewLeft = corehoundInitialLeft + 50;
	corehound.style.left = corehoundNewLeft + 'px';

	var boomkinInitialLeft = parseInt(boomkin.style.left);
	var boomkinNewLeft = boomkinInitialLeft + 50; 
	boomkin.style.left = boomkinNewLeft + 'px';

	if ((corehoundNewLeft > window.innerWidth) && (boomkinNewLeft > window.innerWidth)) {
		// Stop walking towards right
		window.clearInterval(corehoundFromLeftIntervalID);
		window.clearInterval(boomkinFromLeftIntervalID);
		// Flip the pets
		corehound.setAttribute("class", "flip");
		boomkin.setAttribute("class", "flip");
		// Pets start walking towards left
		corehoundFromRightIntervalID = window.setInterval(coboWalkFromRight, 350);
		boomkinFromRightIntervalID = window.setInterval(coboWalkFromRight, 350);
	};
};

function coboWalkFromRight() {
	var corehoundCurrentLeft = parseInt(corehound.style.left);
	var corehoundNewRight = corehoundCurrentLeft - 50;
	corehound.style.left = corehoundNewRight + 'px';

	var boomkinCurrentLeft = parseInt(boomkin.style.left);
	var boomkinNewRight = boomkinCurrentLeft - 50;
	boomkin.style.left = boomkinNewRight + 'px';

	if ((corehoundNewRight <= -200) && (boomkinNewRight <= -200)) {
		// Re-flip the pets
		corehound.setAttribute("class", "");
		boomkin.setAttribute("class", "");
		// Stop walking towards left and walk towards right
		window.clearInterval(corehoundFromRightIntervalID)
		window.clearInterval(boomkinFromRightIntervalID)
		corehoundFromLeftIntervalID = window.setInterval(coboWalkFromLeft, 350);
		boomkinFromLeftIntervalID = window.setInterval(coboWalkFromLeft, 350);
 	};
};

corehoundFromLeftIntervalID = window.setInterval(coboWalkFromLeft, 360);
boomkinFromLeftIntervalID = window.setInterval(coboWalkFromLeft, 360);
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

//////////////////////////// murloc pet walking
// declaration for murloc
var murloc = document.getElementById('murloc');
murloc.style.position = 'absolute';
murloc.style.left = '0px';
murloc.style.top = '600px';
var murlocFromLeftIntervalID;
var murlocFromRightIntervalID; 

// declaration for hordeBoomkin
var hordeBoomkin = document.getElementById('hordeBoomkin');
hordeBoomkin.style.position = 'absolute';
hordeBoomkin.style.left = '10px';
hordeBoomkin.style.top = '550px';
var hordeBoomkinFromLeftIntervalID;
var hordeBoomkinFromRightIntervalID; 

// functinon for murloc and hordeboomkin to walk from left to right whilst 
// slighty walking upwards plus flip when reached the ends of the window
function muhoWalkFromLeft() {
	var murlocInitialLeft = parseInt(murloc.style.left);
	var murlocNewLeft = murlocInitialLeft + 50;
	murloc.style.left = murlocNewLeft + 'px';
	var murlocInitialTop = parseInt(murloc.style.top);
	var murlocNewTop = murlocInitialTop + 0.5;
	murloc.style.top = murlocNewTop + 'px';

	var hordeBoomkinInitialLeft = parseInt(hordeBoomkin.style.left);
	var hordeBoomkinNewLeft = hordeBoomkinInitialLeft + 55;
	hordeBoomkin.style.left = hordeBoomkinNewLeft + 'px';
	var hordeBoomkinInitialTop = parseInt(hordeBoomkin.style.top);
	var hordeBoomkinNewTop = hordeBoomkinInitialTop + 0.5;
	hordeBoomkin.style.top = hordeBoomkinNewTop + 'px';

	if (murlocNewLeft > window.innerWidth) {
		// Pets stop heading right
		window.clearInterval(murlocFromLeftIntervalID);
		window.clearInterval(hordeBoomkinFromLeftIntervalID);
		// Flip pets
		murloc.setAttribute("class", "flip");
		hordeBoomkin.setAttribute("class", "flip");
		// Call function for pets to starting walking towards left
		murlocFromRightIntervalID = window.setInterval(muhoWalkFromRight, 350);
		hordeBoomkinFromRightIntervalID = window.setInterval(muhoWalkFromRight, 350);
	};
};

function muhoWalkFromRight() {
	var murlocCurrentLeft = parseInt(murloc.style.left);
	var murlocNewRight = murlocCurrentLeft - 30;
	murloc.style.left = murlocNewRight + 'px';
	var murlocInitialTop = parseInt(murloc.style.top);
	var murlocNewTop = murlocInitialTop - 0.5;
	murloc.style.top = murlocNewTop + 'px';

	var hordeBoomkinCurrentLeft = parseInt(hordeBoomkin.style.left);
	var hordeBoomkinNewRight = hordeBoomkinCurrentLeft - 35;
	hordeBoomkin.style.left = hordeBoomkinNewRight + 'px';
	var hordeBoomkinInitialTop = parseInt(hordeBoomkin.style.top);
	var hordeBoomkinNewTop = hordeBoomkinInitialTop - 0.5;
	hordeBoomkin.style.top = hordeBoomkinNewTop + 'px';

	if (murlocNewRight <= -300) {//&& (hordeBoomkinNewRight <= 0)) {
		// Flip the pets
		murloc.setAttribute("class", "");
		hordeBoomkin.setAttribute("class", "");
		// Call the funcions to start pets walking towards left
		window.clearInterval(murlocFromRightIntervalID)
		window.clearInterval(hordeBoomkinFromRightIntervalID)
		murlocFromLeftIntervalID = window.setInterval(muhoWalkFromLeft, 350);
		hordeBoomkinFromLeftIntervalID = window.setInterval(muhoWalkFromLeft, 350);
 	};
};

murlocFromLeftIntervalID = window.setInterval(muhoWalkFromLeft, 350);
hordeBoomkinFromLeftIntervalID = window.setInterval(muhoWalkFromLeft, 350);

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

