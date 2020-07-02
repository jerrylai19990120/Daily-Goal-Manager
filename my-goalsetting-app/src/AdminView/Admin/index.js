/* Admin view page */
import React from 'react';
import { Collapse , Divider } from 'antd';

// Import components
import UserList from "./../UserList";
import FlaggedGoalList from "./../FlaggedGoalList";
//import FlaggedCommentList from "./../FlaggedCommentList";
import "./styles.css";

// Import actions/methods
const { Panel } = Collapse;

const users = [
  {username:"admin", email:"acsd@admin.ad", password:"admin", class:"admin"},
  {username:"user", email:"user@user.us", password:"user", class:"user"},
  {username:"user2", email:"user2@user2.us", password:"user2", class:"user"}
];

class Admin extends React.Component {
  state = {
    flaggedGoals: [
      {
        goalTitle: 'Reported Goal 1',
        goalDescription: 'This goal is repoted goal 1.',
        goalDuration: 10, },
      {
        goalTitle: 'Reported Goal 2',
        goalDescription: 'This goal is reported goal 2.',
        goalDuration: 7,
      },
      {
        goalTitle: 'Reported Goal 3',
        goalDescription: 'This goal is reported goal 3.',
        goalDuration: 30,
      },
    ],
    flaggedComments: [],
    userTemp: users.map((x) => x)
  }

  render() {
    return (
      <div className="admin">
        {/* Need to add in toolbar later */}

        <Divider className='divider' orientation="left">
          Reported Goals and Comments
        </Divider>
        <Collapse className='collapse'>
          <Panel header="Flagged Goals" key="1">

            {/* Flagged Goal List */}
            <FlaggedGoalList
              flaggedGoals={this.state.flaggedGoals}
              adminComponent={this}
            />

          </Panel>
          <Panel header="Flagged Comments" key="2">
            <p>{'temp sdsd'}</p>

          </Panel>
        </Collapse>

        {/* The User List */}
        <Divider className='divider' orientation="left">Users</Divider>
        <UserList
          users={this.state.userTemp}
          adminComponent={this}
        />

      </div>
    );
  }

}

export default Admin
export { users };
