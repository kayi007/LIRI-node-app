// Include dotenv NPM package
// Load environment variables from a file named .env
require("dotenv").config();
// Using the require keyword lets us access all of the exports in keys.js
var keys = require("./keys.js");
// Include file system, Spotify, moment.js, axios, and chalk NPM package
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
moment().format();
var axios = require("axios");
const chalk = require("chalk");

// Declear user input variables
var command = process.argv[2];
var userInput = process.argv.slice(3);

// Switch case for each command
switch(command){
    case "movie-this":
    case "concert-this":
    case "spotify-this-song":
    case "do-what-it-says":
    default:
        console.log("\n----------------------------------\nPlease enter a valid command from the following four:\n1) movie-this\n2) concert-this\n3) spotify-this-song\n4) do-what-it-says\n")
        return
}