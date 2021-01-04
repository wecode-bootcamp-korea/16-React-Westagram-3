import React from "react";
import "./Nav.scss";

const SEARCH_DATAS = [
  {
    id: 0,
    userId: "moonjungwon",
    userName: "문정원",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/131999852_691820884851451_676644135174423410_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=CO1Fs0hDsIEAX9tyC1q&tp=1&oh=a1f011ccce35fac066ad4e58ef3684e0&oe=60115A3E",
  },
  {
    id: 1,
    userId: "wedapluggrecords",
    userName: "WEDAPLUGG RECORDS",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/83272907_834230477014689_2552974207654821888_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=s1OrJSj7t9IAX_l9896&tp=1&oh=6e3d3f4f5b87eaf49b75c3040f392f83&oe=6010446B",
  },
  {
    id: 2,
    userId: "wecanrun_officail",
    userName: "위캔런코리아",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/132093215_744431506161903_7154338458712395268_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xZrRqkTTJwwAX-TQc9o&tp=1&oh=5c02089e9483449c7d47c40e8403a9c5&oe=600FE660",
  },
  {
    id: 3,
    userId: "wecode_bootcamp",
    userName: ">wecode | 위코드",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pHGOsRYRKv0AX9MjtG3&tp=1&oh=61669ec622c76c7c5c844e8b0ad8dd17&oe=601131F0",
  },
  {
    id: 4,
    userId: "wecode_founder",
    userName: "송은우 (Eun Woo Song)",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/118404165_231868348195869_8580469197286780227_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=DRFc7USKRoQAX8Xld3z&tp=1&oh=e0cea04c1b025013da0982490d5e1351&oe=6010B5E2",
  },
  {
    id: 5,
    userId: "we__code_",
    userName: "WE CODE",
    imgUrl:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/118198537_171278331152188_6203529355182388111_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=mUl9skTkYiwAX9v1Hsw&tp=1&oh=56f20bd0f54a32fb16074f19b810a804&oe=60117FB9",
  },
];
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      isHide: true,
    };
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
    return (
      <header className="navbar">
        <nav className="navContainer">
          <h1 className="logo">
            <a href="#">Westagram</a>
          </h1>
          <div className="searchBar" id="searchArea">
            <input
              onChnage={this.inputHandler}
              className="searchInput"
              type="text"
              placeholder="검색"
            />
            <img
              className="searchIcon"
              src="/images/Minsun/loupe.png"
              alt="search"
            />
            <div className="searchBox">
              <ul className="searchBoxList">
                {/* {SEARCH_DATAS.map((data) => {
                  if (data.userId.includes(this.state.inputVal)) {
                    return (
                      <li class="searchBoxItem">
                        <a href="#">
                          <img src={data.imgUrl} />
                          <div class="accountInfoContainer">
                            <p class="searchId">{data.userId}</p>
                            <span>{data.userName}</span>
                          </div>
                        </a>
                      </li>
                    );
                  }
                })} */}
                {/* {SEARCH_DATAS.filter((data) => {
                  return data.userId.includes(this.state.inputVal);
                }).map((data) => {
                  return (
                    <li class="searchBoxItem">
                      <a href="#">
                        <img src={data.imgUrl} />
                        <div class="accountInfoContainer">
                          <p class="searchId">{data.userId}</p>
                          <span>{data.userName}</span>
                        </div>
                      </a>
                    </li>
                  );
                })} */}
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
