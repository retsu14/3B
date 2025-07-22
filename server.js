const express = require("express");
const app = express();
const PORT = 5000;

const profile = require("./profiles.json");

// middleware
// app.use(express.json());

// HTTP REQUESTS
// GET
// POST
// PUT
// DELETE

// const sampleFunction = (name, age) => {
//   console.log("name", name, age);
// };

// sampleFunction("John Doe", 12);

// app.post("/api/like", function (req, res) {
//   res.json({
//     message: "Liked",
//   });
// });

app.get("/api/get-profiles", (req, res) => {
  res.json(profile);
});

// API Endpoint
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
