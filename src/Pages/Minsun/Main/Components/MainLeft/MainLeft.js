import React from "react";
import StoryFeed from "../StoryFeed/StoryFeed";
import Feed from "../Feed/Feed";

class MainLeft extends React.Component {
  render() {
    const {
      commentLikeHandler,
      commentInfo,
      commentInputHandler,
      inputVal,
      addCommentHandler,
    } = this.props;
    return (
      <div className="mainLeftContainer">
        <StoryFeed />
        <Feed
          commentLikeHandler={commentLikeHandler}
          commentInfo={commentInfo}
          commentInputHandler={commentInputHandler}
          inputVal={inputVal}
          addCommentHandler={addCommentHandler}
        />
      </div>
    );
  }
}

export default MainLeft;
