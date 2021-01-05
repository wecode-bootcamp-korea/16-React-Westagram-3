import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      userPw: "",
      isPwHidden: true,
    };
  }

  goToMain = () => {
    this.props.history.push("/main-sunghyun");
  };

  handleLoginInfo = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  toggleHiddenPw = () => {
    this.setState({
      isPwHidden: !this.state.isPwHidden,
    });
  };

  validateLogin = (e) => {
    e.preventDefault();
    const checkId = this.state.userId.includes("@");
    const checkPw = this.state.userPw.length > 4;
    if (checkId && checkPw) {
      alert("로그인 성공");
      this.props.history.push("/main-sunghyun");
    }
    if (!checkId) alert("아이디는 @를 포함해야합니다.");
    if (!checkPw) alert("비밀번호는 5자 이상 입니다.");
  };

  render() {
    const { userId, userPw, isPwHidden } = this.state;
    const activateBtn = (userId.length && userPw.length) !== 0;
    return (
      <div className="Login">
        <div className="loginContainer">
          <div>
            <p className="loginLogo">westagram</p>
          </div>
          <form action="">
            <input
              type="text"
              id="userId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleLoginInfo}
            />
            <div className="pwContainer">
              <input
                type={isPwHidden ? "password" : "text"}
                id="userPw"
                placeholder="비밀번호"
                onChange={this.handleLoginInfo}
              />
              <span className="showPw" onClick={this.toggleHiddenPw}>
                {isPwHidden ? "Show" : "Hide"}
              </span>
            </div>
            <button
              className={activateBtn ? "active" : ""}
              onClick={this.validateLogin}
            >
              로그인
            </button>
          </form>
          {/* <a href="" className="fgtPw"> */}
          <span className="fgtPw">비밀번호를 잊으셨나요?</span>
          {/* </a> */}
          {/* <Link className="signUp" to="/signup">
            회원가입
          </Link> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
