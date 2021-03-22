import './Player.css'
import Body from './body/Body'
import Footer from './footer/Footer'
import Sidebar from './sidebar/Sidebar'
import { useDataLayerValue } from '../data/DataLayer'
import { useSoundLayerValue } from '../data/SoundLayer'

function Player({ spotify }) {
  return (
    <>
      {/* Player Container */}
      <div className='player__body'>
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </>
  )
}

export default Player
