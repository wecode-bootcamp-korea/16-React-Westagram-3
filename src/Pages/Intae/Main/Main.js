import React from "react";

import Nav from "../../../Components/Nav/Nav";
import StoryFeed from "./Components/StoryFeed/StoryFeed";
import Lists from "../../../Components/List/Lists";
import RecommendList from "./Components/RecommendList/RecommendList";
import FooterMenu from "./Components/FooterMenu/FooterMenu";
import { SERVER_DATA } from "./Config";
import "./Main.scss";

class MainIntae extends React.Component {
  constructor() {
    super();
    this.state = {
      inputCmnt: "",
      commentInfo: [],
    };
  }

  componentDidMount() {
    fetch(SERVER_DATA, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          commentInfo: res.data,
        });
      });
  }

  commentInputHandler = (e) => {
    this.setState({
      inputCmnt: e.target.value,
    });
  };

  addCommentHandler = (e) => {
    e.preventDefault();
    const { commentInfo } = this.state;
    this.setState({
      commentInfo: this.state.commentInfo.concat([
        {
          id: commentInfo.length + 1,
          userId: "user1",
          cmt: this.state.inputCmnt,
          liked: false,
        },
      ]),
      inputCmnt: "",
    });
  };

  commentLikeHandler = (selectedId) => {
    const { commentInfo } = this.state;
    const newData = commentInfo.map((data) => {
      if (data.id === selectedId) {
        data.liked = !data.liked;
      }
      return data;
    });
    this.setState({
      commentInfo: newData,
    });
  };

  render() {
    const activeCmtBtn = this.state.inputCmnt.length > 0;

    return (
      <div className="Main">
        <Nav />
        <main className="feedContainer">
          <div className="mainLeftContainer">
            <StoryFeed />
            <article className="mainFeeds" id="feed1">
              <div className="mainFeedProfile">
                <a href="#">
                  <img className="profileImg" src="" alt="who profile" />
                </a>
                <a className="userId" href="#">
                  tester
                </a>
                <button className="moreBtn" type="button">
                  <img src="/images/Intae/Main/more.png" alt="mores" />
                </button>
              </div>
              <div className="feedImg">
                <img src="" alt="feed" />
              </div>
              <div className="feedInfoContainer">
                <div className="feedBtns">
                  <button className="feedBtn" type="button">
                    <img src="/images/Intae/Main/heart.png" alt="like" />
                  </button>
                  <button className="feedBtn" type="button">
                    <img
                      src="/images/Intae/Main/speech-bubble.png"
                      alt="message"
                    />
                  </button>
                  <button className="feedBtn" type="button">
                    <img src="/images/Intae/Main/send.png" alt="send message" />
                  </button>
                  <button className="feedBtn" type="button">
                    <img src="/images/Intae/Main/bookmark.png" alt="bookmark" />
                  </button>
                </div>
                <div className="feedContent">
                  <p className="likedUserInfo">
                    <a href="#">
                      <img src="" alt="who profile" />
                    </a>
                    <button className="userId" type="button">
                      test
                    </button>
                    님<button type="button">외 2,111,111</button>이 좋아합니다.
                  </p>
                  <p className="postedUserInfo">
                    <button className="userId" type="button">
                      test
                    </button>
                    123123
                    <a href="#">@123</a>
                    <a href="#">#123</a>
                  </p>
                </div>
                <button className="moreCommentsBtn" type="button">
                  댓글 20,000개 모두 보기
                </button>
                <div className="feedComments">
                  <Lists
                    commentLikeHandler={this.commentLikeHandler}
                    commentInfo={this.state.commentInfo}
                  />
                </div>
                <span className="postedDate">2일 전</span>
              </div>
              <div className="commentContainer">
                <form className="commentForm" action="#">
                  <input
                    onChange={this.commentInputHandler}
                    className="commentInput"
                    value={this.state.inputCmnt}
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button
                    onClick={this.addCommentHandler}
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
                  <img src="/images/Intae/Main/profile.jpg" alt="profile" />
                </a>
                <div className="userInfoContainer">
                  <a className="userId" href="#">
                    user12
                  </a>
                  <span className="userInfo">testname</span>
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
              <FooterMenu />
              <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}

export default MainIntae;
