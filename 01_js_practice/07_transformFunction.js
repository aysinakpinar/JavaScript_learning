const uppercaseMessage = (message) => {
    return message.toUpperCase();
}

const lowercaseMessage = (message) => 
{
    return message.toLowerCase();
}

  // This function accepts as arguments a string message, and a function.
  // It then calls the given function to do its job.
const transform = (message, transformFunction) => {
    return transformFunction(message);
}

console.log(transform("hello", uppercaseMessage));
console.log(transform("AYSIN", lowercaseMessage));
