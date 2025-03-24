const lowerCaseMessage = (message) => {
    return message.toLowerCase();
}

const transformMessage = (message, transformFunction) => 
{
    return transformFunction(message)
}

console.log(transformMessage('WHY ARE YOU SHOUTING?', lowerCaseMessage));

