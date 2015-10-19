//Create a function called replace_string that does exactly what the replace function does in Javascript. 

function replace_string (word, replace, str) {
	var arr = [];
	var start = 0;
	while (start<str.length){
		var start = str.indexOf(word);
		var stop = start + word.length;
		arr.push(str.substring(start, stop));
		start += 1;
	}
	return arr
}

console.log(replace_string("cheese", "coffee", "I like cheese"))

