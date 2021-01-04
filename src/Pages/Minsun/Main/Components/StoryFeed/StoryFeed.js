import React from "react";
import STORYFEEDINFO from "./StoryFeedData";
import "./StoryFeed.scss";

class StoryFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      storyFeeds: [],
    };
  }

  componentDidMount() {
    this.setState({
      storyFeeds: STORYFEEDINFO,
    });
  }

  render() {
    const { storyFeeds } = this.state;
    return (
      <section className="storyFeeds">
        <ul className="storyLists">
          {storyFeeds.map((el, idx) => {
            //map 메소드내에서 return 안에서 써줘야한다
            return (
              //각 리스트에는 unique key값을 가져야한다
              <li key={idx} className="storyItems">
                <a href="#">
                  <div className="activeStory">
                    <img src={el.imgUrl} alt={el.userId} />
                  </div>
                  <p>{el.userId}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default StoryFeed;
