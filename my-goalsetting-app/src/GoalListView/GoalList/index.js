import React from "react";
import Header from './../Header';  
import Goal from "./../Goal";
import Listings from './../Listings'; 
import GoalForm from './../GoalForm'; 
import { Collapse, Button } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


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

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    //console.log('target:', target) 
    //console.log('name:', name) // studentName
    //console.log('value:', value) // jake

    // 'this' is bound to the Queue component in this arrow function.
     //  In arrow functinos, 'this' is bound to the enclosing lexical function/global scope
     //  where it is *defined*.  This is different than 'this' in normal functions,
     //  which are bound at the call-site.
    this.setState({
      [name]: value // [name] sets the object property name to the value of the `name` variable.
    });
  };

  render() {
    
    return (
      <Router>
      <div>

        <Header
          title="List of Goals"
          subtitle="Select the Goals you want to join!"
        />

        <Collapse className='collapse'>
          <Panel header="Add New Goal Form">
          
          
{        /*    <GoalForm 
            goalTitle = {this.state.goalTitle}
            goalDescription = {this.state.goalDescription}
            goalDuration = {this.state.goalDuration}
            handleChange = {this.state.goalTitle}
            addGoal = {this.state.goalTitle}
          />
            */}
          <GoalForm 
            goalTitle = {this.state.goalTitle}
            goalDescription = {this.state.goalDescription}
            goalDuration = {this.state.goalDuration}
            handleChange = {this.handleInputChange}
            addGoal={() => addGoal(this)}
          />

          </Panel>
        </Collapse>

        <Listings 
          goals={this.state.goals}
          listComponent={this}
        />
        
        

      </div>
      

      </Router>
    );  
  }
}

export default GoalList;