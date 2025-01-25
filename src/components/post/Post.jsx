import { Posts } from "../../pages/home/dummyData";
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';



const Post = (Post) => {
    console.log(Post);
    
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img  className="postProfileImg"  src="/src/assets/perosn/1.jpg" alt="" />
                    <span className="postUserName">Nani</span>
                    <span className="postDate">{Posts.date}</span>

                </div>
                <div className="postTopRight"></div>
                <MoreVertIcon/> 
            </div>
            <div className="postCentre">
                <span className="postText">{Post?.desc}</span>
                <img className="postImg"  src={Post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postButtonLeft">
                    <img className="likeIcon"  src="/src/assets/Icon-like-button-transparent-PNG.png" alt="" />
                    <img className="likeIcon"  src="/src/assets/pngwing.com.png" alt="" />
                    <span className="postLikeCounter">{Post.like}people liked it</span>

                </div>

                <div className="postButtonRight">
                    <span className="postCommentText">{Post.comment}comments</span>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Post