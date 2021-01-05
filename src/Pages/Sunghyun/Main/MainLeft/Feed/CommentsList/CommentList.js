import React from "react";
import "./CommentList.scss";

class CommentList extends React.Component {
  toggleLikeBtn = (e) => {
    this.setState({
      likeStatus: !e.target.value,
    });
    e.target.value = !e.target.value;
  };

  render() {
    const { commentInfo, handleLike } = this.props;
    return (
      <div className="commentList">
        {commentInfo.map((comment) => {
          return (
            <li key={comment.id}>
              <span className="userId">{comment.userId}</span>
              <span className="userComment">{comment.userComment}</span>
              <button onClick={() => handleLike(comment.id)}>
                <img
                  className="like"
                  src={
                    comment.likeStatus
                      ? "./images/Sunghyun/heartLiked.png"
                      : "./images/Sunghyun/heart.png"
                  }
                  alt=""
                />
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}

export default CommentList;
