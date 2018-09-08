//Temperature conditional

var temperature = false;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
}
else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
}
else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");



//Voter Age Conditional

var isCitizen = true;
var age = 20;


if (isCitizen && age > 18) {

  console.log("You are eligible to vote.");

};

//Temperature with logical operators

var newTemperature = -45;

if (newTemperature < -40 || newTemperature > 40) {

  console.log("Maybe going outside isn't such a great idea...");

};

var raining = false

if (!raining) {

  console.log ("Leave your umbrella at home!");

};