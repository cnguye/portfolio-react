const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const request = require("request");
const nodemailer = require("nodemailer");

require("dotenv").config();

// credentials
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

// body-parse depricated.  Use two lines below instead:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(__dirname));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// create a GET route
app.get("/express_backend", (req, res) => {
    res.set("Content-Type", "text/html");
    res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.get('/time', (req, res) => {
    res.send(new Date().toLocaleTimeString())
})

app.get("/projects", (req, res) => {
    const country = req.query["country"];
    const category = req.query["category"];
    const pageSize = req.query["pagesize"];
    res.set("Content-Type", "text/html");

    // News API URL
    const url = `https://newsapi.org/v2/top-headlines?apiKey=60bb237aace4433eb195f2cf31bdd01b&country=${country}&category=${category}&pageSize=${pageSize}`;

    // make request to News API and forward response
    request(url).pipe(res);
});

// request(url, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body); // Print the google web page.
//     }
// });

// maaaaail serbaa

// POST route from contact form
app.post('/send_mail', (req, res) => {
    // Instantiate the SMTP server
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    })
  
    // Specify what the email will look like
    const mailDetails  = {
      from: 'Your sender info here', // This is ignored by Gmail
      to: GMAIL_USER,
      subject: 'christopherhnguyen.com: New message from ' + req.body.name,
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
  
    // Attempt to send the email
    mailTransporter.sendMail(mailDetails , (error, response) => {
      if (error) {
        console.log('contact-failure') // Show a page indicating failure
        res.send(false);
      }
      else {
        console.log('contact-success') // Show a page indicating success
        res.send(true);
      }
    })
  })
