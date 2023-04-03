import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      <div className="write flex items-center justify-between my-5 gap-5">
        <img
          src={currentUser.profilePicture}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="write a comment"
          className="flex-1 p-2 border outline-none rounded-lg"
        />
        <button className="border-none text-white bg-[#5271ff] p-2 cursor-pointer rounded-lg">
          Send
        </button>
      </div>
      {comments.map((comment) => (
        <div className="comment my-[30px] flex justify-between gap-5">
          <img
            src={comment.profilePicture}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="info flex-[5] flex flex-col gap-1 items-start">
            <span className="font-[500]">{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date flex-1 self-center text-gray-500 text-[12px]">
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
