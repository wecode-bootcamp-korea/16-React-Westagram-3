import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      isHide: true,
      searchData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/searchdata.json", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          searchData: res.search_data,
        });
      });
  }

  clickHandler = () => {
    this.setState({
      isHide: !this.state.isHide,
    });
  };

  inputHandler = (evt) => {
    this.setState({
      inputVal: evt.target.value,
    });
  };

  render() {
    const { searchData, inputVal } = this.state;
    const validSearchBox = inputVal.length > 0;
    const validSearchResult =
      searchData.filter((data) => data.userId.includes(inputVal)).length > 0;

    return (
      <header className="navbar">
        <nav className="navContainer">
          <h1 className="logo">
            <a href="#">Westagram</a>
          </h1>
          <div className="searchBar" id="searchArea">
            <input
              onChange={this.inputHandler}
              className="searchInput"
              type="text"
              placeholder="검색"
            />
            <img
              className="searchIcon"
              src="/images/Minsun/loupe.png"
              alt="search"
            />
            <div className={validSearchBox ? "searchBox" : "searchBox hide"}>
              <ul className="searchBoxList">
                {validSearchResult ? (
                  searchData
                    .filter((data) => data.userId.includes(inputVal))
                    .map((data) => {
                      return (
                        <li className="searchBoxItem">
                          <a href="#">
                            <img src={data.imgUrl} />
                            <div className="accountInfoContainer">
                              <p className="searchId">{data.userId}</p>
                              <span>{data.userName}</span>
                            </div>
                          </a>
                        </li>
                      );
                    })
                ) : (
                  <li className="searchBoxItem">
                    <a href="#">
                      <span className="noneOfResult">
                        검색 결과가 없습니다.
                      </span>
                    </a>
                  </li>
                )}
              </ul>
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
                  onClick={this.clickHandler}
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
                <div
                  className={
                    this.state.isHide ? "profileMenuBox hide" : "profileMenuBox"
                  }
                  id="downMenu"
                >
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
