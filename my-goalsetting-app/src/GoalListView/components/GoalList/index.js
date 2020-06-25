import React from "react";

import Header from './../Header';  
import Goal from "./../Goal";
import Listings from './../List'; 
import GoalForm from './../GoalForm'; 
import { Collapse } from 'antd';



class GoalList extends React.Component {
 
  state = {
    goals: [
      {
        title: 'Goal 1',
        description: 'This goal is goal number 1.',
        duration: 10, },
      {
        title: 'Goal 2',
        description: 'This goal is goal number 2.',
        duration: 7,
      },
      {
        title: 'Goal 3',
        description: 'This goal is goal number 3.',
        duration: 30,
      },
    ]
  };

  render() {
    const { Panel } = Collapse;
    return (
      <div className ="App">
        <Header
          title="List of Goals"
          subtitle="Select the Goals you want to join!"
        />

        <Collapse className='collapse'>
          <Panel header="Add New Goal Form" key="1">
          
            <GoalForm />

          </Panel>
        </Collapse>

        <Listings 
          goals={this.state.goals}
          listComponent={this}
        />

      </div>
    );  
  }
}

export default GoalList;