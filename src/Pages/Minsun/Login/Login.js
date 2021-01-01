import React from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";
import { findAllByDisplayValue } from "@testing-library/react";

class LoginMinsun extends React.Component {
  constructor() {
    //super() 호출하는이유: 부모 클래스의 생성자 함수를 불러준다. 부모클래스로에 있는 변수에 접근하기 위해선 필요하다.
    //super() 인자로 props를 전달하면 리액트는 컴포넌트 넘어 props에 this.props로 접근 가능하도록 만든다.
    super();
    //초기 상태값 설정
    //페이지가 렌더하기 위해 필요한데이터 -> 로그인값, 비번값, 비번 보이는 버튼, 인풋한글자씩 이상이면 버튼활성화, 인풋validation
    this.state = {
      id: "",
      pw: "",
      validId: false,
      validPw: false,
      validText: "",
      showPw: false,
    };
  }

  changeInput = (evt) => {
    const { id, value } = evt.target;
    //when id's input clicked -> evt.target.id === 'id'
    this.setState({
      [id]: value,
    });
  };

  togglePw = () => {
    this.setState({
      showPw: !this.state.showPw,
    });
  };

  goToMain = (evt) => {
    evt.preventDefault();
    const checkId = this.state.id.includes("@");
    const checkPw = this.state.pw.length > 4;
    const { validId, validPw } = this.state;
    if (checkId && checkPw) {
      this.setState({
        [validId]: true,
        [validPw]: true,
      });
      alert("로그인 성공! (❁´◡`❁)");
      this.props.history.push("/main-minsun");
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
              <span className="showPw" onClick={this.togglePw}>
                {!this.state.showPw ? "Show" : "Hide"}
              </span>
            </div>
            {/* btn attr disabled 나중에 추가하기 
        btn에 disabled 속성을 추가해주기 위해 boelean 값과 함께 추가해준다.
        */}
            <button
              onClick={this.goToMain}
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

export default LoginMinsun;
