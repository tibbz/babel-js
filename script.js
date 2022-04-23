//pre ES-6

function add(num1, num2) {
  return num1 + num2;
}

//ES6 (implicit return)
const addImplicit = (num1, num2) => num1 + num2;

console.log(add(3, 4));
console.log(addImplicit(3, 4));
