import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// 인태's 컴포넌트
import LoginIntae from './src/Pages/Intae/Login/Login';
import MainIntae from './src/Pages/Intae/Main/Main';

// 민선's 컴포넌트
import LoginMinsun from './src/Pages/Minsun/Login/Login';
import MainMinsun from './src/Pages/Minsun/Main/Main';

// 승완's 컴포넌트
import LoginSeungwan from './src/Pages/Seungwan/Login/Login';
import MainSeungwan from './src/Pages/Seungwan/Main/Main';

// 성현's 컴포넌트
import LoginSunghyun from './src/Pages/Sunghyun/Login/Login';
import MainSunghyun from './src/Pages/Sunghyun/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-intae" component={LoginIntae} />
          <Route exact path="/main-intae" component={MainIntae} />
          <Route exact path="/login-minsun" component={LoginMinsun} />
          <Route exact path="/main-minsun" component={MainMinsun} />
          <Route exact path="/login-seungwan" component={LoginSeungwan} />
          <Route exact path="/main-seungwan" component={MainSeungwan} />
          <Route exact path="/login-sunghyun" component={LoginSunghyun} />
          <Route exact path="/main-sunghyun" component={MainSunghyun} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;