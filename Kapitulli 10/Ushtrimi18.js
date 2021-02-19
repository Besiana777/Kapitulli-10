// Fig. 10.21: InitArray3.js
// Initializing multidimensional arrays.
function start()
{
	var array1 = [ [ 1, 2, 3 ], // row 0
	               [ 4, 5, 6 ] ]; // row 1
	var array2 = [ [ 1, 2], // row 0
	               [ 3 ], // row 1 
	               [ 4, 5, 6 ] ]; // row 2

	outputAray( "Values in array1 by row", array1,
		document.getElementById( "output1" ) );
	outputAray( "Values in array2 by row", array2,
		document.getElementById( "output2" ) );
} // end function start

// display array contents
function outputArray( heading, theArray, output )
{
	var results = "";

	// iterates through the set of one-dimensional arrays
	for ( var row in theArray )
	{
		results += "<ol>"; // start oredered list

		// iterates through the elements of each one-dimensional array
		for ( var column in theArray[ row ] )
		{
			results += "<li>" + theArray[ row ] [ column ] + "</li>";
		} // end inner for

		results += "</ol>"; // emnd ordered list
	} // end outer for

	output.innerHTML = results;
} // end function outputArray

window.addEventListener( "load", start, false );