//requires .env file
require("dotenv").config();

//requires request
let request = require("request");

//requires moment
const moment = require('moment');

//requires filels systems
const fs = require("fs");

//link to keys file
const keys = require("./keys.js");

//spotify
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

//omdb and bands api
let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown)

//user input 

let userInput = process.argv[2];
let userC = process.argv.slice(3).join(" ");

function userCommand(userInput, userC) {
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-this":
            doThis(userC);
            break;
        default:
            console.log("I don't understand");
            break;         
    }
}

userCommand(userInput, userC);

