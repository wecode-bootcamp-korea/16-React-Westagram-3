import React from "react";
import "./MainRight.scss";

class MainRight extends React.Component {
  render() {
    return (
      <div className="mainRight">
        <div className="userProfile">
          <img src="./images/Sunghyun/me.jpg" alt="profile"></img>
        </div>
        <div className="suggestionTitle"></div>
        <div className="suggestedUsers"></div>
        <div className="westagramInfo"></div>
      </div>
    );
  }
}

export default MainRight;
