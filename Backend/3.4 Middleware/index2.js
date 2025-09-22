import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
import morgan from "morgan";

// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;

app.use(morgan("tiny"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.get("/", (req, res) => {
  res.send("Hello");
});

// app.post("/submit", (req, res) => {
//   console.log(req.body);
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
