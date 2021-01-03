import "../../../Styles/reset.scss";
import "./Main.scss";
import React from "react";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import Nav from "./Nav/Nav";
import { withRouter } from "react-router-dom";

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
