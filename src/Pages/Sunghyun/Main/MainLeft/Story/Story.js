import React from "react";
import SOURCES from "./ImageSrc";
import "./Story.scss";

class Story extends React.Component {
  render() {
    return (
      <div className="story">
        <ul className="container">
          {SOURCES.map((src) => {
            return (
              <li>
                <img
                  alt={src.slice(0, src.indexOf("."))}
                  src={"./images/Sunghyun/" + src}
                ></img>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Story;
