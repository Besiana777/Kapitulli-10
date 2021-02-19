// Fig. 11.7: SearchingStrings.js
// Searching strings with indexOf and lastIndexOf.
var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";

function buttonPressed()
{
	var inputField = document.getElementById( "inputField" );

	document.getElementById( "results" ).innerHTML = 
	  "<P>First occurrence is located at index " +
	      letters.indexOf ( inputField.value ) + "</p>" +
	  "<p>Last occurrence is located at index " +
	      letters.indexOf( inputField.value ) + "</p>" +
	  "<P>First occurrence from index 12 is located at index " +
	      letters.indexOf( inputField.value, 12 ) + "</p>" +
	   "<p>Last occurrence form index 12 is located at index " +
	      letters.indexOf( inputField.value, 12 ) + "</p>" +
} // end function buttonPressed

// register click event handler for searchButton
function start()
{
	var searchButton = document.getElementById( "searchButton" );
	searchButton.addEventListener( "click", buttonPressed, false );
} // end function start

window.addEventListener( "load", start, false );
