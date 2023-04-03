import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile flex-[6]">
      <div className="images w-full h-[300px] relative">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic w-[200px] h-[200px] absolute rounded-full left-0 right-0 m-auto top-[200px]"
        />
      </div>
      <div className="profileContainer py-[70px] px-[20px]">
        <div className="uInfo h-[180px] shadow-xl rounded-[20px] p-12 flex items-center justify-between mb-5">
          <div className="left flex-1 flex items-center gap-2">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center flex-1 flex items-center justify-between flex-col ">
            <span>Jane Doe</span>
            <div className="info flex gap-2 items-center justify-around w-full">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>lama.dev</span>
              </div>
            </div>
            <button className="border-none bg-[#5271ff] text-white px-[20px] py-[10px] rounded-[5px] cursor-pointer">
              follow
            </button>
          </div>
          <div className="right flex justify-end items-center flex-1 gap-2">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
