import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <header className="navbar">
        <nav className="navContainer">
          <h1 className="logo">
            <a href="#">Westagram</a>
          </h1>
          <div className="searchBar" id="searchArea">
            <input className="searchInput" type="text" placeholder="검색" />
            <img
              className="searchIcon"
              src="/images/Minsun/loupe.png"
              alt="search"
            />
            <div className="searchBox hide">
              <ul className="searchBoxList"></ul>
            </div>
          </div>
          <div className="navMenu">
            <ul className="menu">
              <li className="menuItems">
                <a href="#">
                  <img src="/images/Minsun/home.png" alt="home" />
                </a>
              </li>
              <li className="menuItems">
                <a href="#">
                  <img src="/images/Minsun/send.png" alt="send message" />
                </a>
              </li>
              <li className="menuItems">
                <a href="#">
                  <img src="/images/Minsun/explore.png" alt="explore" />
                </a>
              </li>
              <li className="menuItems">
                <a href="#">
                  <img src="/images/Minsun/heart.png" alt="heart" />
                </a>
              </li>
              <li className="menuItems">
                <button
                  className="accountInfoBtn"
                  id="profileBtn"
                  type="button"
                >
                  <img
                    className="profileImg"
                    src="/images/Minsun/profile.jpg"
                    alt="profile"
                  />
                </button>
                <div className="profileMenuBox hide" id="downMenu">
                  <a className="menuBoxItem" href="#">
                    <img
                      className="menuBoxIcon"
                      src="/images/Minsun/account.png"
                      alt="profile"
                    />
                    프로필
                  </a>
                  <a className="menuBoxItem" href="#">
                    <img
                      className="menuBoxIcon"
                      src="/images/Minsun/bookmark.png"
                      alt="bookmark"
                    />
                    저장됨
                  </a>
                  <a className="menuBoxItem" href="#">
                    <img
                      className="menuBoxIcon"
                      src="/images/Minsun/settings.png"
                      alt="settings"
                    />
                    설정
                  </a>
                  <a className="menuBoxItem" href="#">
                    <img
                      className="menuBoxIcon"
                      src="/images/Minsun/switch.png"
                      alt="switch"
                    />
                    계정 전환
                  </a>
                  <a className="menuBoxItem" href="#">
                    로그아웃
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
