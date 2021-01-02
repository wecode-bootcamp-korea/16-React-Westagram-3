import React from "react";
import "./Lists.scss";

class Lists extends React.Component {
  render() {
    const { commentInfos } = this.props;
    return (
      <>
        {commentInfos.map((el) => {
          return (
            <li className="commentItem">
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
      </>
    );
  }
}

export default Lists;
