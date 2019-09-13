//they didnt say anything but having a default is always good

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "iunno?";

  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
