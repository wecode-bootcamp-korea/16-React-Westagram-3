import React from "react";
import CommentList from "./CommentsList/CommentList";
import COMMENT from "./CommentData";
import "./Feed.scss";

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      commentInfo: [],
      inputValue: "",
    };
  }

  componentDidMount() {
    this.setState({
      commentInfo: COMMENT,
    });
  }

  handleComment = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  addComment = (e) => {
    e.preventDefault();
    const { commentInfo, inputValue } = this.state;
    this.setState({
      commentInfo: commentInfo.concat([
        {
          id: commentInfo.length + 1,
          userId: "tjohnny93",
          userComment: inputValue,
          likeStatus: false,
        },
      ]),
      inputValue: "",
    });
  };

  handleLike = (commentId) => {
    const { commentInfo } = this.state;
    commentInfo.map((comment) => {
      if (comment.id === commentId) {
        comment.likeStatus = !comment.likeStatus;
      }
      return comment;
    });

    this.setState({
      commentInfo: commentInfo,
    });
    // let comment = [...this.state.commentInfo];
    // const id = this.state.commentInfo.findIndex((ele) => ele.id === commentId);
    // comment[id] = {
    //   ...comment[id],
    //   likeStatus: !comment[id].likeStatus,
    // };
    // this.setState({
    //   commentInfo: comment,
    // });
  };

  render() {
    const { commentInfo, inputValue } = this.state;
    const activateBtn = this.state.inputValue.length;
    return (
      <article className="feed">
        <div className="feedHeader">
          <img
            alt="프로필 사진"
            className="feedHeaderProfile"
            src="../images/Sunghyun/me.jpg"
          />
          <div className="feedHeaderMenu">
            <p className="feedHeaderId">tjohnny93</p>
            <img
              alt="추가사항 버튼"
              className="feedHeaderMoreOption"
              src="../images/Sunghyun/dots.png"
            />
          </div>
        </div>
        <div className="feedImg">
          <img alt="사진" src="../images/Sunghyun/feed_img.jpeg" />
        </div>
        <div className="feedFooter">
          <img alt="heart icon" src="../images/Sunghyun/heart.png" />
          <img alt="comment icon" src="../images/Sunghyun/comment.png" />
          <img alt="airplane icon" src="../images/Sunghyun/airplane.png" />
          <img
            alt="bookmark icon"
            className="feedFooterBookmark"
            src="../images/Sunghyun/bookmark.png"
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
                commentInfo={commentInfo}
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
              value={inputValue}
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
