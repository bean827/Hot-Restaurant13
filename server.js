// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
//this parses the request body.json and make it available
app.use(bodyParser.json());

// Restaurant Reservations (DATA)
// =============================================================
var reservations = [{
        routeName: "table1",
        customer: "customerName",
        status: "open",
        name: "Table1",
        seats: 4
    },
    {
        routeName: "table2",
        customer: "customerName",
        status: "open",
        name: "Table2",
        seats: 4
    },
    {
        routeName: "table3",
        customer: "customerName",
        status: "open",
        name: "Table3",
        seats: 4
    },
    {
        routeName: "table4",
        customer: "customerName",
        status: "open",
        name: "Table4",
        seats: 4
    },
    {
        routeName: "table5",
        customer: "customerName",
        status: "open",
        name: "Table5",
        seats: 4
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//Route to reservation addition
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//Route to the 
app.get("/tables&waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Create New Reservation - takes in JSON input
app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newreservation = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);

    reservations.push(newreservation);

    res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});