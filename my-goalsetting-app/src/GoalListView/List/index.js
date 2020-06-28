import React from 'react';

import 'antd/dist/antd.css';

import { Table, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './../../App.css';

import Goal from "./../Goal";

import Detail from "./../GoalDetail";

const Column = Table;

class Listings extends React.Component{
	render() {

		const { goals , listComponent } = this.props;

		return (

			<Router>
		    <Table dataSource={goals}>
				<Column title="Goal Title" dataIndex="goalTitle" key="goalTitle" />
				<Column title="Description" dataIndex="goalDescription" key="goalDescription" /> 
				<Column title="Duration (days)" dataIndex="goalDuration" key="goalDuration" /> 
			    <Column
			      align="right"
			      key="action"
			      render={text => (
			      	<Link to={"./../GoalDetail"}>
			        	<Button>More Info <ArrowRightOutlined /></Button>
			        </Link>
			      )}

			    />
			</Table>
			<div>
				<Route path='/GoalDetail' component={Detail}/>
			</div>
			</Router>

		 );
	}
}

export default Listings;