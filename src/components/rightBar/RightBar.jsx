import React from "react";

const RightBar = () => {
  return (
    <nav className="flex-[3] sticky right-0 top-[70px] overflow-y-auto  scroll-smooth h-[calc(100vh-70px)]">
      {/* Container v */}
      <div className="p-5 space-y-5">
        {/* Item v */}
        <div className="shadow-md drop-shadow-lg p-4 bg-gray-50 rounded-md">
          <span className="text-gray-400">Suggestions For You</span>
          {/* User v */}
          <div className="flex flex-row items-center justify-between p-2">
            {/* User Info v */}
            <div className="gap-1 flex flex-row items-center">
              <img
                src="https://cdn140.picsart.com/317296027220201.jpg?to=crop&type=webp&r=1456x2184&q=85"
                alt="Profile"
                className="w-[30px] h-[30px] rounded-full"
              />
              <span className="font-[500]">Jane Doa</span>
            </div>
            {/* User Buttons v */}
            <div className="gap-1 flex flex-row items-center text-sm">
              <button className=" rounded-lg bg-blue-400  hover:bg-blue-500 px-2 py-[3px] transition-all duration-150 outline-none border-none">
                Follow
              </button>
              <button className=" rounded-lg bg-red-400  hover:bg-red-500 px-2 py-[3px] transition-all duration-150 outline-none border-none">
                Dismiss
              </button>
            </div>
          </div>
        </div>

        {/* Item v */}
        <div className="shadow-md drop-shadow-lg p-4 bg-gray-50 rounded-md">
          <span className="text-gray-400">Latest Activities</span>
          {/* User v */}
          <div className="flex flex-row items-center justify-between p-2 gap-2">
            {/* User Info v */}
            <div className="flex flex-row gap-1">
              <img
                src="https://cdn140.picsart.com/317296027220201.jpg?to=crop&type=webp&r=1456x2184&q=85"
                alt="Profile"
                className="w-[30px] h-[30px] rounded-full flex-shrink-0"
              />
              <div className="text-gray-600 w-full text-sm">
                <span className="text-black font-bold">Jone shong</span>{" "}
                <span>
                  changed their cover picture ali is her and he dose not need to
                  go outside right now soo please go and don't come again man.
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-600">1 min ago</span>
          </div>
        </div>

        {/* Item v */}
        <div className="shadow-md drop-shadow-lg p-4 bg-gray-50 rounded-md">
          <span>Online Friends</span>
          {/* User v */}
          <div className="flex flex-row items-center justify-between p-2 gap-2">
            {/* User Info v */}
            <div className="flex flex-row gap-1 items-center relative">
              <img
                src="https://cdn140.picsart.com/317296027220201.jpg?to=crop&type=webp&r=1456x2184&q=85"
                alt="Profile"
                className="w-[30px] h-[30px] rounded-full flex-shrink-0"
              />
              <div className="bg-lime-500 w-[12px] h-[12px] rounded-full absolute bottom-0 left-[20px] border-2 border-white" />
              <div className="text-gray-600 w-full text-sm">
                <span className="text-black font-bold">Jone shong</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RightBar;
