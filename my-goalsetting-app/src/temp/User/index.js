import React from 'react';
import { List } from 'antd';

//import { removeUser } from "../../actions/admin";

import "./styles.css";

class User extends React.Component {

  //add user info

  render() {
    const { user, adminComponent } = this.props;

    return (
      <List.Item>
        {user.name}
      </List.Item>


    );

  }
}

export default User;
