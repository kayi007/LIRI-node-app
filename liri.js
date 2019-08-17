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
            output = `\n-------------------------------------------\n\n` + chalk.yellow(`Movie Title: `) + `${movie.Title}\n` + chalk.yellow(`Year: `) + `${movie.Year}\n` + chalk.yellow(`IMDB Rating: `) + `${movie.Ratings[0].Value}\n` + chalk.yellow(`Rotten Tomatoes Rating: `) + `${movie.Ratings[1].Value}\n` + chalk.yellow(`Country: `) + `${movie.Country}\n` + chalk.yellow(`Language: `) + `${movie.Language}\n` + chalk.yellow(`Plot Summary: `) + `${movie.Plot}\n` + chalk.yellow(`Actors: `) + `${movie.Actors}\n`;

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

            output = chalk.red(`Seems like you forgot to enter a movie!\n`) + `It's okay, just remember to enter it next time!\n-------------------------------------------\nHere's a recommendation for you: (It's on Netflix!)\n\n` + chalk.yellow(`Movie Title: `) + `${movie.Title}\n` + chalk.yellow(`Year: `) + `${movie.Year}\n` + chalk.yellow(`IMDB Rating: `) + `${movie.Ratings[0].Value}\n` + chalk.yellow(`Rotten Tomatoes Rating: `) + `${movie.Ratings[1].Value}\n` + chalk.yellow(`Country: `) + `${movie.Country}\n` + chalk.yellow(`Language: `) + `${movie.Language}\n` + chalk.yellow(`Plot Summary: `) + `${movie.Plot}\n` + chalk.yellow(`Actors: `) + `${movie.Actors}\n`;

            console.log(output);
        });
    }
}

// function for Bands in Town Concert Info search
function showConcert(){
    if(userInput !== ""){
        var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"
        axios.get(queryURL).then(function(response){
            var concert = response.data;
            // console.log(response.data);
            // console.log(concert.length);
            if(concert.length === 0){
                console.log(`\nSorry! There are no upcoming events for `+ chalk.green(`${userInput}`) + `.\nThey are currently not on tour.\n\n-------------------------------------------\n`);
            }else{
                console.log(`\nThere are ` + chalk.yellow(concert.length) + ` upcoming events for ` + chalk.green(userInput) + ': ');

                for(var i = 0; i < concert.length; i++){
                    // Time Converter
                    var date = concert[i].datetime;
                    var convertedDate = moment(date, 'YYYY-MM-DDTHH:mm:ss');
                    // console.log(convertedDate);

                    output = `\n-------------------------------------------\n\n` + chalk.yellow(`Venue Name: `) + `${concert[i].venue.name}\n` + chalk.yellow(`Venue Location: `) + `${concert[i].venue.country}, ${concert[i].venue.city}\n` + chalk.yellow(`Event Date: `) + convertedDate.format("MM/DD/YY hh:mm A") + `\n`;

                    console.log(output);
                }
            }
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

        output = `\nSeems like you forgot to enter an artist or band. Please try again!\n\n-------------------------------------------\n`;

        console.log(output);
    }
}

// function for Spotify Song Info search
function showSong(){
    if(userInput !== ""){
        spotify.search({type: 'track', query: userInput, limit: 1 }, function(err, data){
            if (err){
                console.log("Error 1");
                return console.log('Error occurred: ' + err);
            }
            var song = data.tracks;

            output = `\n-------------------------------------------\n\n` + chalk.yellow(`Artist(s): `) + `${song.items[0].artists[0].name}\n` + chalk.yellow(`Song name: `) + `${song.items[0].name}\n` + chalk.yellow(`Spotify Preview Link: `) + `${song.items[0].preview_url}\n` + chalk.yellow(`Song Album: `) + `${song.items[0].album.name}\n`;

            console.log(output);
        })
    }else{
        spotify.search({type: 'track', query: 'The Sign'}, function(err, data){
            if (err){
                console.log("Error 2");
                return console.log('Error occurred: ' + err);
            }
            var song = data.tracks;

            output = chalk.red(`Seems like you forgot to enter a song!`) + `\nIt's okay, just remember to enter it next time!\n-------------------------------------------\nHere's a recommendation for you: \n\n` + chalk.yellow(`Artist(s): `) + `${song.items[4].artists[0].name}\n` + chalk.yellow(`Song Name: `) + `${song.items[4].name}\n` + chalk.yellow(`Spotify Preview Link: `) + `${song.items[4].preview_url}\n` + chalk.yellow(`Song Album: `) + `${song.items[4].album.name}\n`;
            // console.log(data);
            // console.log(data.tracks.items[4]);
            // console.log("\n");

            console.log(output);
        });
    }
}

// Function for Do-What-It-Says
function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(error, data){
        if (error) {
            return console.log(error);
        }
        console.log(data);
        var output = data.split(",");
        console.log(output);
        command = output[0];
        userInput = output[1];
        switch(command){
            case "movie-this":
                return showMovie();
            case "concert-this":
                return showConcert();
            case "spotify-this-song":
                return showSong();
            default: 
                console.log(chalk.red("Please enter a valid commad!"));
                return false;
        };
    });
}

// Switch cases for each command
switch(command){
    case "movie-this":
        return showMovie();
    case "concert-this":
        return showConcert();
    case "spotify-this-song":
        return showSong();
    case "do-what-it-says":
        return doWhatItSays();
    default:
        console.log(`\n-------------------------------------------\n` + chalk.red(`\nPlease enter a valid command from the following four:\n`) + `1) movie-this\n2) concert-this\n3) spotify-this-song\n4) do-what-it-says\n`);
        return false; 
}