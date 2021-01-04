import React from "react";
import "../RecommendList.scss";

class RecommendItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { key, userId, imgUrl } = this.props;

    return (
      <li key={key} className="recommendItem">
        <a href="#">
          <img className="userImg" src={imgUrl} alt={userId} />
        </a>
        <div className="userInfoContainer">
          <a className="userId" href="#">
            {userId}
          </a>
          <span className="userInfo">인기</span>
        </div>
        <button className="followBtn" type="button">
          팔로우
        </button>
      </li>
    );
  }
}

export default RecommendItems;
