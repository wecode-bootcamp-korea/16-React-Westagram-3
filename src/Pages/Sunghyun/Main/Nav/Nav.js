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
              <img alt="home" src="../images/Sunghyun/home.png" />
            </li>
            <li>
              <img alt="message" src="../images/Sunghyun/airplane.png" />
            </li>
            <li>
              <img alt="explore" src="../images/Sunghyun/explore.png" />
            </li>
            <li>
              <img alt="heart" src="../images/Sunghyun/heart.png" />
            </li>
            <li>
              <img
                className="profilePic"
                alt="profile button"
                src="../images/Sunghyun/me.jpg"
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
