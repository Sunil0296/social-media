import "./rightbar.css"

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rigthbarWrapper">
        <div className="birthdayContainer">
          <img  className="birthdayImage" src="/src/assets/White-gift-box-with-red-bow-premium-vector-PNG.png" alt="" />
          <span  className="birthdayText"><b>Nagarjuna</b> and <b>3 other friends</b> having birthday today!</span>
        </div>
        <img className="rightbarAd"  src="/src/assets/perosn/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarfriendsList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImageContainer">
            <img className="rightbarprofileImg"  src="/src/assets/perosn/highest-paid-telugu-actors-of-2023-20230412102014-258.jpg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">Allu Arjun</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImageContainer">
            <img className="rightbarprofileImg"  src="/src/assets/perosn/download (5).jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">Sudeep</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImageContainer">
            <img className="rightbarprofileImg"  src="/src/assets/perosn/download (7).jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">Kamal Hassan</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImageContainer">
            <img className="rightbarprofileImg"  src="/src/assets/perosn/download.jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">Mahesh Babu</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImageContainer">
            <img className="rightbarprofileImg"  src="/src/assets/perosn/download (4).jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">ShivarajKumar</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImageContainer">
            <img className="rightbarprofileImg"  src="/src/assets/perosn/download (1).jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">GopiChand</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImageContainer">
            <img className="rightbarprofileImg"  src="/src/assets/perosn/images (1).jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">Allari Naresh</span>
        </li>

        <li className="rightbarFriend">
          <div className="rightbarProfileImageContainer">
            <img className="rightbarprofileImg"  src="/src/assets/perosn/images.jpeg" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">Akkineni Nagarjuna</span>
        </li>
      </ul>

      </div>



    </div>
  )
}

export default RightBar