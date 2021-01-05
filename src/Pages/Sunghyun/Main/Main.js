import React from "react";
import { withRouter } from "react-router-dom";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import Nav from "./Nav/Nav";
import "../../../Styles/reset.scss";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <main className="main">
          <MainLeft />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default withRouter(Main);
