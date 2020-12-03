import React from "react";
import Form from "../Form/Form";
import Post from "../Post/Post";
import s from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={s.posts}>
      <h3 className={s.title}>My posts</h3>

      <Form />

      {/* begin POSTS ITEMS */}
      <ul className={s.list}>
        <Post />
        <Post />
        <Post />
      </ul>
      {/* end POSTS ITEMS */}
    </div>
  );
};

export default Posts;
