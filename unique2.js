
var unique = [];
var word = "mississippi";

for (var i = 0; i < word.length; i++){
	for (var j = 0; j < unique.length; j++) {
		if (word[i] != word[j]) {
			unique.push(word[i]);
		}
	}
}
console.log(unique)