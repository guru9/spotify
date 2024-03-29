## 🎸 Spotify React Clone 🎶 

This app is a demo replica of Spotify (using their spotify api) that I decided to create in order to learn more into React and context-api. Yup also have fun!!! 🎧 🤟💃🏿🔥 🚀

## Project Status

There are many features still not implemented and I will try to add as many as I can.

## Project Screen Shot(s)

### Login Page

![alt text](https://github.com/guru9/spotify/blob/main/blob/spotify-login.png)

### Home Page

![alt text](https://github.com/guru9/spotify/blob/main/blob/spotify-home.png)

## Installation and Setup Instructions

#### Example:

Before the already well known react installation process, please visit spotify developer page and go inside the dashboard. There you can create a new app, and you will get your clientId. Also open the app inside the dashboard and edit settings. Only thing you need to change is redirect url. It is the url your app is running at. By default localhost runs at http://localhost:3000/ so you can copy and paste that if you are just looking to test the app.

Copy your clientId inside `spotify.js` file.

Now for the regular react app process you will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

## How does it work

Once the app is started and you have successfully added your clientId and redirectUrl, on start you should see the login page. That's because you haven't got the authorization token from spotify api. Once you click login, spotify takes it from there and asks you to login to you account. You get redirected back with the token I store inside React Context state. With that token I can reach inside spotify api and get your playlists. (You should see them pop to the left). You can pick whatever playlist you want, and start the songs.

**Important Notice** -> Spotify only adds the preview_url to their songs, so you can only play 30 sec of every song. Some don't even have the `preview_url` and will not start at all. Sucks, I know, but that's why this project is only created for fun. I wanted to interact with a api online, and spotify api looked really nice. So this app is never ment to be used on production, but just as a little project to hopefully get you started with React. I know it did help me so hopefully I will be able to help someone else :)
