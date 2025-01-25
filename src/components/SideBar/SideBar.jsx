import "./sidebar.css"
import FeedIcon from '@mui/icons-material/Feed';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FeedIcon className="sidebarIcon" />
            <span className="sidebarlistitemText">feed</span>
          </li>

          <li className="sidebarListItem">
            <VideocamIcon className="sidebarIcon" />
            <span className="sidebarlistitemText">Videocs</span>
          </li>

          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarlistitemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <BookmarksIcon className="sidebarIcon" />
            <span className="sidebarlistitemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon" />
            <span className="sidebarlistitemText">Help</span>
          </li>

          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarlistitemText">Work</span>
          </li>

          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarlistitemText">Event</span>
          </li>

          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarlistitemText">School</span>
          </li>


        </ul>
        <button className="sidebarButton">Show more</button>
        <hr  className="sidebarHr"/>
        <ul className="sidebarfriendList">
          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/images.jpeg" alt="" />
            <span className="sidebarfriendName">NAGARJUNA</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/highest-paid-telugu-actors-of-2023-20230412102014-258.jpg" alt="" />
            <span className="sidebarfriendName">ALLU ARJUN</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/image-1024x768.png" alt="" />
            <span className="sidebarfriendName">RAM</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn//images (1).jpeg" alt="" />
            <span className="sidebarfriendName">NARESH</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/jagubhaiposter03052023.jpg" alt="" />
            <span className="sidebarfriendName">JAGAPATHI BABU</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/MV5BMDBhNzk5YjgtMmMyOS00MTcwLWEwYTQtNzhkNTU5ZDQ4OWJmXkEyXkFqcGc@._V1_.jpg" alt="" />
            <span className="sidebarfriendName">VIJAY DEVARAKONDA</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/download (5).jpeg" alt="" />
            <span className="sidebarfriendName">KICCHA SUDEEP</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/download (4).jpeg" alt="" />
            <span className="sidebarfriendName">SHIVA RAJKUMAR</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/download (3).jpeg" alt="" />
            <span className="sidebarfriendName">CHIRANJEEVI</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/download (2).jpeg" alt="" />
            <span className="sidebarfriendName">RAM CHARAN</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/download (1).jpeg" alt="" />
            <span className="sidebarfriendName">GOPICHAND</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/download.jpeg" alt="" />
            <span className="sidebarfriendName">MAHESH BABU</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/download (7).jpeg" alt="" />
            <span className="sidebarfriendName">KAMAL HASSAN</span>
          </li>

          <li className="sidebarFriend">
            <img  className="sidebarfriendImage" src="/src/assets/perosn/download (6).jpeg" alt="" />
            <span className="sidebarfriendName">UPNDRA</span>
          </li>
          
        </ul>

      </div>
    </div>
  )
}

export default SideBar