import React from "react";
import "./Lists.scss";

import ListItems from "./ListItems/ListItems";
class Lists extends React.Component {
  render() {
    const { commentInfo, commentLikeHandler } = this.props;
    return (
      <ul className="commentsList">
        {commentInfo.map((el) => {
          return (
            <ListItems
              commentLikeHandler={commentLikeHandler}
              id={el.id}
              userId={el.userId}
              cmt={el.cmt}
              liked={el.liked}
            />
          );
        })}
      </ul>
    );
  }
}

export default Lists;
