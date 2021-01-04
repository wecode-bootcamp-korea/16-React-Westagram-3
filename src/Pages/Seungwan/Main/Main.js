import React from "react";
import Comment from "./Comment";
import cmtArray from "../../Seungwan/Data/Data";
import "./reset.scss";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cmtInput: "",
      cmtList: [],
    };
  }
  componentDidMount() {
    this.setState({
      cmtList: cmtArray,
    });
  }

  changeInput = (e) => {
    this.setState({ cmtInput: e.target.value });
  };

  addCmt = (e) => {
    e.preventDefault();
    const newCmt = {
      id: 2,
      user: "taeng9",
      content: this.state.cmtInput,
      liked: false,
    };
    this.setState({
      cmtList: this.state.cmtList.concat(newCmt), //
      cmtInput: "", //이게 초기화 게시했을때 다시 ""빈 스트링맞죠?
    });
    console.log(this.state.cmtList);
  };

  render() {
    return (
      <>
        <nav>
          <div className="nav-bar">
            <div className="logo">
              <img
                alt="instargram"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              />
            </div>
            <div className="nav-input">
              <input type="text" placeholder="검색" />
            </div>
            <ul className="nav-right">
              <li>
                <img
                  alt="탐색"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                />
              </li>
              <li>
                <img
                  alt="하트"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
              </li>
              <li>
                <img
                  alt="마이페이지"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                />
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <section className="main-left">
            <div className="story-container">
              <ul className="story-wrap">
                <li>
                  <img
                    alt="image1"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119048058_687786335426255_375264413385362725_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=hUF8YLQkKlEAX_hPFkS&tp=1&oh=2d9300b48ab97698ead23bb9ccb96ccf&oe=6013C5F9"
                  />
                  <p>bighero_k</p>
                </li>
                <li>
                  <img
                    alt="image1"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119048058_687786335426255_375264413385362725_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=hUF8YLQkKlEAX_hPFkS&tp=1&oh=2d9300b48ab97698ead23bb9ccb96ccf&oe=6013C5F9"
                  />
                  <p>bighero_k</p>
                </li>
                <li>
                  <img
                    alt="image1"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119048058_687786335426255_375264413385362725_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=hUF8YLQkKlEAX_hPFkS&tp=1&oh=2d9300b48ab97698ead23bb9ccb96ccf&oe=6013C5F9"
                  />
                  <p>bighero_k</p>
                </li>
              </ul>
            </div>
            <article className="feed">
              <div className="feed-info">
                <img
                  className="user-img"
                  alt="suhyeon"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/117695455_303895957724855_8135055200715456199_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=S2wPguRXnCwAX-EWHMR&tp=1&oh=f146edea232a56224dba39d5e493a072&oe=60161C13"
                />
                <div className="info-right">
                  <div className="user-info">
                    <p className="user-id">mo_o_nn</p>
                    <p className="user-location">노원구 공릉동</p>
                  </div>
                  <img alt="dot" src="./images/Seungwan/more.svg" />
                </div>
              </div>
              <img
                className="feed-img"
                alt="suhyeon"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.74.752.752a/s640x640/75200969_464859224466997_4702799578279574479_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=uZH6knikq44AX9ou11P&tp=1&oh=6c59342edb2a77aa37d388bfd2651b22&oe=601714EA"
              />
              <div className="feed-comment">
                <div className="feed-icon">
                  <div>
                    <button>
                      <img alt="heart" src="./images/Seungwan/heart.svg" />
                    </button>
                    <button>
                      <img
                        alt="chat"
                        src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-06-512.png"
                      />
                    </button>
                    <button>
                      <img
                        alt="share"
                        src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-05-512.png"
                      />
                    </button>
                  </div>
                  <button>
                    <img
                      className="icon-right"
                      alt="bookmark"
                      src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png"
                    />
                  </button>
                </div>
                <div className="feed-userlikes">
                  <p>jae_ho_</p>
                  <span>님</span>
                  <button type="button">여러 명</button>
                  <span>이 좋아합니다</span>
                </div>
                <div className="feed-text">
                  <div className="text-main">
                    <a href="https://www.instagram.com/ohvely22/">mo_o_nn</a>
                    <span>이쁘지?</span>
                  </div>
                  <span className="comment-plus">댓글 300개 모두 보기</span>
                  <ul className="text-comment">
                    {this.state.cmtList.map((comment, index) => {
                      return (
                        <Comment
                          id={comment.id}
                          key={index}
                          user={comment.user}
                          content={comment.content}
                          liked={comment.liked}
                        />
                      );
                    })}
                  </ul>
                  <span className="feed-time">1일 전</span>
                </div>
              </div>
              <div className="comment-container">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  value={this.state.cmtInput}
                  onChange={this.changeInput}
                />
                <button className="comment-push" onClick={this.addCmt}>
                  게시
                </button>
              </div>
            </article>
          </section>
          <aside>
            <div className="my-container">
              <div className="my-left">
                <img
                  className="my-img"
                  alt="me"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/132022978_405273727256515_8822165372923202275_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=rpRvVqZ0sAUAX9zgnBz&tp=1&oh=d328b0cc1f71ef5f533dd7db45e5c3f8&oe=60139BC4"
                />
                <div className="my-info">
                  <a
                    className="my-id"
                    href="https://www.instagram.com/seung_wannn/"
                  >
                    seung_wannn
                  </a>
                  <p className="my-name">승완</p>
                </div>
              </div>
              <button className="my-right" type="text">
                전환
              </button>
            </div>
          </aside>
        </main>
      </>
    );
  }
}

export default Main;
