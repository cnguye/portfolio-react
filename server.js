const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const request = require("request");
const nodemailer = require("nodemailer");
require("dotenv").config();

// body-parse depricated.  Use two lines below instead:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

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

app.get("/api/projects", (req, res) => {
    console.log("hello");
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

// app.post("/send_mail", cors(), async (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     const { text } = res.body;
//     console.log(text);
//     const transport = nodemailer.createTransport({
//         host: process.env.MAIL_HOST,
//         port: process.env.MAIL_PORT,
//         auth: {
//             user: process.env.MAIL_USER,
//             pass: process.env.MAIL_PASS,
//         },
//     });

//     const result = await transport.sendMail({
//         from: process.env.MAIL_FROM,
//         to: "ngyn.christopher@gmail.com",
//         subject: "Interested in your portfolio!",
//         html: `<div className="email" style="
//         border: 1px solid black;
//         padding: 20px;
//         font-family: sans-serif;
//         line-height: 2;
//         font-size: 20px; 
//         ">
//         <h2>Here is your email!</h2>
//         <p>${text}</p>
    
//         <p>All the best, Darwin</p>
//          </div>`,
//     });
//     res.status(200).json(result);
// });
