import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';





const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg"  src="/src/assets/perosn/1.jpg" alt="" />
                <input  className="shareInput" placeholder="Whats in your mind?"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon   htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    </div>

                    <div className="shareOption">
                        <LabelImportantIcon   htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                    </div>

                    <div className="shareOption">
                        <RoomIcon   htmlColor="green"     className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotionsIcon   htmlColor="gold"   className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                    <button   className="shareButton" >Share</button>

            </div>
        </div>

    </div>
  )
}

export default Share