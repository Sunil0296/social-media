import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { Posts } from "../../pages/home/dummyData"

const feed = () => {
  return (
    <div className='feed'>
    <div className="feedWrapper">
    <Share/>
   {Posts.map((p)=>(
    <Post  key={p.id}  Post={p}  />
   ))}
  



  </div>

    </div>
  )
}

export default feed