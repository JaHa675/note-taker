const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const routes = require("express").Router();

// TODO:GET /api/notes should read the db.json file and return all saved notes as JSON.
routes.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const oldNotes = JSON.parse(data);
      res.json(oldNotes);
    }
  });
});

// receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.  give each note a unique id when it's saved
routes.post("/notes", (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  const oldNotes = JSON.parse(fs.readFileSync("db/db.json"));
  allNotes.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(oldNotes, null, 2));
  console.log(allNotes);
  res.json(allNotes);
});




module.exports = routes;
