import React from "react";
import Form from "./Form/Form";
import Post from "./Post/Post";
import Posts from "./Posts/Posts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.banner}>
        <img
          src="https://lh3.googleusercontent.com/proxy/Hv0jyKL_fzr2ygNpOQQ5DQwnhiMZw4gDSy9JsWqxJZuYFzaGd3n2QC2Upq43TP5toBfgd0IBJjOWgzTYjrNkOOwpNw_YSAel9UrZVMzARVYtD5oU-NEY0J463ALde7m0ADMZat05igjZYOYnkTwA-Y3C-WFZDq0"
          alt="peoples"
        />
      </div>

      {/* begin USER */}
      <div className={s.user}>
        {/* begin AVA */}
        <div className={s.ava}>
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg"
            alt="avatar"
          />
        </div>
        {/* end AVA */}

        {/* begin INFO */}
        <div className={s.info}>
          <h3 className={s.name}>Odinokun</h3>
          <div className={s.descr}>
            <div className={s.row}>
              <span>Date of Birth:</span>
              <span>October 19, 1978</span>
            </div>
            <div className={s.row}>
              <span>City:</span>
              <span>Kyiv</span>
            </div>
            <div className={s.row}>
              <span>Education</span>
              <span>KUTEP</span>
            </div>
            <div className={s.row}>
              <span>Website:</span>
              <span>http://odinokun.com/</span>
            </div>
          </div>
        </div>
        {/* end INFO */}
      </div>
      {/* end USER */}

      <Posts />
    </div>
  );
};

export default Profile;
