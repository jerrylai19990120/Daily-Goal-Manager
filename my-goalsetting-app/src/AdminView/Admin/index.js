/* Admin view page */
import React from 'react';
import { Collapse , List , Divider } from 'antd';

// Import components
import UserList from "./../UserList";
import FlaggedGoalList from "./../FlaggedGoalList";
//import FlaggedCommentList from "./../FlaggedCommentList";
import "./styles.css";

// Import actions/methods
const { Panel } = Collapse;

class Admin extends React.Component {
  state = {
    flaggedGoals: [],
    flaggedComments: [],
    users: [
      {username:"admin", email:"acsd@admin.ad", password:"admin"},
      {username:"user", email:"user@user.us", password:"user"}
    ]
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
          users={this.state.users}
          adminComponent={this}
        />

      </div>
    );
  }

}

export default Admin
