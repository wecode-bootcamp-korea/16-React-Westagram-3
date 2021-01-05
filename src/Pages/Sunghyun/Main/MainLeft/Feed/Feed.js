import React from "react";
import "./Feed.scss";
import CommentList from "./CommentsList/CommentList";

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      commentInfo: [],
      inputValue: "",
    };
  }

  handleComment = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  addComment = (e) => {
    e.preventDefault();
    const { commentInfo } = this.state;
    this.setState({
      commentInfo: commentInfo.concat([
        {
          id: commentInfo.length + 1,
          userId: "tjohnny93",
          userComment: this.state.inputValue,
          likedStatus: false,
        },
      ]),
      inputValue: "",
    });
  };

  handleLike = (commentId) => {
    let comment = [...this.state.commentInfo];
    const id = this.state.commentInfo.findIndex((ele) => ele.id === commentId);
    comment[id] = {
      ...comment[id],
      likeStatus: !comment[id].likeStatus,
    };
    this.setState({
      commentInfo: comment,
    });
  };

  render() {
    const activateBtn = this.state.inputValue.length;
    return (
      <article className="feed">
        <div className="feedHeader">
          <img
            className="feedHeaderProfile"
            src="../images/Sunghyun/me.jpg"
            alt="프로필 사진"
          />
          <div className="feedHeaderMenu">
            <p className="feedHeaderId">tjohnny93</p>
            <img
              className="feedHeaderMoreOption"
              src="../images/Sunghyun/dots.png"
              alt="추가사항 버튼"
            />
          </div>
        </div>
        <div className="feedImg">
          <img src="../images/Sunghyun/feed_img.jpeg" alt="사진" />
        </div>
        <div className="feedFooter">
          <img src="../images/Sunghyun/heart.png" alt="" />
          <img src="../images/Sunghyun/comment.png" alt="" />
          <img src="../images/Sunghyun/airplane.png" alt="" />
          <img
            className="feedFooterBookmark"
            src="../images/Sunghyun/bookmark.png"
            alt=""
          />
        </div>
        <div className="feedLikes">
          <span>30,127 likes</span>
        </div>
        <div className="feedFooterContents">
          <div className="feedDescription">
            <span className="userId">tjohnny93</span>
            <span>안녕하세요, 반갑습니다.</span>
          </div>
          <div className="commentsList">
            <ul className="comments">
              <CommentList
                commentInfo={this.state.commentInfo}
                handleLike={this.handleLike}
              />
            </ul>
          </div>
          <div className="postTime">
            <span>36 MINUTES AGO</span>
          </div>
          <form className="postComment" action="">
            <input
              className="commentBody"
              type="text"
              placeholder="댓글 달기..."
              onChange={this.handleComment}
              value={this.state.inputValue}
            />
            <button
              className={activateBtn ? "active" : "postButton"}
              onClick={this.addComment}
            >
              게시
            </button>
          </form>
        </div>
      </article>
    );
  }
}

export default Feed;
