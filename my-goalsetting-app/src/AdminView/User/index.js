import React from 'react';
import { List , Avatar } from 'antd';

//import { removeUser } from "../../actions/admin";

import "./styles.css";

class User extends React.Component {

  //add user info

  render() {
    const { user, adminComponent } = this.props;

    return (
      <List.Item actions={[<a>delete account</a>]}>
        <List.Item.Meta
          avatar={<Avatar src=
            'https://pbs.twimg.com/profile_images/1262370602716889089/4Fk_pbO3_400x400.jpg' />}
          title={<a href="/profilePage">{user.username}</a>}
          description={user.email}
        />
      </List.Item>
    );

  }
}

export default User;
