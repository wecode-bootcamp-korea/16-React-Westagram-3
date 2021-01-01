import React from "react";
import "./Main.scss";

class MainMinsun extends React.Component {
  render() {
    return (
      <div className="Main">
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
        <main className="feedContainer">
          <div className="mainLeftContainer">
            <section className="storyFeeds">
              <ul className="storyLists">
                <li className="storyItems">
                  <a href="#">
                    <div className="activeStory">
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/110054169_631618667480471_8395309931424378448_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=APx1rWNWYaEAX98bol-&tp=1&oh=3b2ebfd3eeb40ba096e24fc8460adfd8&oe=600B7BE1"
                        alt="kendalljenner profile"
                      />
                    </div>
                    <p>kendalljenner</p>
                  </a>
                </li>
                <li className="storyItems">
                  <a href="#">
                    <div className="activeStory">
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/118803455_120863839516646_4281183625374452390_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=vv_HPTQckqUAX_f8opF&tp=1&oh=c1035e34f64ace8190c0a90e23770678&oe=60090684"
                        alt="justinbieber profile"
                      />
                    </div>
                    <p>justinbieber</p>
                  </a>
                </li>
                <li className="storyItems">
                  <a href="#">
                    <div className="activeStory">
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/118550039_182034303327791_6144105614706839563_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=og4Syra4QF8AX9A8CYh&tp=1&oh=4f0374067a6480d8b670ba1426fe9510&oe=600AF2F4"
                        alt="katyperry profile"
                      />
                    </div>
                    <p>katyperry</p>
                  </a>
                </li>
                <li className="storyItems">
                  <a href="#">
                    <div className="activeStory">
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/123885563_855075811697113_8647373123046258603_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=q-beqDUMLUAAX9MQ5Lp&tp=1&oh=12a89c666ae0088df7c8984d0b529b7d&oe=600ACF52"
                        alt="kyliejenner profile"
                      />
                    </div>
                    <p>kyliejenner</p>
                  </a>
                </li>
                <li className="storyItems">
                  <a href="#">
                    <div className="activeStory">
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/109136688_610125179899980_1868015297406610141_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=z_ukZiTl20IAX-Y6DRI&tp=1&oh=85e566ac5a9f138758214123fd849dea&oe=600BFC22"
                        alt="kimkardashian profile"
                      />
                    </div>
                    <p>kimkardashi...</p>
                  </a>
                </li>
              </ul>
            </section>
            <article className="mainFeeds" id="feed1">
              <div className="mainFeedProfile">
                <a href="#">
                  <img
                    className="profileImg"
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/110054169_631618667480471_8395309931424378448_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=APx1rWNWYaEAX98bol-&tp=1&oh=3b2ebfd3eeb40ba096e24fc8460adfd8&oe=600B7BE1"
                    alt="kendalljenner profile"
                  />
                </a>
                <a className="userId" href="#">
                  kendalljenner
                </a>
                <button className="moreBtn" type="button">
                  <img src="/images/Minsun/more.png" alt="mores" />
                </button>
              </div>
              <div className="feedImg">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/130871044_2745672262348583_7997894274575437350_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=ZtLhZ_71Iw8AX9AQ5_L&tp=1&oh=f79942be376e6d530bf8cc8fd8b69abf&oe=600A6446"
                  alt="feed"
                />
              </div>
              <div className="feedInfoContainer">
                <div className="feedBtns">
                  <button className="feedBtn" type="button">
                    <img src="/images/Minsun/heart.png" alt="like" />
                  </button>
                  <button className="feedBtn" type="button">
                    <img
                      src="/images/Minsun/comment-white-oval-bubble.png"
                      alt="message"
                    />
                  </button>
                  <button className="feedBtn" type="button">
                    <img src="/images/Minsun/send.png" alt="send message" />
                  </button>
                  <button className="feedBtn" type="button">
                    <img src="/images/Minsun/bookmark.png" alt="bookmark" />
                  </button>
                </div>
                <div className="feedContent">
                  <p className="likedUserInfo">
                    <a href="#">
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/123885563_855075811697113_8647373123046258603_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=q-beqDUMLUAAX9MQ5Lp&tp=1&oh=12a89c666ae0088df7c8984d0b529b7d&oe=600ACF52"
                        alt="kyliejenner profile"
                      />
                    </a>
                    <button className="userId" type="button">
                      kyliejenner
                    </button>
                    님<button type="button">외 3,135,768명</button>이
                    좋아합니다.
                  </p>
                  <p className="postedUserInfo">
                    <button className="userId" type="button">
                      kendalljenner
                    </button>
                    Secret to my smile
                    <a href="#">@moon</a>
                    <a href="#">#moon-partner ❄️</a>
                  </p>
                </div>
                <button className="moreCommentsBtn" type="button">
                  댓글 11,299개 모두 보기
                </button>
                <div className="feedComments">
                  <ul className="commentsList" id="list1">
                    <li className="commentItem">
                      <a className="userId" href="#">
                        nameauction
                      </a>
                      <p>Happly New Year✨🎄🌝</p>
                      <button className="addLikeToCommentBtn" type="button">
                        <img src="/images/Minsun/heart.png" alt="like" />
                      </button>
                    </li>
                    <li className="commentItem">
                      <a className="userId" href="#">
                        dudagraziii
                      </a>
                      <p>Goddess 😍</p>
                      <button className="addLikeToCommentBtn" type="button">
                        <img
                          className="liked"
                          src="/images/Minsun/heart.png"
                          alt="like"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
                <span className="postedDate">5일 전</span>
              </div>
              <div className="commentContainer">
                <form className="commentForm" action="#">
                  <div className="commnetForm">
                    <input
                      className="commentInput"
                      id="input1"
                      type="text"
                      placeholder="댓글 달기..."
                    />
                    <button
                      className="commentBtn"
                      id="btn1"
                      type="submit"
                      disabled
                    >
                      게시
                    </button>
                  </div>
                </form>
              </div>
            </article>
            <article className="mainFeeds" id="feed2">
              <div className="mainFeedProfile">
                <a href="#">
                  <img
                    className="profileImg"
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/28156252_202954810453161_1736762118826360832_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=NrF5WDzLS9IAX9fXVRS&tp=1&oh=fd8581d231e523ed6e4e8bb879e85eb2&oe=600B1018"
                    alt="bestvacations profile"
                  />
                </a>
                <a className="userId" href="#">
                  bestvacations
                </a>
                <button className="moreBtn" type="button">
                  <img src="/images/Minsun/more.png" alt="mores" />
                </button>
              </div>
              <div className="feedImg">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/131913695_210192177266401_1385500136233166656_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=wr6qUBRdBBwAX94-C4Q&tp=1&oh=0b444c342c450d52bd45b54c7400b48d&oe=600CB737"
                  alt="feed"
                />
              </div>
              <div className="feedInfoContainer">
                <div className="feedBtns">
                  <button className="feedBtn" type="button">
                    <img src="/images/Minsun/heart.png" alt="like" />
                  </button>
                  <button className="feedBtn" type="button">
                    <img
                      src="/images/Minsun/comment-white-oval-bubble.png"
                      alt="message"
                    />
                  </button>
                  <button className="feedBtn" type="button">
                    <img src="/images/Minsun/send.png" alt="send message" />
                  </button>
                  <button className="feedBtn" type="button">
                    <img src="/images/Minsun/bookmark.png" alt="bookmark" />
                  </button>
                </div>
                <div className="feedContent">
                  <p className="likedUserInfo">
                    <button type="button">좋아요 82,704개</button>
                  </p>
                  <p className="postedUserInfo">
                    <button className="userId" type="button">
                      bestvacations
                    </button>
                    Dreaming of Christmas in NYC ❄️...
                    <button className="moreCommentsBtn" type="button">
                      더 보기
                    </button>
                  </p>
                </div>
                <button className="moreCommentsBtn" type="button">
                  댓글 11,299개 모두 보기
                </button>
                <div className="feedComments">
                  <ul className="commentsList" id="list2">
                    <li className="commentItem">
                      <a className="userId" href="#">
                        rubyperez21
                      </a>
                      <p>
                        <a className="taged" href="#">
                          @emiedray
                        </a>
                      </p>
                      <button className="addLikeToCommentBtn" type="button">
                        <img src="/images/Minsun/heart.png" alt="like" />
                      </button>
                    </li>
                    <li className="commentItem">
                      <a className="userId" href="#">
                        imanaileen
                      </a>
                      <p>
                        <a className="taged" href="#">
                          @vrkn_
                        </a>
                      </p>
                      <button className="addLikeToCommentBtn" type="button">
                        <img src="/images/Minsun/heart.png" alt="like" />
                      </button>
                    </li>
                  </ul>
                </div>
                <span className="postedDate">5일 전</span>
              </div>
              <div className="commentContainer">
                <form className="commentForm" action="#">
                  <div className="commnetForm">
                    <input
                      className="commentInput"
                      id="input2"
                      type="text"
                      placeholder="댓글 달기..."
                    />
                    <button
                      className="commentBtn"
                      id="btn2"
                      type="submit"
                      disabled
                    >
                      게시
                    </button>
                  </div>
                </form>
              </div>
            </article>
          </div>
          <div className="mainRightContainer">
            <aside className="accountsInfo">
              <section className="personalAccount">
                <a className="profileImg" href="#">
                  <img src="/images/Minsun/profile.jpg" alt="profile" />
                </a>
                <div className="userInfoContainer">
                  <a className="userId" href="#">
                    usersssss
                  </a>
                  <span className="userInfo">nameeee</span>
                </div>
                <button type="button">전환</button>
              </section>
              <section className="recomendation">
                <div className="recomendTitle">
                  <h4>회원님을 위한 추천</h4>
                  <button className="viewAllBtn" type="button">
                    모두 보기
                  </button>
                </div>
                <ul className="recomendList">
                  <li className="recomendItem">
                    <a href="#">
                      <img
                        className="userImg"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129789769_1340573919615966_4744243407009962140_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=QX5DX3GzdmUAX8c6pWF&tp=1&oh=2631991ef8897aca2e5ee7aa26d24c4b&oe=600B12CF"
                        alt="khloekardashian"
                      />
                    </a>
                    <div className="userInfoContainer">
                      <a className="userId" href="#">
                        khloekardashian
                      </a>
                      <span className="userInfo">인기</span>
                    </div>
                    <button className="followBtn" type="button">
                      팔로우
                    </button>
                  </li>
                  <li className="recomendItem">
                    <a href="#">
                      <img
                        className="userImg"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/129337501_719060642053489_4725676323306299276_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=dxuZe3TvSS0AX_zAtKz&tp=1&oh=777cf9d3c03f5b5f51fd91ae77722a94&oe=6009B283"
                        alt="kourtneykardash"
                      />
                    </a>
                    <div className="userInfoContainer">
                      <a className="userId" href="#">
                        kourtneykardash
                      </a>
                      <span className="userInfo">인기</span>
                    </div>
                    <button className="followBtn" type="button">
                      팔로우
                    </button>
                  </li>
                  <li className="recomendItem">
                    <a href="#">
                      <img
                        className="userImg"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/11348214_1481558242162220_192850898_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=41L55NhZ9wQAX8BumdO&tp=1&oh=9ca04223d5cb82814d8abd9531bdc78b&oe=600C6C5B"
                        alt="travisscott"
                      />
                    </a>
                    <div className="userInfoContainer">
                      <a className="userId" href="#">
                        travisscott
                      </a>
                      <span className="userInfo">인기</span>
                    </div>
                    <button className="followBtn" type="button">
                      팔로우
                    </button>
                  </li>
                  <li className="recomendItem">
                    <a href="#">
                      <img
                        className="userImg"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/126507807_730870471162439_2370163096545934968_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=K-sboRrMQDQAX_vKcdX&tp=1&oh=25b51c9d414b2cb26f2ae4dee36900ba&oe=600ADD11"
                        alt="charildamelio"
                      />
                    </a>
                    <div className="userInfoContainer">
                      <a className="userId" href="#">
                        charildamelio
                      </a>
                      <span className="userInfo">인기</span>
                    </div>
                    <button className="followBtn" type="button">
                      팔로우
                    </button>
                  </li>
                  <li className="recomendItem">
                    <a href="#">
                      <img
                        className="userImg"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/131980604_413741999968339_7651799267812310195_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=43Cli2cp4tIAX_qP_c1&tp=1&oh=24b8c3e24baa42baa785d368786ae45f&oe=600BC46D"
                        alt="addisonraee"
                      />
                    </a>
                    <div className="userInfoContainer">
                      <a className="userId" href="#">
                        addisonaraee
                      </a>
                      <span className="userInfo">인기</span>
                    </div>
                    <button className="followBtn" type="button">
                      팔로우
                    </button>
                  </li>
                </ul>
              </section>
            </aside>
            <footer>
              <div className="linksAbout">
                <a href="#">소개</a>
                <a href="#">· 도움말</a>
                <a href="#">· 홍보 센터</a>
                <a href="#">· API</a>
                <a href="#">· 채용 정보 ·</a>
                <br />
                <a href="#">개인정보처리방침 ·</a>
                <a href="#">약관 ·</a>
                <a href="#">위치 ·</a>
                <a href="#">인기 계정 ·</a>
                <a href="#">해시태그 ·</a>
                <a href="#">언어</a>
              </div>
              <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}

export default MainMinsun;
