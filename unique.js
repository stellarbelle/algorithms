// Given a string, return the index of the first unique character. (Ex: Given "google", return 4


var str = "foodie"
var letters = str.split("");
var idx = 0

for(var i = 0; i < letters.length; i++){
	for (var j = 1; j < letters.length; j++){
		if (letters[i] != letters[j]){
			idx = j;
		} 
	}
}
console.log(idx)
