import "./Login.scss";
import React from "react";
import { withRouter } from "react-router-dom";
import { SEVER, SIGNUP_API, SIGNIN_API } from "./config";

class LoginSeungwan extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      password: "",
      isPwHidden: true,
    };
  }

  handleLoginInfo = (e) => {
    const { id, value } = e.target; //구조분해 할당 = destructuring
    this.setState({ [id]: value }); //[] 컨벤션인가?
  };

  showPassword = () => {
    console.log(this.state.isPwHidden);
    this.setState({ isPwHidden: !this.state.isPwHidden });
  };

  // checkValidation = (e) => {
  //   e.preventDefault(); //이벤트 발생할때마다 페이지 다시 렌더되는걸 막기위한 메서드
  //   // 구조분해 할당 = 비구조화
  //   // const { id, password } = this.state;
  //   const checkId = this.state.id.includes("@");
  //   const checkPw = this.state.password.length >= 4;

  //   if (checkId && checkPw) {
  //     alert("로그인 성공!");
  //     this.props.history.push("/main-seungwan");
  //   }
  //   if (!checkId) {
  //     alert("아이디는 @를 포함해야 됩니다.");
  //   }
  //   if (!checkPw) {
  //     alert("비밀번호는 4자리 이상이어야 합니다.");
  //   }
  // };

  handleButton = () => {
    fetch(SIGNUP_API, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        pw: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log({ result });
      });
  };

  render() {
    const { userId, password, isPwHidden } = this.state;
    const activateBtn =
      (this.state.userId.length && this.state.password.length) !== 0;

    return (
      <div className="Login">
        <section className="LoginPage">
          <h1>westargram</h1>
          <article>
            <div className="input-items">
              <input
                id="userId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleLoginInfo}
                value={userId}
              />
              <div className="pw-container">
                <input
                  id="password"
                  type={isPwHidden ? "password" : "text"}
                  placeholder="비밀번호"
                  onChange={this.handleLoginInfo}
                  value={password}
                />
                <span className="showPw" onClick={this.showPassword}>
                  {isPwHidden ? "Show" : "Hide"}
                </span>
              </div>
              <button
                id="btn"
                onClick={this.handleButton}
                onKeyUp={this.handleButton}
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
