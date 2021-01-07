import React from "react";
import "./Comment.scss";
//Login.js에서는 적용을 안해서 index.js상에 부를수가 없네요..

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonOn: true,
    };
  }

  clickLike = (e) => {
    this.setState({
      buttonOn: !e.target.value,
    });
  };

  render() {
    const { id, user, content, liked } = this.props; //객체 구조할당!
    return (
      <li className={id}>
        <p>{user}</p>
        <span>{content}</span>
        <button value={liked} onClick={this.clickLike}>
          <img alt="like" src="./images/Seungwan/heart.svg" />
        </button>
      </li>
    );
  }
}

export default Comment;
