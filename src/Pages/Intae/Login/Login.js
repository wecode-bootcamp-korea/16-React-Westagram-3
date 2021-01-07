import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginIntae extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      validLoginInfo: false,
      validText: "",
      showPw: false,
    };
  }

  changeInput = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  toggleShowPw = () => {
    this.setState({
      showPw: !this.state.showPw,
    });
  };

  checkValidation = (e) => {
    e.preventDefault();
    const checkId = this.state.id.includes("@");
    const checkPw = this.state.pw.length > 4;
    if (checkId && checkPw) {
      this.setState({
        validLoginInfo: true,
      });
      alert("로그인 성공!");
      this.props.history.push("/main-intae");
    }
    if (!checkId) {
      this.setState({
        validText: "아이디는 @를 포함합니다.",
      });
    }
    if (!checkPw) {
      this.setState({
        validText: "비밀번호는 5자 이상 입니다.",
      });
    }
  };

  render() {
    const activeLoginBtn = (this.state.id.length && this.state.pw.length) > 0;

    return (
      <div className="Login">
        <section>
          <h1 className="logo">Westagram</h1>
          <form className="formContainer" action="#" method="GET">
            <input
              id="id"
              onChange={this.changeInput}
              className="loginInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <div className="pwContainer">
              <input
                id="pw"
                onChange={this.changeInput}
                className="loginInput"
                type={this.state.showPw ? "text" : "password"}
                placeholder="비밀번호"
              />
              <span className="showPw" onClick={this.toggleShowPw}>
                {!this.state.showPw ? "Show" : "Hide"}
              </span>
            </div>
            <button
              onClick={this.validateLogin}
              className="loginBtn"
              type="submit"
              disabled={activeLoginBtn ? false : true}
            >
              로그인
            </button>
          </form>
          <a href="#" className="linkToFindPw">
            비밀번호를 잊으셨나요?
          </a>
          <p className="alertForRejectedLogin">{this.state.validText}</p>
        </section>
      </div>
    );
  }
}

export default withRouter(LoginIntae);
