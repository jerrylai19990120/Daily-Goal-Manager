import React from "react";
import Listings from './../Listings'; 
import GoalForm from './../GoalForm'; 
import { Collapse } from 'antd';
import { useState } from "react";
import "./styles.css";

const { Panel } = Collapse;

const addGoal = table => {
  const goalList = table.state.goals;
  
  const goal = {
    goalTitle: table.state.goalTitle,
    goalDescription: table.state.goalDescription,
    goalDuration: Number(table.state.goalDuration)
  }

  goalList.push(goal);

  //console.log('goal:',goal);
  //console.log('goallist:',goalList);

  table.setState({
    goals: goalList
  });

  
};


class GoalList extends React.Component {

  state = {
    goalTitle: "",
    goalDescription: "",
    goalDuration: 1,

    // hardcoded data
    // would be imported from external API 
    goals: [
      {
        goalTitle: 'Goal 1',
        goalDescription: 'This goal is goal number 1.',
        goalDuration: 10, },
      {
        goalTitle: 'Goal 2',
        goalDescription: 'This goal is goal number 2.',
        goalDuration: 7,
      },
      {
        goalTitle: 'Goal 3',
        goalDescription: 'This goal is goal number 3.',
        goalDuration: 30,
      },
    ]
  };

  inputHandler = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value 
    });
  };
 
  
  render() {
    const { close } = this.state;
    
    return (
      <div className="content_padding">
    
        <h1 className="title">List of Goals</h1>
        <h3 className="subtitle">Select the Goals you want to join!</h3>

        <Collapse>
          <Panel 
          header={<span className="panel_header">Add New Goal Form</span>} 
          >

          <GoalForm 
            goalTitle = {this.state.goalTitle}
            goalDescription = {this.state.goalDescription}
            goalDuration = {this.state.goalDuration}
            handleChange = {this.inputHandler}
            addGoal={() => addGoal(this)}
          />
          
          </Panel>
        </Collapse>

        <Listings 
          goals={this.state.goals}
         
        />
  
      </div>

    );  
  }
}

export default GoalList;