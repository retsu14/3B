const express = require("express");
const app = express();
const contact = require("./contact.json");

// HTTP REQUESTS
// GET
// POST
// DELETE
// PUT

app.get("/api/contact", function (req, res) {
  res.json(contact);
});

// complete the crud
app.post("/api/add-contact", function (req, res) {});

// app.post("/api/like", function (req, res) {
//   res.json({
//     gege: "gege",
//   });
// });

app.listen(5000, function () {
  console.log(`http://localhost:5000`);
});
