var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayOne(fruit,vegetables) {

  vegetables.pop();                       
  fruit.shift();
  fruit.push(fruit.indexOf("orange"));
  vegetables.push(vegetables.length);
  var food = fruit.concat(vegetables);
  food.splice(4, 2);
  food.reverse();

  return food.toString();
}


console.log(arrayOne(fruit, vegetables));


