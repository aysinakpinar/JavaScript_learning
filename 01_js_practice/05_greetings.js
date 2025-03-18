const createGreeting = (name) => {
  return `Hello ${name}!`;
};

const createCowboyGreeting = (name) => {
  return `Howdy ${name}!`;
};

// We have edited this function to take a second argument, which is the
// greeting function. This allows us to use any greeting we like with it,
// like we have done below with the cowboy and christmas greetings.
function createAllGreetings(names, greetingFn) {
  const greetings = [];

  for (let i = 0; i < names.length; i++) {
    const greeting = greetingFn(names[i]);
    greetings.push(greeting);
  }

  return `Here are all the greetings:\n${greetings.join("\n")}`;
}

const names = ["John", "Eddie", "Claire", "Kerry"];

const allGreetings = createAllGreetings(names, createGreeting);
const allCowboyGreetings = createAllGreetings(names, createCowboyGreeting);

// We can also define the function in-line, meaning we don't give it a name
// first. It is known as an anonymous function.
const allXmasGreetings = createAllGreetings(
  names,
  (name) => `Merry Xmas ${name}`
);

console.log(allCowboyGreetings);
console.log(allCowboyGreetings);
console.log(allXmasGreetings);

// Anonymous functions are used to keep code concise.
let strings = [1, 2, 3].map((n) => n.toString());
// equal to
let numberToString = (n) => n.toString();
let strings2 = [1, 2, 3].map(numberToString);