/* Log-in view page */
import React from 'react';
import { Form , Input , Button , Typography } from 'antd';

import "./styles.css";

const { Title } = Typography;

class Login extends React.Component {
  state = {


  }

  render() {
    return (
      <div className="login">
        <Title className="title">Welcome Back</Title>
        <Title level={4}>Some inspiring slogan</Title>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        //onFinish={onFinish}
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
            <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
            Or <a href="">Sign Up</a>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login
