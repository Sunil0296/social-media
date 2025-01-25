import SideBar from "../../components/SideBar/SideBar"
import Topbar from "../../components/topbar/Topbar"
import RightBar from "../../components/rightBar/RightBar"
import Feed from "../../components/feed/Feed"

import "./Home.css"

const Home = () => {
  return (
    <>
        <Topbar/>
        <div className="homeContainer">
        <SideBar/>
       <Feed/>
        <RightBar/>
        </div>
      
    </>
  )
}

export default Home