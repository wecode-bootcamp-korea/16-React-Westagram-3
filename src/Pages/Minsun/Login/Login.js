import React from "react";
import { withRouter } from "react-router-dom";
import { SIGNIN_API, SIGNUP_API } from "../../../config";
import "./Login.scss";
class LoginMinsun extends React.Component {
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

  //인풋 상태 값 받아오는 함수
  changeInput = (evt) => {
    const { id, value } = evt.target;
    this.setState({
      [id]: value,
    });
  };

  //비밀번호 값 숨기고 보여주게 하는 함수
  toggleShowPw = () => {
    this.setState({
      showPw: !this.state.showPw,
    });
  };

  //로그인 정보 확인하는 함수
  validateLogin = (evt) => {
    evt.preventDefault();
    // const checkId = this.state.id.includes("@");
    // const checkPw = this.state.pw.length > 4;
    // if (checkId && checkPw) {
    //   this.setState({
    //     validLoginInfo: true,
    //   });
    //   alert("로그인 성공! (❁´◡`❁)");
    //   // this.props.history.push("/main-minsun");
    // }
    // if (!checkId) {
    //   this.setState({
    //     validText: "아이디는 @를 포함합니다.",
    //   });
    // }
    // if (!checkPw) {
    //   this.setState({
    //     validText: "비밀번호는 5자 이상 입니다.",
    //   });
    // }

    //지금은 로그인 버튼 1개이므로 사인업을 먼저 한 후 사인인 요청을 보낸다(원래는 각 버튼에 따른 api요청을 보냄)
    //로그인을 하게 되면 토큰을 받게되는게 로그인유무를 기억하기 위해 토큰을 저장해둔다
    fetch(SIGNIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        //꼭 결과를 콘솔에 찍어봐서 토큰값이 어느 property로 전달되는지 확인하기!
        console.log(result);
        //토근이 전달되는 property명을 확인 후 꺼내서 로컬스토리지에 저장하기
        localStorage.setItem("token", result.Authorization);
      });
  };

  checkToken = () => {
    //로컬스토리지 "token"키에 저장되어있는 토큰값을 가져와서 콘솔에 찍는다
    const token = localStorage.getItem("token");
    console.log({ token });
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
          <button onClick={this.checkToken}>토근확인</button>
        </section>
      </div>
    );
  }
}

export default withRouter(LoginMinsun);
