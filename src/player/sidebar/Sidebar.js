import './Sidebar.css'
import { useDataLayerValue } from '../../data/DataLayer'
import SidebarOption from './sidebarOptions/SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

function Sidebar({ spotify }) {
  const [{ playlists }] = useDataLayerValue()
  console.log('----pl---', playlists)
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />

      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => {
        return (
          <SidebarOption
            spotify={spotify}
            title={playlist.name}
            id={playlist.id}
            key={playlist.id}
          />
        )
      })}
      {playlists && (
        <SidebarOption
          spotify={spotify}
          title={playlists.name}
          id={playlists.id}
          key={playlists.id}
        />
      )}
    </div>
  )
}

export default Sidebar
