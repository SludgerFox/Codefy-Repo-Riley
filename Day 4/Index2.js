alert("Check The Console Log For The Answer Of How Many True Values There Are");
let true1 = 0;
const numbers = [true, true, false, true, false];
numbers.forEach(myFunction);

function myFunction(item) {
  if(item == true){
    true1++;
  }
}
setTimeout(logValue(), 5000);

function logValue(){
    console.log(true1 + " True Values");
}