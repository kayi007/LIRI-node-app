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
console.log(command);
var userInput = process.argv.slice(3).join(" ");
console.log(userInput);
var output;

// Function that display OMDB Movie Info output
function showMovie(){
    var queryURL = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    // console.log(queryURL);
    if(userInput !== ""){
        axios.get(queryURL).then(function(response){
            var movie = response.data;
            console.log(response);
            console.log(response.data.Ratings);

        }).catch(function(error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    }else{
        var queryURL = "http://www.omdbapi.com/?t=" + "Mr.Nobody" + "&y=&plot=short&apikey=trilogy";
        axios.get(queryURL).then(function(response){
            var movie = response.data;
            // console.log(response);
            // console.log(response.data.Ratings);
            var title = movie.Title;
            var year = movie.Year;
            var imdbRating = movie.Ratings[0].Value;
            var rottenTomatoes = movie.Ratings[1].Value;
            // var country = movie.Country.split(", ").join("\n");
            var country = movie.Country;
            // var language = movie.Language.split(", ").join("\n");
            var language = movie.Language;
            var plot = movie.Plot;
            var actors = movie.Actors; 

            output = chalk.red(`Seems like you did not enter a movie!\n`) + `It's okay, just remember to enter it next time!\n-------------------------------------------\nHere's a recommendation for you: (It's on Netflix!)\n\n` + chalk.yellow(`Movie Title: `) + `${title}\n` + chalk.yellow(`Year: `) + `${year}\n` + chalk.yellow(`IMDB Rating: `) + `${imdbRating}\n` + chalk.yellow(`Rotten Tomatoes Rating: `) + `${rottenTomatoes}\n` + chalk.yellow(`Country: `) + `${country}\n` + chalk.yellow(`Language: `) + `${language}\n` + chalk.yellow(`Plot Summary: `) + `${plot}\n` + chalk.yellow(`Actors: `) + `${actors}\n`

            // console.log(output);
        })
    }
}

// Switch cases for each command
switch(command){
    case "movie-this":
        return showMovie();
    case "concert-this":
    case "spotify-this-song":
    case "do-what-it-says":
    default:
        console.log("\n----------------------------------\nPlease enter a valid command from the following four:\n1) movie-this\n2) concert-this\n3) spotify-this-song\n4) do-what-it-says\n")
        return
}