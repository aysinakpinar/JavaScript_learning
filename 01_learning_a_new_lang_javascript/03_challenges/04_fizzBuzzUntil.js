const fizzBuzzUntil = (number) =>
    { fizzBuzzList = [];
        for (let i = 1; i <= number; i++)
        {
            if (i % 15 === 0)
            {
                fizzBuzzList.push('FizzBuzz');
            } 
            else if (i % 3 === 0)
            {
                fizzBuzzList.push('Fizz');
            } 
            else if (i % 5 === 0 ) 
            {
                fizzBuzzList.push('Buzz');
            } 
            else
            {
                fizzBuzzList.push(i);
            }
        }
        return `\n${fizzBuzzList.join("\n")}`;
    }
    console.log(fizzBuzzUntil(10));