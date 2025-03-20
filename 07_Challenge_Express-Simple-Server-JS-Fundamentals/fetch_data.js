const fetchMyName = async () => {
    try {
        const response = await fetch('http://localhost:3000/me');
        
        if (!response.ok) {
            throw new Error("Invalid response from the server");
        }

        const nameData = await response.json()

        console.log(nameData);

        return nameData;
    } catch(error) {
        console.log(error)
    }
}
const fetchCities = async () =>
{
    try {
        response = await fetch('http://localhost:3000/cities');
        if (!response.ok) {
            throw new Error("Invalid response from the server");
        };
        const citiesData = await response.json();
        console.log(citiesData);
        return citiesData;

    } catch(error) {
        console.log(error)
    }
}

const fetchCountries = async () =>
{
    try{
        response = await fetch('http://localhost:3000/countries');
        if (!response.ok) {
            throw new Error("Invalid response from the server");
        };
        const countriesData = await response.json();
        console.log(countriesData);
        return countriesData;

    } catch(error) {
        console.log(error);
    }
}
fetchMyName();
fetchCities();
fetchCountries();