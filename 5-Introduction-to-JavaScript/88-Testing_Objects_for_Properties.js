//hasOwnProperty is a function for objects

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }
  return "Not Found"
}

// Test your code by modifying these values
checkObj("gift");
