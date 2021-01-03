import React from "react";
import "./Story.scss";

class Story extends React.Component {
  render() {
    return (
      <div className="story">
        <ul className="container">
          <li>
            <img src="./images/Sunghyun/hamilton.jpg" alt="Haminton"></img>
          </li>
          <li>
            <img
              src="./images/Sunghyun/evan_hansen.jpg"
              alt="Dear Evan Hansen"
            ></img>
          </li>
          <li>
            <img src="./images/Sunghyun/waitress.jpg" alt="Waitress"></img>
          </li>
          <li>
            <img src="./images/Sunghyun/wicked.jpg" alt="Wicked"></img>
          </li>
          <li>
            <img
              src="./images/Sunghyun/bookofmormon.jpg"
              alt="Book of Mormon"
            ></img>
          </li>
          <li>
            <img
              src="./images/Sunghyun/hedwig.jpg"
              alt="Hedwig and the Angry Inch"
            ></img>
          </li>
          <li>
            <img src="./images/Sunghyun/frozen.jpeg" alt="Frozen"></img>
          </li>
          <li>
            <img
              src="./images/Sunghyun/jersey_boys.jpg"
              alt="Jersey Boys"
            ></img>
          </li>
          <li>
            <img
              src="./images/Sunghyun/carole_king.jpg"
              alt="The Beautiful Carole King"
            ></img>
          </li>
          <li>
            <img src="./images/Sunghyun/cabaret.jpeg" alt="Cabaret"></img>
          </li>
        </ul>
      </div>
    );
  }
}

export default Story;
