import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const { darkMode, changeDarkMode } = useContext(DarkModeContext);
  const { currentUser, login } = useContext(AuthContext);

  return (
    <header
      className={`flex flex-row justify-between items-center py-3 px-5 border-b border-[lightgray] border-solid sticky top-0 z-50 bg-white`}
    >
      <div className="flex items-center gap-7 duration-500 transition-all">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="font-bold text-[20px] text-[darkblue]">
            Ali's Social
          </span>
        </Link>
        <HomeOutlinedIcon className="cursor-pointer" />
        {darkMode === false ? (
          <DarkModeOutlinedIcon
            className="cursor-pointer"
            onClick={changeDarkMode}
          />
        ) : (
          <WbSunnyOutlinedIcon
            className="cursor-pointer"
            onClick={changeDarkMode}
          />
        )}

        <GridViewOutlinedIcon className="cursor-pointer" />
        <form
          action=""
          method="get"
          className="border rounded-lg flex items-center gap-3 border-[lightgray] outline-none p-1"
        >
          <SearchOutlinedIcon />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="outline-none md:w-[500px] w-[100px]"
          />
        </form>
      </div>

      <div className="flex items-center gap-7">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="flex flex-row items-center gap-1 border-2 p-[8px] rounded-full font-[500]">
          <img
            src={currentUser.profilePicture}
            alt="User"
            className="w-[30px] h-[30px] rounded-full "
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
