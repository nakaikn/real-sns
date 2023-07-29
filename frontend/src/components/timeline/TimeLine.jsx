import React, { useState, useEffect } from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../Post/Post";
//import { Posts } from "../../dammyData";
import axios from "axios";

export default function TimeLine() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/64b3510ad11f54671109bdb9"
      );
      console.log(response);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {
          //Posts.map((post) => (
          // <Post post={post} key={post.id} />
          //))
        }
      </div>
    </div>
  );
}
