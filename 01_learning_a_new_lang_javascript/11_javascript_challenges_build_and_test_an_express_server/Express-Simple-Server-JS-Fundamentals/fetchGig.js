const fetchGigs = async (url = "http://localhost:3000/gigs") =>
{ 
    try{
        const response = await fetch(url)
        if(!response.ok)
        {
            throw new Error("Invalid response from the server")
        }
        const data = await response.json()
        return data
        } 
    catch(error)
        {
            throw error;
        }
}

const fetchGig = async (id) =>
    {
        const response = await fetch(`http://localhost:3000/gigs/${id}`);
        if (!response.ok)
            {
                throw new Error(`Gig not found: ${id}`)
            }
        const data = await response.json();
        return data
    }

module.exports = { fetchGigs, fetchGig };