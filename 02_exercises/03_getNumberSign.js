const getNumberSign = (a) =>
{
    if (a > 0) 
    {
        return 'positive';
    }
    else if (a === 0)
    {
        return 'zero';
    }
    else 
    {
        return 'negative';
    }
}

module.exports = getNumberSign;
