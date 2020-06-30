import React from "react";
import { Layout, Menu } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import './../App.css';
import Profile from './../profile'
import GoalList from './../GoalListView/GoalList'; 
import "./styles.css";

import Goal from './../goal-description-component/goal-section'

// import Detail from "./../GoalListView/GoalDetail";

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
              <Link to='/profilePage'/>
            </Menu.Item>
          </Menu>
        </Header>

          
        <Content>
        <div >
          <Switch> 
            <Route exact path='/' render={() => 
                            (<GoalList />)}/>
            <Route exact path='/goalsPage' render={() => 
                            (<GoalList />)}/>
            <Route exact path='/profilePage' render={() => 
                            (<Profile />)}/>
            <Route exact path='/GoalDetail' render={() =>
                            (<Goal />)}/>
          </Switch>
        </div>
        </Content>
                      
  
      </Layout> 

    );  
  }
}

export default Home;