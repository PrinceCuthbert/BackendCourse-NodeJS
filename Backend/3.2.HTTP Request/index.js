import express from "express";

const app = express();
const port = 3000;

// Middleware to parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Express Server</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
        form { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
        input, select { margin: 5px 0 10px 0; padding: 8px; width: 200px; }
        button { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        .radio-group { margin: 10px 0; }
        .radio-option { margin: 5px 0; }
      </style>
    </head>
    <body>
      <h1>🌍 Welcome to My Express Server</h1>
      <p>This is the home page. Use the links below to explore:</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      
      <form action="/register" method="POST">
        <h3>Registration Form</h3>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>
        
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br>
        
        <label for="country">Select Country:</label><br>
        <select id="country" name="country">
          <option value="">-- Choose a country --</option>
          <option value="rwanda">Rwanda</option>
          <option value="uganda">Uganda</option>
          <option value="kenya">Kenya</option>
          <option value="tanzania">Tanzania</option>
          <option value="other">Other</option>
        </select><br>
        
        <label>Preferred Contact Method:</label><br>
        <div class="radio-group">
          <div class="radio-option">
            <input type="radio" id="contact-email" name="contact-method" value="email" checked>
            <label for="contact-email">Email</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="contact-phone" name="contact-method" value="phone">
            <label for="contact-phone">Phone</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="contact-sms" name="contact-method" value="sms">
            <label for="contact-sms">SMS</label>
          </div>
        </div>
        
        <button type="submit">Register</button>
      </form>
    </body>
    </html>
  `);
});

app.post("/register", (req, res) => {
  console.log("Registration data received:", req.body);
  res.status(201).send(`
    <h1>✅ Registration Successful!</h1>
    <p>Thank you for registering with email: <strong>${
      req.body.email
    }</strong></p>
    <p>Country: <strong>${req.body.country || "Not specified"}</strong></p>
    <p>Preferred contact: <strong>${req.body["contact-method"]}</strong></p>
    <a href="/">⬅ Back Home</a>
  `);
});

// Fixed: PUT route (was missing forward slash)
app.put("/user/cuthbert", (req, res) => {
  console.log("PUT request to update user cuthbert");
  res.status(200).send("User cuthbert updated successfully");
});

// Fixed: PATCH route (was incorrectly named "path")
app.patch("/user/cuthbert", (req, res) => {
  console.log("PATCH request to partially update user cuthbert");
  res.status(200).send("User cuthbert partially updated successfully");
});

app.delete("/user/cuthbert", (req, res) => {
  console.log("DELETE request for user cuthbert");
  res.status(200).send("User cuthbert deleted successfully");
});

app.get("/about", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>About Us</title></head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
      <h1>ℹ️ About Us</h1>
      <p>This simple Express app was built as a practice project.</p>
      <p>It demonstrates routing and handling requests in Node.js.</p>
      <a href="/">⬅ Back Home</a>
    </body>
    </html>
  `);
});

app.get("/contact", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Contact</title></head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
      <h1>📞 Contact Page</h1>
      <p>If you'd like to reach out, send an email to: <strong>hello@example.com</strong></p>
      <p>Or call us at: <strong>+250 123 456 789</strong></p>
      <a href="/">⬅ Back Home</a>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
