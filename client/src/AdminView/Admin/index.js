/* Admin view page */
import React from 'react';
import { Collapse , Divider } from 'antd';

// Import components
import UserList from "./../UserList";
import FlaggedGoalList from "./../FlaggedGoalList";
import FlaggedCommentList from "./../FlaggedCommentList";
import "./styles.css";

// Import actions/methods\
import { getUsers } from '../../actions/usersActions'
import { getGoals } from '../../actions/goalActions';
const { Panel } = Collapse;


class Admin extends React.Component {
  state = {
    goals: [],
    flaggedComments: [
      {
        username: 'user',
        date: '5:50 AM, July 1, 2014',
        content: 'Reading a book sucks!!'
      },
      {
        username: 'admin',
        date: '6:47 PM, February 14, 2016',
        content: 'This goal is terrible!!'
      },
      {
        username: 'user2',
        date: '10:10 PM, December 25, 2018',
        content: 'Exercising is bad!!'
      }
    ],
    usersList: []
  }

  componentDidMount() {
    getUsers(this);
    getGoals(this);
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
              flaggedGoals={this.state.goals}
              adminComponent={this}
            />

          </Panel>
          <Panel header="Flagged Comments" key="2">

            {/* Flagged Comments List */}
            <FlaggedCommentList
              flaggedComments={this.state.flaggedComments}
              adminComponent={this}
            />

          </Panel>
        </Collapse>

        {/* The User List */}
        <Divider className='divider' orientation="left">Users</Divider>
        <UserList
          //users={this.state.userTemp}
          users={this.state.usersList}
          adminComponent={this}
        />

      </div>
    );
  }

}

export default Admin
export { users };
