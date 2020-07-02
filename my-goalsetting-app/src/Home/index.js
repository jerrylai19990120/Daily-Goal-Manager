import React from "react";
import { Layout, Menu } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import './../App.css';
import GoalList from './../GoalListView/GoalList';
import Admin from './../AdminView/Admin';
import "./styles.css";

import Goal from './../goal-description-component/goal-section'
import Profile from "../ProfileView/FindUserPage";
import FollowingPage from "../ProfileView/FollowingPage"

const { Header, Content } = Layout;

class Home extends React.Component {

  render() {
    return (
      <Layout className="layout">
        <Header>
          <h1 className="website_title">My Goal Setting App</h1>
        </Header>

        <Header>
          <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1" className="menu_item">
              Goals
              <Link to='/goalsPage'/>
            </Menu.Item>
            <Menu.Item key="2" className="menu_item">
              Profile
              <Link to='/user/samart'/>
            </Menu.Item>
          </Menu>
        </Header>


        <Content>
        <div className="home">
          <Switch>
            <Route exact path='/home' render={() =>
                            (<GoalList />)}/>
            <Route exact path='/goalsPage' render={() =>
                            (<GoalList />)}/>
            <Route exact path='/GoalDetail' render={() =>
                            (<Goal />)}/>
            <Route exact path='/admin' render={() =>
                            (<Admin />)}/>
              <Route exact path="/user/:name" component={Profile}>
              </Route>
              <Route exact path="/user/:name/following" component={FollowingPage}>
              </Route>
          </Switch>
        </div>
        </Content>


      </Layout>

    );
  }
}

export default Home;
