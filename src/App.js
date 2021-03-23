import React, { useEffect, useState } from 'react'
import { getTokenFromUrl } from './spotify'
import Login from './login/Login'
import SpotifyWebApi from 'spotify-web-api-js'
import './App.css'
import { useDataLayerValue } from './data/DataLayer'
import Player from './player/Player'
import { SoundLayer } from './data/SoundLayer'
import soundReducer, { soundInitialState } from './data/soundReducer'

// Spotify
const spotify = new SpotifyWebApi()

function App() {
  document.oncontextmenu = new Function('return false;')

  const [token, setToken] = useState(null)
  const [{}, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      setToken(_token)

      spotify.setAccessToken(_token)
      // Set User
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      //set user playlist
      spotify.getPlaylist('6nhXCWh2nVJZoUDGN7daGt').then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

      // spotify.getUserPlaylists().then((playlists) => {
      //   dispatch({
      //     type: 'SET_PLAYLISTS',
      //     playlists: playlists,
      //   })
      // })

      //set artist albums
      spotify.getArtistAlbums('1plObTufEAfeL1hk8Qz24v').then((albums) => {
        dispatch({
          type: 'SET_ARTIST_ALBUMS',
          artist_albums: albums.items,
        })
      })
    }
  }, [])

  return (
    <div className='app'>
      {token ? (
        <SoundLayer initialState={soundInitialState} reducer={soundReducer}>
          <Player spotify={spotify} />
        </SoundLayer>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
