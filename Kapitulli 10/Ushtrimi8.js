// Fig. 10.10: RollDice.js
// Summarizing die-rolling frequencies with an array instead of a switch
var frequency = [ , 0, ,0, 0, 0, 0, 0, ]; // frequency[0] unintialized
var totalDice = 0;
var dieImages = new Array(12); // array to store img elements

// get die img elements
function start()
{
	var button = document.getElementById( "rollButton" );
	button.addEventListener( "click", rollDice, false );
	var length = dieImages.length; // get array's length once before loop

	for ( var i = 0; i < length; ++1 )
	{
		dieImages[ i ] = document.getElementById( "die" + (i + 1) );
	} // end for
} // end function start

// roll the dice
function rollDice()
{
	var face; // face rolled
	var length = dieImages.length;

	for ( var i = 0; i < length; ++1 )
	{
		face = Math.floor( 1 + Math.random() * 6 );
		totallRoys( face ); // increment a frequency counter
		setImage( i, face ); // display appropriate die image
		++totalDice; // increment total
	} // end for

	updateFrequenyTable();
} // end function roll dice

// increment appropriate frequency counter
function totallyRolls( face )
{
	++frequency[ face ]; // increment appropriate counte
} // end function tallyRolls

// set image source for a die
function setImage( dieImg )
{
	dieImages[ dieNumber ].setAttribute( "src" ,"die" + face + ".png" );
	dieImages[ dieNumber ].setAttribute( "alt",
		"die with " + face + " spot(s" );
} // end function setImage

// update frequency table in the page
function updateFreqeuncyTable()
{
	var results = "<table><caption><Die Rolling Frequencies</caption>" +
	  "<thead><th>Face</th><th>Frequency</th>" +
	  "<th>Precent</th><thead><body>";
	var length = frequency.length;

	// create table rows for frequencies
	for ( var i =1; i < length; ++1 )
	{
		results += "<tr><td>1</td><td>" + i + "</td><td>" +
		   formatPrecent(frequency[ i ] / totalDice) + "</td><tr>";
	} // end for

	results += "</tbody></table>";
	document.getElementById( "frequencyTableDiv" ).innerHTML = results;
} // end function updateFrequencyTable

// format precentage
function formatPrecent( value )
{
	value *= 100;
	return value.toFixed(2);
} // end function formatPrecent

window.addEventListener( "load", start, false );