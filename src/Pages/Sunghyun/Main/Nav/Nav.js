import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="navWrap">
          <p className="logo">westagram</p>
          <div className="searchWrap">
            <input type="text" className="searchBar" placeholder="검색" />
            <img
              className="searchBarImg"
              src="../images/Sunghyun/search.png"
              alt="search bar"
            />
          </div>
          <ul className="nav_menus">
            <li>
              <img src="../images/Sunghyun/home.png" alt="home" />
            </li>
            <li>
              <img src="../images/Sunghyun/airplane.png" alt="message" />
            </li>
            <li>
              <img src="../images/Sunghyun/explore.png" alt="explore" />
            </li>
            <li>
              <img src="../images/Sunghyun/heart.png" alt="heart" />
            </li>
            <li>
              <img
                className="profilePic"
                src="../images/Sunghyun/me.jpg"
                alt="profile button"
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
