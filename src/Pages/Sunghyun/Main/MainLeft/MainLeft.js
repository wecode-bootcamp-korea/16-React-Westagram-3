import React from "react";
import "./MainLeft.scss";
import Feed from "./Feed/Feed";
import Story from "./Story/Story";

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
