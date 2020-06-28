import React from "react";
import { Table } from 'antd';
export class Goal extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {

		const { goal , listComponent } = this.props;

		return (
		    <Table dataSource=
		    { goal.goalTitle, goal.goalDescription, goal.goalDuration }
			/>
		 );

	}
}
export default Goal;

