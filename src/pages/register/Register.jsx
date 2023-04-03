import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-full bg-[#C3BEFF]">
      <div className="flex items-center w-1/2 bg-white rounded-xl overflow-hidden flex-row-reverse">
        <div className="flex-1 w-1/2 h-full bg-[url('https://cdn140.picsart.com/317296027220201.jpg?to=crop&type=webp&r=1456x2184&q=85')] bg-cover min-h-[600px] bg-center p-[50px] flex flex-col gap-[30px] text-white">
          <h1 className="text-[100px] leading-[100px] font-bold">
            Ali's Social.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="bg-[rebeccapurple] rounded-lg w-fit p-3 hover:bg-[white]/80 hover:text-[rebeccapurple] transition-all duration-300 font-bold">
            Do you have an account?
          </span>

          <button className="w-1/2 p-[10px] border-none bg-white text-[rebeccapurple] font-bold cursor-pointer hover:bg-[rebeccapurple]/80 hover:text-white rounded-lg transition-all duration-300">
            <Link to={"/login"} className="w-full block">
              Login
            </Link>
          </button>
        </div>
        <div className="flex-1 w-1/2 h-full p-[50px] flex flex-col gap-[20px]">
          <h1 className="text-[#555] text-[50px] font-semibold">Register</h1>
          <form className="flex flex-col gap-[15px]">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="input"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="input"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="input"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Re-password"
              className="input"
            />

            <button className="w-1/2 p-2 border-none bg-[#938eef] text-white rounded-lg hover:bg-[#5f5abe] hover:scale-110 transition-all duration-150 font-semibold outline-none">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
