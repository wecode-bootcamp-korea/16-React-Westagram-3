import React from "react";
import Feed from "./Feed/Feed";
import Story from "./Story/Story";
import "./MainLeft.scss";

class MainLeft extends React.Component {
  render() {
    return (
      <div className="mainLeft">
        <Story />
        <Feed />
      </div>
    );
  }
}

export default MainLeft;
