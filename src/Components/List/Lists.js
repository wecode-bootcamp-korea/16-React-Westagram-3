import React from "react";
import "./Lists.scss";

class Lists extends React.Component {
  render() {
    const { commentInfo } = this.props;
    return (
      <ul className="commentsList">
        {commentInfo.map((el, idx) => {
          return (
            <li key={idx} className="commentItem">
              <a className="userId" href="#">
                {el.userId}
              </a>
              <p>{el.cmt}</p>
              <button className="addLikeToCommentBtn" type="button">
                <img
                  className="liked"
                  src="/images/Minsun/heart.png"
                  alt="like"
                />
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Lists;
