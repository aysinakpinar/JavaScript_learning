const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json())

app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log("Now listening on port", port);
});

app.get("/me", (req, res) => 
{
  const me = {"name": "Aysin"};
  res.send(me);
});

app.get("/cities", (req, res) =>
{
  const cities = {"cityList": ["Nairobi", "Tokyo", "Helsinki", "Berlin"]};
  res.send(cities);
});

app.get("/countries", (req, res) =>
{
  const countries = {"countriesList": [{ "country": "France", "language": "French", "id": 2 }, {"country": "Spain", "language": "Spanish", "id": 2}]};
  res.send(countries);
});

let hitCount = 0
app.get("/count", (req, res) =>
{
  hitCount++;
  res.send(`/count was hit ${hitCount} times.`);
});

let lastHitTime = null
app.get("/time", (req, res) =>
{
  lastHitTime = new Date().toLocaleTimeString();
  res.send(`The last hit was ${lastHitTime}.`);
});

