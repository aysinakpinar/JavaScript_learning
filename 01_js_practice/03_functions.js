const printMessage1 = () => 
    {
        console.log("Hi there");
    }    
    printMessage1();
    
const printMessage2 = (message) => 
    {
        console.log(message);
    } 
    printMessage2("Hello there");
    
const getName = () => 
    {
        return 'Aysin';
    }
    console.log(getName());
    
    
const returnFour = () => 
    {
        return 4;
    } 
    const something = returnFour();
    console.log(something);
    
const hello = () =>
    {
        console.log('Hello!');
    }
    
module.exports = 
    {
        hello,
        printMessage2,
        printMessage1,
        getName
    };