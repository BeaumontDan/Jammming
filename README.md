![Codecademy](https://www.codecademy.com/favicon.ico)

##### CODECADEMY: FULL-STACK ENGINEER COURSE

Practice Project: Jammming
=================================================

### Author(s)
[Dan Beaumont](https://github.com/BeaumontDan)
**Date of Compleation:** 22 February 2025

## Description

This is a React / API training/learning project, set by [Codecademy][codecademy], untilising React and API's, to create a Spotify playlist app.

## Codecademy Objective


##### Overview

In this project, you will build a React web application called Jammming. You will use your knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

##### Project Requirements

* Build a web app using React
* Version control your application with Git and host the repository on GitHub
* Integrate with Spotify or another API
* Deploy your application
* Write a README (using Markdown) that documents your project, including:
    - The purpose of your project
    - Technologies used
    - Features
    - Future work

#### Features

- Users can search for songs by song title.
- You can also include functionality to search by other attributes like artist’s name, genre, etc.
- Users can see information about each song like title, artist, and album for songs they queried
- You can also include other information – the design is up to you
- Users can export their custom playlist to their personal Spotify account


## Application Usage

Visit [Jammming][jammmingLink] here!


## Technologies & Prereqisites

- React
- JSX
- JavaScript
- HTML
- CSS
- HTTP Requests & Responses - Spotify API
- Git & GitHub
- Authentication

## Future Improvements

Jammming is an evolving project, future enhancments being considered are:

##### Immediate Features to Develop

 - **Album Cover** - Add album cover images to the Track component
 - **Preview Playback Feature** - provide users with an audio preview festure, including controls to play, pause and skip with time bar
    - for details on the planned feautre, see the [feature request documentation][playbackRequest].
- **Search submit via enter key**

##### Additional Features to Introduce

- **Filter Existing Plalist Tracks** - Modify the search results Tracklist to only include tracks not already in the user Playlist
- **Loading Screen** - Implement a loading screen for the Playlist saving process
- **Optimize the Token Expiration** - to expire at the precise time, rather than upon initiation of users next search request
- **Restore Search Term on Login Redirect** - After user redirect on login, restoring the search term from before the redirect
- **Retain Playlist Info** - Ensure playlist information doesn’t get cleared if a user has to refresh their access token



## Credits

This project was made possible with help from Codecademy's tutorials and courses. For more information on [Codecademy][codecademy] and their Full-Stack Engineer Course, [click here][fullstackcourse].

This was a daunting project at this point in developer path and at time multiple stages hit a wall. I would like to thank [Sypher](https://github.com/Sypher12233) for thier clear step by step assistance.

[codecademy]: https://www.codecademy.com/
[playbackRequest]: https://docs.google.com/document/d/1rh94Sjg0oloCQLz1yexBnm-Q0AumW8opOqk8d6Cr90w/edit?usp=sharing
[fullstackcourse]: https://www.codecademy.com/learn/paths/full-stack-engineer-career-path
[jammmingLink]: https://jammming-tracks.netlify.app/