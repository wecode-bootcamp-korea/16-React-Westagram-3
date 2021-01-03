import React from "react";
import "./CommentList.scss";

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      likeStatus: false,
    };
  }

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
        {commentInfo.map((ele, idx) => {
          return (
            <li key={idx}>
              <span className="userId">{ele.userId}</span>
              <span className="userComment">{ele.userComment}</span>
              <button
                // className={this.state.likeStatus ? "liked" : ""}
                onClick={this.toggleLikeBtn}
                value={false}
              >
                <img
                  className="like"
                  src={
                    this.state.likeStatus
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
