// Fig. 10.12: RandomPicture2.js
// Random image selection using arrays
var iconImg;
var pictures = [ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO" ];
var descriptions = [ "Common Programming Error",
    "Error-Pervention Tip", "Good Programming Practice",
    "Look-and-Feel Observation", "Performance Tip", "Portability Tip",
    "Software Engineering Observation" ];

// pick a random image and correspoding descripition, then modify
// the img element in the document's body
function pickImage()
{
	var index = Math.floor( Math.random() * 7 );
	iconImg.setAttribute( "src", pictures[ index ] + ".png" );
	iconImg.setAttribute( "alt", descriptions[ index ] );  
} // end function pickImage

// registers iconImg's click event handler
function start()
{
	iconImg = document.getElementById( "iconImg" );
	iconImg.andEventListener( "click", pickImage, false );
} // end function start

window.addEventListener( "load", start, false );