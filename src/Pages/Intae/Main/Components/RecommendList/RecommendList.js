import React from "react";
import RecommendItems from "./RecommendItems/RecommendItems";
import RECOMMEND from "./RecommendData";
import "./RecommendList.scss";
class RecommendList extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendData: [],
    };
  }

  componentDidMount() {
    this.setState({
      recommendData: RECOMMEND,
    });
  }

  render() {
    const { recommendData } = this.state;

    return (
      <ul className="recommendList">
        {recommendData.map((el, idx) => {
          return (
            <RecommendItems key={idx} userId={el.userId} imgUrl={el.imgUrl} />
          );
        })}
      </ul>
    );
  }
}

export default RecommendList;
