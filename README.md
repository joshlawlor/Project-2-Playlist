### Music Playlist App

My app will allow users to save their favorite songs in a playlist format. Users will be able to add songs that they like, and make a playlist out of the songs. Users will be able to delete and edit any of their entries. Users will also be able to save a link to a music video for their songs. 

### Live site link: https://sei-prj2-playlistapp.herokuapp.com/

### Technology Used:
1. Express
2. MongoDb
3. Heroku
4. Materialize.css

### MVP

1. User is able to create new playlist
2. User is able to delete playlist
3. User is able to edit playlist name and info
4. User is able to add songs to playlist
5. User is able to delete songs from playlist
6. User is able to edit songs name and info

### Stretch Goals

- Add an API for song information, lyrics, genre, release date etc
- Add styling to make it look similar to an iTunes or Spotify playlist
- User able to select songs from a list, have API for artists and their songs, and add them to their playlist
- User able to filter songs by Artist, rating, or genre

### Front-end
Planning on using EJS

### List of Mongoose models and their properties

Model 1: Playlist
Properties: Name, Description
Model 2: Song
Properties: Name, Genre, Artist, Rating

### List of Routes

**Playlist Routes:**
(GET /playlist) Index Route: Show all current playlists, Add Playlist button /
(GET /playlist/:id/songs)Show Route: Show specific playlist, Song list. (Edit button)
(PUT /playlist/:id)Edit Route: Edit playlist name/description
(GET + POST)Create Route: Make new playlist
(DELETE /playlist/:id)Delete Route: Delete playlist

**Song Routes:**
(GET /playlist/:id/songs) Show Route: Show specific song info, Edit button
(PUT /playlists/:id/songs/:id) Edit Route: Edit song info
(GET + POST) Create Route: Add new song to playlist
(DELETE /playlists/:id/songs/:id) Delete Route: Delete a song

### User stories

-As a user I would like to make a new playlist
-As a user, I would like to delete that playlist
-As a user I would like to edit the playlist name and info
-As a user I would like to add songs to the playlist, inputting song name and info
-As a user I would like to remove songs from the playlist
-As a user I would like to edit the songs info after I create them
-As a user I would like to be able to put a link to the song's music video
-As a user I would like to be able to click the link and watch the video

### Wireframes

![image](https://media.git.generalassemb.ly/user/41952/files/baec15e4-74a5-4bbe-bfc6-6a98474df271)
