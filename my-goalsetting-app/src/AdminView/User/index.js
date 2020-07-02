import React from 'react';
import { List , Avatar , Button} from 'antd';

//import { removeUser } from "../../actions/admin";

import "./styles.css";

const removeUser = (admin, user) => {
  const temp = admin.state.userTemp.map((x) => x)
  for (var i = 0; i <admin.state.userTemp.length; i++) {
    if (user == admin.state.userTemp[i]){
      temp.splice(i, 1);
      admin.setState({userTemp: temp});
    }
  }
}

class User extends React.Component {

  render() {
    const { user, adminComponent } = this.props;

    return (
      <List.Item actions={[<Button onClick={removeUser.bind(this, adminComponent, user)}>delete account</Button>]}>
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
