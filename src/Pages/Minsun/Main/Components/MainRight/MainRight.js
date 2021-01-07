import React from "react";
import RecommendList from "../RecommendList/RecommendList";
import FooterMenu from "../FooterMenu/FooterMenu";

class MainRight extends React.Component {
  render() {
    return (
      <div className="mainRightContainer">
        <aside className="accountsInfo">
          <section className="personalAccount">
            <a className="profileImg" href="#">
              <img src="/images/Minsun/profile.jpg" alt="profile" />
            </a>
            <div className="userInfoContainer">
              <a className="userId" href="#">
                usersssss
              </a>
              <span className="userInfo">nameeee</span>
            </div>
            <button type="button">전환</button>
          </section>
          <section className="recomendation">
            <div className="recomendTitle">
              <h4>회원님을 위한 추천</h4>
              <button className="viewAllBtn" type="button">
                모두 보기
              </button>
            </div>
            <RecommendList />
          </section>
        </aside>
        <footer>
          <FooterMenu />
          <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
        </footer>
      </div>
    );
  }
}

export default MainRight;
