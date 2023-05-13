import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import "./css/Feed.css";
import Post from "./Post"
import axios from "axios";
import backendUrl from "../link";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
   /* const backendUrl = backendUrl*/
    axios
      .get(`${backendUrl}/api/questions`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="feed">
      <QuoraBox />
    
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    {/* < Post /> */}
    </div>
  );
}

export default Feed;