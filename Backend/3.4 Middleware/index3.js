import express from "express";

const app = express();
const port = 3002;

const logger = (req, res, next) => {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello Custom_function");
});

app.get("/about", (req, res) => {
  res.send("About for Custom_function");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
