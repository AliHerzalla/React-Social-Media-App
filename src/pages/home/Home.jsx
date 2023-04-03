import React from "react";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";

const Home = () => {
  return (
    <div className="flex-[6] h-screen scroll-smooth">
      <Stories />
      <Posts />
    </div>
  );
};

export default Home;
