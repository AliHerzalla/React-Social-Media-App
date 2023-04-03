import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <div className="flex flex-row gap-2 h-[250px] m-8 ">
      <div className="rounded-lg flex-1 overflow-hidden relative">
        <img
          src={currentUser.profilePicture}
          alt=""
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-[10px] left-[10px] text-white font-[500]">
          {currentUser.name}
        </span>
        <button className="absolute left-[10px] bottom-[40px] text-white bg-[#5271ff] border-none rounded-full w-[30px] h-[30px] cursor-pointer text-[30px] flex items-center justify-center">
          +
        </button>
      </div>
      {stories.map((story) => (
        <div
          className="rounded-lg flex-1 overflow-hidden h-[250px] relative"
          key={story.id}
        >
          <img src={story.img} alt="" className="w-full h-full object-cover" />
          <span className="absolute bottom-[10px] left-[10px] text-white font-[500]">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
