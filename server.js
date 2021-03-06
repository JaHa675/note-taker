const express = require('express');
const path = require('path');
const api = require('./routes/routes.js');
const PORT = process.env.PORT || 6900;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET route to home
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET route to notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// home page GET routing default
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
