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

var userClass = '';

function updateClass(c) {
  userClass = c;
  console.log(userClass);
  this.setState({tempUserClass: c});
};

class Home extends React.Component {
  state = {
    tempUserClass: '',
    currUserClass: userClass,
  }

  componentWillMount() {
      updateClass = updateClass.bind(this);
 }

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
            {(this.state.currUserClass === "admin" || this.state.tempUserClass === "admin") &&
              <Menu.Item key="3" className="menu_item">
                Admin
                <Link to='/admin'/>
              </Menu.Item>
            }
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
                            (<Goal title='title' targetDays={10} description="sample description"/>)}/>
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
export { updateClass };