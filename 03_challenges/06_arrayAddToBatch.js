const addToBatch = (batch, number) => 
{
    if (batch.length >= 5)
    {
        return batch
    }
    else
    {
        return batch.concat(number);
    }
}
module.exports = addToBatch;