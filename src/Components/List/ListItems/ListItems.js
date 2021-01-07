import React from "react";
import "../Lists.scss";

class ListItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, userId, cmt, liked, commentLikeHandler } = this.props;

    return (
      <li key={id} className="commentItem">
        <a className="userId" href="#">
          {userId}
        </a>
        <p>{cmt}</p>
        <button
          onClick={() => commentLikeHandler(id)}
          className="addLikeToCommentBtn"
          type="button"
        >
          <img
            className="liked"
            src={
              !liked
                ? "/images/Minsun/heart.png"
                : "/images/Minsun/redheart.png"
            }
            alt="like"
          />
        </button>
      </li>
    );
  }
}

export default ListItems;
