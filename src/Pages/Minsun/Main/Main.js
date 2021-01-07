import React from "react";

import Nav from "../../../Components/Nav/Nav";
import MainLeft from "./Components/MainLeft/MainLeft";
import MainRight from "./Components/MainRight/MainRight";

import "./Main.scss";
class MainMinsun extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      commentInfo: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          commentInfo: res.data,
        });
      });
  }

  // 댓글 인풋 값 함수
  commentInputHandler = (evt) => {
    this.setState({
      inputVal: evt.target.value,
    });
  };

  //댓글 추가 함수
  addCommentHandler = (evt) => {
    evt.preventDefault();
    const { commentInfo } = this.state;
    this.setState({
      commentInfo: this.state.commentInfo.concat([
        {
          id: commentInfo.length + 1,
          userId: "usersssss",
          cmt: this.state.inputVal,
          liked: false,
        },
      ]),
      inputVal: "",
    });
  };

  //댓글 좋아요 기능
  commentLikeHandler = (selectedId) => {
    const { commentInfo } = this.state;
    const newData = commentInfo.map((data) => {
      if (data.id === selectedId) {
        data.liked = !data.liked;
      }
      return data;
    });
    this.setState({
      commentInfo: newData,
    });
  };

  render() {
    return (
      <div className="Main">
        <Nav />
        <main className="feedContainer">
          <MainLeft
            commentLikeHandler={this.commentLikeHandler}
            commentInfo={this.state.commentInfo}
            commentInputHandler={this.commentInputHandler}
            inputVal={this.state.inputVal}
            addCommentHandler={this.addCommentHandler}
          />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default MainMinsun;
