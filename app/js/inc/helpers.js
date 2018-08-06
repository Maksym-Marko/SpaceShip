// This feature helps to pass each property of an object
function eachObjProps( obj, callback ){
	var length, i = 0;
	
	for ( i in obj ) {
		if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
			break;
		}
	}

	return obj;
}
