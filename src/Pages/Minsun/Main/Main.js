import React from "react";
import "./Main.scss";

import Nav from "../../../Components/Nav/Nav";
import Lists from "../../../Components/List/Lists";
import StoryFeed from "./Components/StoryFeed/StoryFeed";
import RecommendList from "./Components/RecommendList/RecommendList";
class MainMinsun extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      commentInfo: [
        {
          id: Math.random() * 1000,
          userId: "nameauction",
          cmt: "Happly New Year✨🎄🌝",
          liked: false,
        },
        {
          id: Math.random() * 1000,
          userId: "pppp",
          cmt: "Goddess 😍",
          liked: false,
        },
      ],
    };
  }

  // 댓글 인풋 값 함수
  changeInput = (evt) => {
    this.setState({
      inputVal: evt.target.value,
    });
  };

  //댓글 추가 함수(댓글 추가되면서 댓글정보 상태값 업댓)
  addComment = (evt) => {
    evt.preventDefault();
    this.setState({
      commentInfo: this.state.commentInfo.concat([
        {
          id: Math.random() * 1000,
          userId: "usersssss",
          cmt: this.state.inputVal,
          liked: false,
        },
      ]),
      inputVal: "",
    });
  };

  //댓글 좋아요 기능
  toggleLike = (selectedId) => {
    let commentsData = [...this.state.commentInfo];
    const idx = this.state.commentInfo.findIndex((el) => el.id === selectedId);
    commentsData[idx] = {
      ...commentsData[idx],
      liked: !commentsData[idx].liked,
    };
    this.setState({
      commentInfo: commentsData,
    });
  };

  render() {
    const activeCmtBtn = this.state.inputVal.length > 0;

    return (
      <div className="Main">
        <Nav />
        <main className="feedContainer">
          <div className="mainLeftContainer">
            <StoryFeed />
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
                  <Lists
                    toggleLike={this.toggleLike}
                    commentInfo={this.state.commentInfo}
                  />
                </div>
                <span className="postedDate">5일 전</span>
              </div>
              <div className="commentContainer">
                <form className="commentForm" action="#">
                  <input
                    onChange={this.changeInput}
                    className="commentInput"
                    value={this.state.inputVal}
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button
                    onClick={this.addComment}
                    className="commentBtn"
                    type="submit"
                    disabled={activeCmtBtn ? false : true}
                  >
                    게시
                  </button>
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
                <RecommendList />
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
