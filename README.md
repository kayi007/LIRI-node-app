# LIRI-node-app
**LIRI** is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface.

# What does it do?
**LIRI** will be a command line Node.js app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

# Deployed Version of LIRI
This app is meant to be run in the user's Terminal and not in the user's browser. <br>
:link: 

# How to use/run LIRI
If you decide to clone my app from GitHub and run it on your computer, you would need to supply your own `.env` file with your own API Keys. (See *Technologies Used for LIRI* below for instructions on where to sign up for your APIs)

:musical_score: **Search a song with Spotify**
- type in command line: <br>
`node liri.js spotify-this-song '<song name here>'`

This will return the following information about the song: <br>
> Artist(s) <br>
> Song Name <br>
> Spotify Preview Link of the song <br>
> Song Album <br>

:zap: If no song is provided, then the app will by defalut return information of a song recommendation: "The Sign" by Ace of Base.

:clapper: **Search a movie with OMDB**
- type in command line: <br>
`node liri.js movie-this '<movie name here>'`

This will return the following information about the movie: <br>
> Movie Title <br>
> Movie Year <br>
> IMDB Rating/Rotten Tomatoes Rating <br>
> Country (where the movie was produced) <br>
> Language Available <br>
> Movie Plot Summary <br>
> Actors <br>

:zap: If no movie is provided, then the app will by defalut return information of a movie recommendation: "Mr.Nobody".

:confetti_ball: **Search a concert with Bands in Town**
- type in command line: <br>
`node liri.js concert-this <artist/band name here>`

This will return the following information about the concert: <br>
> Name of the venue <br>
> Venue Location <br>
> Event Date (MM/DD/YYYY) <br>

:zap: If no artist/band is provided, then no information will be returned. You'll have to enter an artist or band. 

:mag: **Search in RANDOM.TXT** 
- type in command line: <br>
`node liri.js do-what-it-says`

This will return whatever is stored inside of **random.txt**. It could be spotifying a song, searching for an artist/band or searching for a concert. 

:zap: No information will be returned if the file is empty. 

# Technologies Used for LIRI
As an app developer of LIRI, here are the technologies I used:
- Node.js (file system)
- npm packages: axios, chalk, moment, node-spotify-api, dotenv
- APIs: OMDB, Spotify, Bands in Town
    - To obtain an API Key or ID:
    > Bands in Town: email support@bandsintown.com <br>
    > OMDB: visit http://www.omdbapi.com/ <br>
    > Spotify: visit https://developer.spotify.com/dashboard/applications 

