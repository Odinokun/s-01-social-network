import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <li className={s.item}>
      <div className={s.ava}>
        <img
          src="https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg"
          alt="avatar"
        />
      </div>
      <div className={s.text}>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, id?
        </span>
      </div>
    </li>
  );
};

export default Post;
