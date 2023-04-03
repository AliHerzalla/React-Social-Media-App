import React, { useContext } from "react";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
  const { currentUser, login } = useContext(AuthContext);

  let navImages = [
    { img: Friends, text: "Friends" },
    { img: Groups, text: "Groups" },
    { img: Market, text: "Market" },
    { img: Watch, text: "Watch" },
    { img: Memories, text: "Memories" },
  ];
  let shortCuts = [
    { img: Events, text: "Events" },
    { img: Gaming, text: "Gaming" },
    { img: Gallery, text: "Gallery" },
    { img: Videos, text: "Videos" },
    { img: Messages, text: "Messages" },
  ];
  let others = [
    { img: Tutorials, text: "Tutorials" },
    { img: Courses, text: "Courses" },
    { img: Fund, text: "Fund" },
  ];
  return (
    <nav className="flex-[2] sticky left-0 top-[70px] overflow-y-auto  scroll-smooth h-[calc(100vh-70px)]">
      <div className="p-5">
        <div className="flex flex-col gap-5">
          {/* user */}
          <div className="flex flex-row items-center gap-2">
            <img
              src={currentUser.profilePicture}
              alt="User"
              className="w-[30px] h-[30px] rounded-full"
            />
            <span className="text-[14px]">{currentUser.name}</span>
          </div>
          {/* items... */}
          {navImages.map((img) => (
            <div key={img.text} className="flex items-center gap-2">
              <img src={img.img} alt={img.text} className="w-[30px] h-[30px]" />
              <span>{img.text}</span>
            </div>
          ))}
        </div>
        <hr className="my-[20px] border-none h-[0.5px] bg-[lightgray]" />
        <div className="flex flex-col gap-5">
          <span className="text-[14px]">Your shortcuts</span>
          {shortCuts.map((img) => (
            <div key={img.text} className="flex items-center gap-2">
              <img src={img.img} alt={img.text} className="w-[30px] h-[30px]" />
              <span>{img.text}</span>
            </div>
          ))}
        </div>
        <hr className="my-[20px] border-none h-[0.5px] bg-[lightgray]" />
        <div className="flex flex-col gap-5">
          <span className="text-[14px]">Others</span>
          {others.map((img) => (
            <div key={img.text} className="flex items-center gap-2">
              <img src={img.img} alt={img.text} className="w-[30px] h-[30px]" />
              <span className="">{img.text}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LeftBar;
