const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json())

app.use(cors());

app.get("/continents", (req, res) => {
    const data = {"continents": ["Asia", "Africa", "Europe", "North America", "South America", "Antarctica", "Australia"]};
    res.send(data);
});

const countriesList = [
    { country: "France", language: "French", id: "1" }, 
    {country: "Spain", language: "Spain", id: 2}
    ]

app.get("/countries/:id", (req, res) =>
    {
        const { id }  = req.params;
        const country = countriesList.find(c => c.id === id);
        data = res.json(country);
        return data
    })

module.exports = app;