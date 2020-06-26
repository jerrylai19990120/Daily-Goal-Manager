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
  }

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

