//this is very dangerous, editing variables not local to a function without passing it through

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum+=5;
}


// Only change code above this line
var returnedValue = addFive();
