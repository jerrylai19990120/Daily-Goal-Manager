import React from "react";
import { Layout, Menu } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import './../App.css';
import Profile from './../profile'
import GoalList from './../GoalListView/GoalList'; 
import "./styles.css";

const { Header, Content, Footer } = Layout;

class Home extends React.Component {

  render() {
    return (
      <Router>
      <Layout className="layout">

        <Header>
          <h1 className="website_title">My Goal Setting App</h1>
        </Header>

        <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
            <Menu.Item key="1">
              Goals
              <Link to='/goalsPage'/>
            </Menu.Item>
            <Menu.Item key="2">
              Profile
              <Link to='/profilePage'/>
            </Menu.Item>
          </Menu>
        </Header>

         
        <Content style={{ padding: '0 30px' }}>
            <div >
              <Route path='/goalsPage' component={GoalList}/>
            </div>
            <Route path='/profilePage' component={Profile}/>
        </Content>
                      
        </Layout>
      </Layout> 
      </Router>
    );  
  }
}

export default Home;