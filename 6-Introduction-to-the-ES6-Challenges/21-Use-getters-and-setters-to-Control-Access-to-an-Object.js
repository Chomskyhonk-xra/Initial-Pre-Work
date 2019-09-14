function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat{
  constructor(ftemp){
    this.temp = ((5.0/9.0) * (ftemp - 32.0));
  };
  get temp(){
    return this.temp;
  };
  set temp(newTemp){
    this.ctemp = newTemp;
  };
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
