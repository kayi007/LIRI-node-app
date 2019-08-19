# LIRI-node-app
**LIRI** is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface.

# What does it do?
**LIRI** will be a command line Node.js app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

# How to use/run LIRI
:musical_score: **Search a song with Spotify**
- type in command line: <br>
`node liri.js spotify-this-song '<song name here>'`

It will return the following information about the song: <br>
> Artist(s) <br>
> Song Name <br>
> Spotify Preview Link of the song <br>
> Song Album <br>

:zap: If no song is provided, then the app will by defalut return information of a song recommendation: "The Sign" by Ace of Base.

:clapper: **Search a movie with OMDB**
- type in command line: <br>
`node liri.js movie-this '<movie name here>'`

It will return the following information about the movie: <br>
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

It will return the following information about the concert: <br>
> Name of the venue <br>
> Venue Location <br>
> Event Date (MM/DD/YYYY) <br>

:zap: If no artist/band is provided, then no information will be returned. You'll have to enter an artist or band. 
