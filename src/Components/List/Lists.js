import React from "react";
import "./Lists.scss";
class Lists extends React.Component {
  render() {
    const { commentInfo } = this.props;
    return (
      <ul className="commentsList">
        {commentInfo.map((el) => {
          return (
            <li key={el.id} className="commentItem">
              <a className="userId" href="#">
                {el.userId}
              </a>
              <p>{el.cmt}</p>
              <button
                onClick={() => this.props.toggleLike(el.id)}
                className="addLikeToCommentBtn"
                type="button"
              >
                <img
                  className="liked"
                  src={
                    !el.liked
                      ? "/images/Minsun/heart.png"
                      : "/images/Minsun/redheart.png"
                  }
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
