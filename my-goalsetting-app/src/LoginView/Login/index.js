/* Log-in view page */
import React from 'react';
import { Form , Input , Button , Typography } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from '../../Home';

import "./../styles.css";

const { Title } = Typography;

class Login extends React.Component {
  state = {


  }

  onFinish = values => {
    if (values.username == 'user' && values.password == 'user') {
      //<Home state={this.state}/>
    }
  };

  render() {
    return (
      <div className="login">
        <Title className="login_title">Welcome Back</Title>
        <Title level={4}>Some inspiring slogan</Title>
        <Form
        name="normal_login"
        className="login_form"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input type="password" placeholder="Password"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login_button">
              <Link to="/goalsPage">Log in</Link>
            </Button>
            <p>Or <a href="/signup">Sign Up</a></p>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login
