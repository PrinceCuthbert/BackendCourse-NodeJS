import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send(`
    <h1>🌍 Welcome to My Express Server</h1>
    <p>This is the home page. Use the links below to explore:</p>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  `);
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("user/cuthbert", (req, res) => {
  res.sendStatus(200);
});

app.path("/user/cuthbert", (req, res) => {
  res.sendStatus(200);
});
app.delete("/user/cuthbert", (req, res) => {
  res.sendStatus(200);
});

app.get("/about", (req, res) => {
  res.send(`
    <h1>ℹ️ About Us</h1>
    <p>This simple Express app was built as a practice project.</p>
    <p>It demonstrates routing and handling requests in Node.js.</p>
    <a href="/">⬅ Back Home</a>
  `);
});

app.get("/contact", (req, res) => {
  res.send(`
    <h1>📞 Contact Page</h1>
    <p>If you’d like to reach out, send an email to: <strong>hello@example.com</strong></p>
    <p>Or call us at: <strong>+250 123 456 789</strong></p>
    <a href="/">⬅ Back Home</a>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
