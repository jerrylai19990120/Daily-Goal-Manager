/* Log-in view page */
import React from 'react';
import { Form , Input , Button , Typography , Alert } from 'antd';
import { Redirect } from 'react-router-dom';

import {users} from '../../AdminView/Admin';
import {updateClass} from '../../Home';
import "./../styles.css";
import {login} from '../../actions/usersActions';

const { Title } = Typography;
const users1 = login();
class Login extends React.Component {
  state = {
    correctAuth: false,
    firstTry: true
  }
  

  onFinish = values => {
    for (var i = 0; i < users.length; i++) {
      const user = users[i];
      if (values.username === user.username) {
        if (values.password === user.password) {
          this.setState({correctAuth: true});
          updateClass(user.class);
        }
      }
    }
    if (!this.state.correctAuth) {
      this.setState({firstTry: false});
    }
  };

  renderRedirect = () => {
    if (this.state.correctAuth) {
      return <Redirect to='/home' />
    }
  }

  render() {
    return (
      <div className="login">
        <Title className="login_title">Welcome Back</Title>
        <Title level={4}>Log in and Join others to accomplish your goals!</Title>
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
            <Input placeholder="Username" id="usernameLogin"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input type="password" placeholder="Password" id="passwordLogin"/>
          </Form.Item>
          {!this.state.firstTry &&
            <Form.Item>
              <Alert
                message="Wrong Username or Password. Try again."
                type="error"
                showIcon
                className="login_alert"
              />
            </Form.Item>
          }
          <Form.Item>
            {this.renderRedirect()}
            <Button type="primary" htmlType="submit" className="login_button" onClick={()=>{login(this)}}>
              Log in
            </Button>
            <p>Or <a href="/signup">Sign Up</a> to join our community.</p>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login