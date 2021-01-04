import React from "react";
import "./FooterMenu.scss";

const FOOTER_MENU = [
  "소개",
  "도움말",
  "홍보센터",
  "API",
  "채용정보",
  "개인정보처리방침",
  "약관",
  "위치",
  "인기계정",
  "해시태그",
  "언어",
];

class FooterMenu extends React.Component {
  render() {
    return (
      <ul className="linksAbout">
        {FOOTER_MENU.map((menu) => {
          return (
            <li>
              <a href="#">{menu}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FooterMenu;
