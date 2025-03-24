const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];

const generateMessage = (namesAndDiscount) =>
    {
        return `Hi ${namesAndDiscount.name}! ${namesAndDiscount.discount}% off our best candies for you today!`
    }
    
    const generateMessages = (namesAndDiscounts) =>
    {
        return namesAndDiscounts.map(generateMessage);
    }
    
    module.exports = generateMessages;