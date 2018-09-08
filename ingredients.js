var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("Ingredients List:");
i = 0
while (i < 8) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("Ingredients List:");
for (var i = 0; i < 8; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Ingredients List:");
for (var i = 7; i > -1; i--){
  console.log(ingredients[i]);
}