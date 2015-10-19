// Given a N different open and close braces in a string "( { [ } ] )", check whether the string has matching braces. Return true if the braces match, false otherwise.
function braces(str){
  var last = str.length -1;
  for (var i=0; i<str.length/2; i++) {
    switch (str[i]){
      case "{":
        if (str[last]!="}"){
          return false;
        }
          break;
      case "(":
        if (str[last]!=")"){
          return false;
        }
          break;
      case "[":
        if (str[last]!="]"){
          return false;
        }
          break;
      default:
        return false;
    }
    last-=1;
  }
  return true;
};

console.log(braces("({[()]})"));
console.log(braces("({{[}})"))
console.log(braces("({ppp})"))
