import React from "react";
import "./Comment.scss";

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
    const { id, user, content, liked } = this.props;
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
