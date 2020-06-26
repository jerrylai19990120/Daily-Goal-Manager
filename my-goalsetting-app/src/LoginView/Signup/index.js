/* Sign-Up view page */
import React from 'react';
import { Form , Input , Button , Typography } from 'antd';

import "./../styles.css";

const { Title } = Typography;

const validateMessages = {
  required: 'Please enter your ${name}',
  types: {
    email: 'Please enter a valid E-mail',
  },
  string: {
    min: 'Minimum ${min} Characters Required',
  },
  //min: 'Minimum 3 Characters Required'
};

class Signup extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="signup">
        <Title className="login_title">New Here?</Title>
        <Title level={4}>Join 100,000 other users</Title>
        <Form
        className="login_form"
        validateMessages={validateMessages}
        initialValues={{ remember: true }}
        //onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, min: 3}]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="e-mail"
            rules={[{ required: true, type: 'email'}]}
          >
            <Input placeholder="E-Mail" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, min: 5}]}
          >
            <Input type="password" placeholder="Password"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login_button">
            Sign Up
            </Button>
            <p>Been here before? <a href="">Log in</a></p>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Signup
