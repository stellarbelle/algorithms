msg = 'codingdojo';
for(var x = -2; x < msg.length - 3; x++){
  if(msg.length == 3){
    for(var i = 2; i < 3; i++){
      console.log(i);
    }
  } else {
    for(var i = msg.length; i > (msg.length - 1); i--){
      console.log(i);
    }
  }
}
