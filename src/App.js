import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      {/* begin HEADER */}
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          alt="logo"
        />
      </header>
      {/* end HEADER */}

      {/* begin ASIDE */}
      <aside className="aside">
        {/* begin NAV */}
        <nav>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
          </ul>
        </nav>
        {/* end NAV */}

        <a href="#">Settings</a>
      </aside>
      {/* end ASIDE */}

      {/* begin MAIN */}
      <main className="main">
        <div className="main__top-img">
          <img
            src="https://lh3.googleusercontent.com/proxy/Hv0jyKL_fzr2ygNpOQQ5DQwnhiMZw4gDSy9JsWqxJZuYFzaGd3n2QC2Upq43TP5toBfgd0IBJjOWgzTYjrNkOOwpNw_YSAel9UrZVMzARVYtD5oU-NEY0J463ALde7m0ADMZat05igjZYOYnkTwA-Y3C-WFZDq0"
            alt="peoples"
          />
        </div>

        {/* begin USER */}
        <div className="main__user main-user">
          {/* begin AVA */}
          <div className="main-user__ava">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg"
              alt="avatar"
            />
          </div>
          {/* end AVA */}

          {/* begin INFO */}
          <div className="main-user__info">
            <h3 className="main-user__name">Odinokun</h3>
            <div className="main-user__text">
              <div className="main-user__text-row">
                <span>Date of Birth:</span>
                <span>October 19, 1978</span>
              </div>
              <div className="main-user__text-row">
                <span>City:</span>
                <span>Kyiv</span>
              </div>
              <div className="main-user__text-row">
                <span>Education</span>
                <span>KUTEP</span>
              </div>
              <div className="main-user__text-row">
                <span>Website:</span>
                <span>http://odinokun.com/</span>
              </div>
            </div>
          </div>
          {/* end INFO */}
        </div>
        {/* end USER */}

        {/* begin POSTS */}
        <div className="main__posts main-posts">
          <h3 className="main-posts__title">My posts</h3>

          {/* begin POSTS FORM */}
          <form className="main-posts__form">
            <textarea
              className="main-posts__textarea"
              cols="30"
              rows="10"
            ></textarea>
            <input
              className="main-posts__submit"
              type="submit"
              value="Отправить"
            />
          </form>
          {/* end POSTS FORM */}

          {/* begin POSTS ITEMS */}
          <ul className="main-posts__list">
            <li className="main-posts__item">
              <div className="main-posts__ava">
                <img
                  src="https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg"
                  alt="avatar"
                />
              </div>
              <div className="main-posts__text">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere quidem consectetur eligendi quam possimus itaque ab
                  magni illo dolorem at?
                </span>
              </div>
            </li>
            <li className="main-posts__item">
              <div className="main-posts__ava">
                <img
                  src="https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg"
                  alt="avatar"
                />
              </div>
              <div className="main-posts__text">
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
      </main>
      {/* end MAIN */}
    </div>
  );
};

export default App;
