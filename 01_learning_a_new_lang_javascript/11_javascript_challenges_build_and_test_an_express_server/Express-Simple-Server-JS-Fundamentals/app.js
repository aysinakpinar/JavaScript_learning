const express = require("express");
const cors = require("cors");

const app = express(); //This creates our web application 

app.use(express.json())
app.use(cors()); //This application should allow requests from different domains 

let gigs = [
    {
      id: 1,
      name: "Metallica - M72 World Tour",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Metallica_at_The_O2_Arena_London_2008.jpg",
      description: "Metallica's M72 World Tour brings their legendary thrash metal sound to fans worldwide.",
      date: new Date("2025-06-15").toISOString(),
      location: "Wembley Stadium, London, UK"
    },
    {
      id: 2,
      name: "In Flames - Foregone Tour",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/55/In_Flames_-_2018.jpg",
      description: "Swedish melodic death metal band In Flames rocks the stage with their latest album, Foregone.",
      date: new Date("2025-09-10").toISOString(),
      location: "O2 Academy, Birmingham, UK"
    },
    {
      id: 3,
      name: "Blind Guardian - The God Machine Tour",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Blind_Guardian_Tuska_2011.jpg",
      description: "Blind Guardian returns with a fantasy-driven power metal spectacle on The God Machine Tour.",
      date: new Date("2025-11-25").toISOString(),
      location: "Royal Albert Hall, London, UK"
    }];

app.get("/gigs", (req, res) =>
  {
    const data = {"gigs": gigs};
    res.send(data);
  })

app.get("/gigs/:id", (req, res) =>
  {
    const id = Number(req.params.id);
    const gig = gigs.find(g => g.id === id);
    if (!gig) {
      return res.status(404).json({ error: "Gig not found" });
    }
    const gigObj = {"gig": gig};
    res.json(gigObj);
  })

app.delete("/gigs/:id", (req, res) =>
  {
    const id = Number(req.params.id);
    const gigIndex = gigs.findIndex(g => g.id === id);
    if (gigIndex === -1) {
      return res.status(404).json({ error: "Gig not found" });
    }
    gigs.splice(gigIndex, 1);
    res.json({message: "Successfully deleted gig", gigs });
  });

app.post("/gigs", (req, res) =>
  {
    const { gig } = req.body;

    if (!gig || !gig.id || !gig.name || !gig.image || !gig.description || !gig.date || !gig.location) 
    {
      return res.status(400).json({ error: "Invalid gig data" });
    } 

    gigs.push(gig);
    res.status(201).json({
      message: "Successfully posted new gig", 
      "gigs": gigs
    });
  });
  module.exports = { app, gigs };