const isEvenOrOdd = (num) =>
{
    if (num % 2 == 0 )
    { 
        return `${num} is even`;
    }
    else if (num % 2 !== 0)
    {
        return `${num} is odd`;
    }
}

console.log(isEvenOrOdd(1));
console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(3));
console.log(isEvenOrOdd(0));