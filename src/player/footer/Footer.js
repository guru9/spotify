import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Footer.css'
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayArrow'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import DevicesSharpIcon from '@material-ui/icons/DevicesSharp'
import { Grid, Slider } from '@material-ui/core'
import { useDataLayerValue } from '../../data/DataLayer'
import { useSoundLayerValue } from '../../data/SoundLayer'

function Footer() {
  const [{ token, track }] = useDataLayerValue()
  const [{ playing }, soundDispatch] = useSoundLayerValue()
  const [playPause, setPlayPause] = useState(false)

  let audio = new Audio(track?.preview_url)

  const handleSongs = async () => {
    setPlayPause(playing ? false : true)

    await soundDispatch({
      type: 'SET_PLAYING',
      playing: playPause,
    })
    if (playPause) {
      soundDispatch({
        type: 'SET_AUDIO',
        audio: audio.play(),
      })
    } else {
      soundDispatch({
        type: 'SET_AUDIO',
        audio: audio.pause(),
      })
    }
  }

  console.log('----', track, playPause, playing)

  return (
    <div className='footer'>
      {/* Current Song Info */}
      {track ? (
        <>
          <div className='footer__left'>
            <img
              className='footer__albumLogo'
              src={track?.album.images[0].url}
              alt=''
            />
            <div className='footer__songInfo'>
              <a>
                <h5>{track?.name}</h5>
              </a>
              <a>
                <p>{track?.album.name}</p>
              </a>
            </div>
            <FavoriteIcon className='footer__heartCurrent' />
          </div>

          {/*  Player Controls */}
          <div className='footer__center'>
            <ShuffleIcon className='footer__green' />
            <SkipPreviousIcon className='footer__icon' />
            {playing ? (
              <PauseCircleOutlineIcon
                fontSize='large'
                className='footer__icon footer__play'
                onClick={handleSongs}
              />
            ) : (
              <PlayCircleOutlineIcon
                fontSize='large'
                className='footer__icon footer__play'
                onClick={handleSongs}
              />
            )}
            <SkipNextIcon className='footer__icon' />
            <RepeatIcon className='footer__green' />
          </div>
          <div className='footer__durationContainer'>
            <span>01:20</span>
            <Slider className='footer__durationBar' />
            <span>3:34</span>
          </div>

          {/* Volume Controls  */}
          <div className='footer__right'>
            <div className='footer__rightContainer'>
              <Grid container spacing={2}>
                <Grid item>
                  <PlaylistPlayIcon className='footer__playlistIcon' />
                </Grid>
                <Grid item>
                  <DevicesSharpIcon className='footer__deviceIcon' />
                </Grid>
                <Grid item>
                  <VolumeDownIcon className='footer__volumeIcon' />
                </Grid>
                <Grid item xs>
                  <Slider className='footer__volumeSlider' />
                </Grid>
              </Grid>
            </div>
          </div>
        </>
      ) : (
        <h4 style={{ color: 'rgb(176 173 172)', margin: 'auto' }}>
          No tracks selected to play!
        </h4>
      )}
    </div>
  )
}

export default Footer
