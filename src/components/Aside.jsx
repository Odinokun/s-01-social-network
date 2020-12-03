import React from "react";

const Aside = () => {
  return (
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
  );
};

export default Aside;
