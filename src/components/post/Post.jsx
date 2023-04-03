import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;

  return (
    <div className="post rounded-3xl shadow-2xl drop-shadow-md bg-gray-100">
      <div className="container p-5 ">
        <div className="user flex items-center justify-between">
          <div className="userInfo flex gap-5 items-center">
            <img
              src={post.profilePic}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="details flex flex-col">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name font-[500]">{post.name}</span>
              </Link>
              <span className="date text-[12px]">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content my-5">
          <p>{post.desc}</p>
          <img
            src={post.img}
            alt=""
            className="w-full max-h-[500px] object-cover mt-5"
          />
        </div>
        <div className="info flex items-center justify-around">
          <div className="item flex items-center gap-1 cursor-pointer">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div
            className="item flex items-center gap-1 cursor-pointer"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item flex items-center gap-1 cursor-pointer">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
