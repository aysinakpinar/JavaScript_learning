const fetchCatAtIndex = async (index) => {
    try {
        if(typeof(index) !== "number") { 
            throw new Error("Index must be a number"); 
        }

        const response = await fetch("http://localhost:3000/cats");
        const catData = await response.json();

        if(index > catData.catsArray.length - 1){
            throw new Error("No cat was found that that index")
        }

        const cat = catData.catsArray[index];

        return cat; 
    } catch (error) { 
        throw error; 
    }
}
module.exports = fetchCatAtIndex;