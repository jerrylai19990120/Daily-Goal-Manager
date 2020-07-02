/* Sign-Up view page */
import React from 'react';
import { Form , Input , Button , Typography , Alert } from 'antd';
import { Redirect } from 'react-router-dom';
import {users} from '../../AdminView/Admin'

import "./../styles.css";

const { Title } = Typography;

const validateMessages = {
  required: 'Please enter your ${name}',
  types: {
    email: 'Please enter a valid E-mail',
  },
  string: {
    min: 'Minimum ${min} Characters Required',
  }
};

class Signup extends React.Component {
  state = {
    duplicateUsername: false,
    validUsername: false
  }

  onFinish = values => {
    this.setState({duplicateUsername: false});
    for (var i = 0; i < users.length; i++) {
      const user = users[i];
      if (values.username === user.username) {
        this.setState({duplicateUsername: true});
      }
    }
    if (!this.state.duplicateUsername) {
      this.setState({validUsername: true});
      users.push({
        username: values.username,
        email: values["e-mail"],
        password: values.password,
        class:"user"
         })
      console.log(users)
    }
  };

  renderRedirect = () => {
    if (this.state.validUsername) {
      return <Redirect to='/goalsPage' />
    }
  }

  render() {
    return (
      <div className="signup">
        <Title className="login_title">New Here?</Title>
        <Title level={4}>Join 100,000 other users to create and achieve goals!</Title>
        <Form
        className="login_form"
        validateMessages={validateMessages}
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
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
          {this.state.duplicateUsername &&
            <Form.Item>
              <Alert
                message="Username is already taken!"
                type="error"
                showIcon
                className="login_alert"
              />
            </Form.Item>
          }
          <Form.Item>
            {this.renderRedirect()}
            <Button type="primary" htmlType="submit" className="login_button">
              Sign Up
            </Button>
            <p>Been here before? <a href="login">Log in</a></p>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Signup
