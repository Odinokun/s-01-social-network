import React from "react";

const Profile = () => {
  return (
    <div className="main-profile profile">
      <div className="profile__top-img">
        <img
          src="https://lh3.googleusercontent.com/proxy/Hv0jyKL_fzr2ygNpOQQ5DQwnhiMZw4gDSy9JsWqxJZuYFzaGd3n2QC2Upq43TP5toBfgd0IBJjOWgzTYjrNkOOwpNw_YSAel9UrZVMzARVYtD5oU-NEY0J463ALde7m0ADMZat05igjZYOYnkTwA-Y3C-WFZDq0"
          alt="peoples"
        />
      </div>

      {/* begin USER */}
      <div className="profile__user profile-user">
        {/* begin AVA */}
        <div className="profile-user__ava">
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg"
            alt="avatar"
          />
        </div>
        {/* end AVA */}

        {/* begin INFO */}
        <div className="profile-user__info">
          <h3 className="profile-user__name">Odinokun</h3>
          <div className="profile-user__text">
            <div className="profile-user__text-row">
              <span>Date of Birth:</span>
              <span>October 19, 1978</span>
            </div>
            <div className="profile-user__text-row">
              <span>City:</span>
              <span>Kyiv</span>
            </div>
            <div className="profile-user__text-row">
              <span>Education</span>
              <span>KUTEP</span>
            </div>
            <div className="profile-user__text-row">
              <span>Website:</span>
              <span>http://odinokun.com/</span>
            </div>
          </div>
        </div>
        {/* end INFO */}
      </div>
      {/* end USER */}

      {/* begin POSTS */}
      <div className="profile__posts profile-posts">
        <h3 className="profile-posts__title">My posts</h3>

        {/* begin POSTS FORM */}
        <form className="profile-posts__form">
          <textarea
            className="profile-posts__textarea"
            cols="30"
            rows="10"
          ></textarea>
          <input
            className="profile-posts__submit"
            type="submit"
            value="Отправить"
          />
        </form>
        {/* end POSTS FORM */}

        {/* begin POSTS ITEMS */}
        <ul className="profile-posts__list">
          <li className="profile-posts__item">
            <div className="profile-posts__ava">
              <img
                src="https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg"
                alt="avatar"
              />
            </div>
            <div className="profile-posts__text">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                quidem consectetur eligendi quam possimus itaque ab magni illo
                dolorem at?
              </span>
            </div>
          </li>
          <li className="profile-posts__item">
            <div className="profile-posts__ava">
              <img
                src="https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg"
                alt="avatar"
              />
            </div>
            <div className="profile-posts__text">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, id?
              </span>
            </div>
          </li>
        </ul>
        {/* end POSTS ITEMS */}
      </div>
      {/* end POSTS */}
    </div>
  );
};

export default Profile;
