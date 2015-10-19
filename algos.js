// max, min, avg
var yy = [1, 5, 10, -2];
var max=yy[0], min=yy[0], total = 0;
for (var i=0; i<yy.length; i++) {
	total+=yy[i];
	if (max<yy[i]){
		max = yy[i];
	}
	if (min>yy[i]){
		min = yy[i];
	}
}
var avg = total/yy.length
console.log(max, min, avg);




