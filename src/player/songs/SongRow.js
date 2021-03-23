import './SongRow.css'
import { useDataLayerValue } from '../../data/DataLayer'
import { useSoundLayerValue } from '../../data/SoundLayer'

function SongRow({ track }) {
  const [{}, dispatch] = useDataLayerValue()
  const [{ playing, repeat }, soundDispatch] = useSoundLayerValue()

  // Song Duration
  var minutes = Math.floor(track.track.duration_ms / 60000)
  var seconds = ((track.track.duration_ms % 60000) / 1000).toFixed(0)
  var trackTime = minutes + ':' + (seconds < 10 ? '0' : '') + seconds

  const handleTrack = (track) => {
    dispatch({
      type: 'SET_TRACK',
      track: track,
    })

    let wasPlaying = playing
    soundDispatch({
      type: 'SET_PLAYING',
      playing: false,
    })

    let audio = new Audio(track?.preview_url)
    audio.loop = repeat
    soundDispatch({
      type: 'SET_AUDIO',
      audio: audio,
    })

    if (wasPlaying) {
      soundDispatch({
        type: 'SET_PLAYING',
        playing: true,
      })
    }

    document.title = `${track?.name} · ${track?.artists
      .map((artist) => artist?.name)
      .join(', ')}`
  }

  return (
    <div className='songRow' onClick={(e) => handleTrack(track.track)}>
      <img
        className='songRow__album'
        src={track.track.album.images[0].url}
        alt=''
      />
      <div className='songRow__info'>
        <h1>{track.track.name}</h1>
        <p className='songRow__artistName'>
          {track.track.artists.map((artist) => artist.name).join(', ')}
        </p>
        <p className='songRow__albumName'>{track.track.album.name}</p>
        <p className='songRow__albumRelease'>
          {track.track.album.release_date}
        </p>
        <span className='songRow__infoDuration'>{trackTime}</span>
      </div>
    </div>
  )
}

export default SongRow
