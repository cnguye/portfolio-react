const express = require("express");
const cors = require("cors");
var http = require("http");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const request = require("request");

// app.use(express.static(__dirname));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// var httpServer = http.createServer(app);

// httpServer.listen(port, () => {
//   console.log("Running HTTP on ", port);
// });

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
