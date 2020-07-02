import React from 'react';
import { List , Button , Col , Row , Avatar } from 'antd';

import "./styles.css";

const removeCom = (admin, comment) => {
  const temp = admin.state.flaggedComments.map((x) => x)
  for (var i = 0; i <admin.state.flaggedComments.length; i++) {
    if (comment === admin.state.flaggedComments[i]){
      temp.splice(i, 1);
      admin.setState({flaggedComments: temp});
    }
  }
}


class FlaggedCommentList extends React.Component {
  render() {
    const { flaggedComments , adminComponent } = this.props;

    return (
      <List
        className='list'
        bordered
        dataSource={flaggedComments}
        renderItem={item => (
          <List.Item actions={[<Button onClick={removeCom.bind(this, adminComponent, item)}>delete comment</Button>]}>
            <Col span={2}>
                <Avatar src={require(`${'../../goal-description-component/images/profilePic.jpg'}`)} />
            </Col>
            <Col span={12}>
                <div className='content'><strong>{item.username}</strong>{": "}{item.content}</div>
                <p className='date'>{item.date}</p>
            </Col>
          </List.Item>
        )}
      />

    );
  }


}

export default FlaggedCommentList;
