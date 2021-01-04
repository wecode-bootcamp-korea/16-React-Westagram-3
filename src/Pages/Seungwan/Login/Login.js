import "./Login.scss";
import React from "react";
import { withRouter } from "react-router-dom";

class LoginSeungwan extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      hiddenPw: true,
      productList: [],
    };
  }
  // //이벤트가 일어나는 장소를 target 그리고 그안에서 value를 찾는다.
  // handleIdChange = (e) => {
  //   this.setState({ id: e.target.value });
  // };

  // handlePwChange = (e) => {
  //   this.setState({ password: e.target.value });
  // };
  //위의 기능 한번에 합치는 방법
  handleLoginInfo = (e) => {
    //비구조화
    const { id, value } = e.target;
    //e.target.id ==> "id", "password"
    this.setState({ [id]: value });
  };

  showPassword = () => {
    this.setState({ hiddenPw: !this.state.hiddenPw });
  };

  checkValidation = (e) => {
    e.preventDefault(); //이벤트 발생할때마다 페이지 다시 렌더되는걸 막기위한 메서드
    // 구조분해 할당 = 비구조화
    const { id, password } = this.state;
    const checkId = id.includes("@");
    const checkPw = password.length >= 4;

    if (checkId && checkPw) {
      alert("로그인 성공!");
      this.props.history.push("/main-seungwan");
    }
    if (!checkId) {
      alert("아이디는 @를 포함해야 됩니다.");
    }
    if (!checkPw) {
      alert("비밀번호는 4자리 이상이어야 합니다.");
    }
  };

  render() {
    const activateBtn =
      (this.state.id.length && this.state.password.length) !== 0;

    return (
      <div className="Login">
        <section className="loginpage">
          <h1>westargram</h1>
          <article>
            <div className="input-items">
              <input
                id="id"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleLoginInfo}
                value={this.state.id}
              />
              <div className="pw-container">
                <input
                  id="password"
                  type={this.state.hiddenPw ? "password" : "text"}
                  placeholder="비밀번호"
                  onChange={this.handleLoginInfo}
                  value={this.state.password}
                />
                <span className="showPw" onClick={this.showPassword}>
                  {this.state.hiddenPw ? "Show" : "Hide"}
                </span>
              </div>
              <button
                id="btn"
                onClick={this.checkValidation}
                onKeyUp={this.checkValidation}
                className={activateBtn ? "active" : ""}
              >
                로그인
              </button>
            </div>
            <div>
              <a
                href="https://www.instagram.com/accounts/password/reset/"
                tabIndex="1"
              >
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default withRouter(LoginSeungwan);
