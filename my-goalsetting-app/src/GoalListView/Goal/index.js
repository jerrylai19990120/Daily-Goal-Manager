import React from "react";

import { Table, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const log = console.log;

// Function to add a goal, needs to be exported
export const addGoal = table => {
  log("adding goal");
  const goalList = table.state.goals;

  const goal = {
    title: table.state.goalTitle,
    description: table.state.goalDescription,
    duration: table.state.goalDuration
  };

  // Adding at a particular position   --------------- delete?
  const position = parseInt(table.state.position);

  if (position > goalList.length || !position) {
    log("here");
    goalList.push(goal);
  } else {
    log("here2");
    goalList.splice(position - 1, 0, goal);
  }

  table.setState({
    goals: goalList
  });
};

class Goal extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {

		const { goal , listComponent } = this.props;

		return (
		    <Table dataSource=
		    { goal.title, goal.description, goal.duration }
			/>
		 );

	}
}

