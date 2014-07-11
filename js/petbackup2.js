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



