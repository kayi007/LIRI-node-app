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

// Function that display OMDB Movie Info search
function showMovie(){
    var queryURL = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    // console.log(queryURL);
    if(userInput !== ""){
        axios.get(queryURL).then(function(response){
            var movie = response.data;
            // console.log(response);
            // console.log(response.data.Ratings);
            output = `\n-------------------------------------------\n\n` + chalk.yellow(`Movie Title: `) + `${movie.Title}\n` + chalk.yellow(`Year: `) + `${movie.Year}\n` + chalk.yellow(`IMDB Rating: `) + `${movie.Ratings[0].Value}\n` + chalk.yellow(`Rotten Tomatoes Rating: `) + `${movie.Ratings[1].Value}\n` + chalk.yellow(`Country: `) + `${movie.Country}\n` + chalk.yellow(`Language: `) + `${movie.Language}\n` + chalk.yellow(`Plot Summary: `) + `${movie.Plot}\n` + chalk.yellow(`Actors: `) + `${movie.Actors}\n`

            console.log(output);

        }).catch(function(error) {
            // console.log(error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log("1");
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                // console.log("2");
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                // console.log("3");
                console.log("\nError", error.message);
                console.log(chalk.red("Please enter a valid movie!\n"));
            }
            // console.log("4");
            console.log(error.config);
        });
    }else{
        var queryURL = "http://www.omdbapi.com/?t=" + "Mr.Nobody" + "&y=&plot=short&apikey=trilogy";
        axios.get(queryURL).then(function(response){
            var movie = response.data;
            // console.log(response);
            // console.log(response.data.Ratings);

            output = chalk.red(`Seems like you forgot to enter a movie!\n`) + `It's okay, just remember to enter it next time!\n-------------------------------------------\nHere's a recommendation for you: (It's on Netflix!)\n\n` + chalk.yellow(`Movie Title: `) + `${movie.Title}\n` + chalk.yellow(`Year: `) + `${movie.Year}\n` + chalk.yellow(`IMDB Rating: `) + `${movie.Ratings[0].Value}\n` + chalk.yellow(`Rotten Tomatoes Rating: `) + `${movie.Ratings[1].Value}\n` + chalk.yellow(`Country: `) + `${movie.Country}\n` + chalk.yellow(`Language: `) + `${movie.Language}\n` + chalk.yellow(`Plot Summary: `) + `${movie.Plot}\n` + chalk.yellow(`Actors: `) + `${movie.Actors}\n`

            console.log(output);
        })
    }
}

// function for Bands in Town Concert Info search
function showConcert(){
    if(userInput !== ""){
        var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"
        axios.get(queryURL).then(function(response){
            var concert = response.data;
            console.log(response.data);
            if(concert.length === 0){
                console.log(`\nSorry! There are no upcoming events for `+ chalk.green(`${userInput}.`) + `\nThey are currently not on tour.\n\n-------------------------------------------\n`)
            }
        })
    }else{
        console.log(`\nSeems like you forgot to enter an artist or band. Please try again!\n\n-------------------------------------------\n`)
    }
}

// Switch cases for each command
switch(command){
    case "movie-this":
        return showMovie();
    case "concert-this":
        return showConcert();
    case "spotify-this-song":
    case "do-what-it-says":
    default:
        console.log(`\n-------------------------------------------\n` + chalk.red(`\nPlease enter a valid command from the following four:\n`) + `1) movie-this\n2) concert-this\n3) spotify-this-song\n4) do-what-it-says\n`);
        return false; 
}