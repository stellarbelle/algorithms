//Create a function called split2 that does exactly what the split function does in Javascript

function split2 (splitOn, str) {
	var arr = [];
	var start = 0;
	while (start<str.length){
		var stop = str.indexOf(splitOn, start);
		arr.push(str.substring(start, stop));
		start = stop + 1;
	}
	return arr
}

console.log(split2(" ", "I like cheese"))

