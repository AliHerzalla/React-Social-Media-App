import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { currentUser, login } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-full bg-[#C3BEFF]">
      <div className="flex items-center w-1/2 bg-white rounded-xl overflow-hidden">
        <div className="flex-1 w-1/2 h-full bg-[url('https://cdn130.picsart.com/317295834221201.jpg?to=crop&type=webp&r=1456x2184&q=85')] bg-cover min-h-[600px] bg-center p-[50px] flex flex-col gap-[30px] text-white">
          <h1 className="text-[100px] leading-[100px] font-bold">
            Hello World.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="bg-[rebeccapurple] rounded-lg w-fit p-3 hover:bg-[white]/80 hover:text-[rebeccapurple] transition-all duration-300 font-bold">
            Don't you have an account?
          </span>

          <button className="w-1/2 p-[10px] border-none bg-white text-[rebeccapurple] font-bold cursor-pointer hover:bg-[rebeccapurple]/80 hover:text-white rounded-lg transition-all duration-300">
            <Link to={"/register"} className="w-full block">
              Register
            </Link>
          </button>
        </div>
        <div className="flex-1 w-1/2 h-full p-[50px] flex flex-col gap-[50px]">
          <h1 className="text-[#555] text-[50px] font-semibold">Login</h1>
          <form className="flex flex-col gap-[30px]">
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className="input"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="input"
            />
            <button
              className="w-1/2 p-2 border-none bg-[#938eef] text-white rounded-lg hover:bg-[#5f5abe] hover:scale-110 transition-all duration-150 font-semibold outline-none"
              onClick={login}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
