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
    const { commentInfo } = this.props;
    return (
      <div className="cmtList">
        {commentInfo.map((ele) => {
          return (
            <li key={ele.id}>
              <span className="userId">{ele.userId}</span>
              <span className="userComment">{ele.userComment}</span>
              <button onClick={() => this.props.handleLike(ele.id)}>
                <img
                  className="like"
                  src={
                    ele.likeStatus
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
