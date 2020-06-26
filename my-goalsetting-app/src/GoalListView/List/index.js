import React from 'react';

import 'antd/dist/antd.css';

import { Table, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './../../App.css';

import Goal from "./../Goal";


class Listings extends React.Component{
	render() {

		const Column = Table;

		const { goals , listComponent } = this.props;

		return (
		    <Table dataSource={goals}>
				<Column title="Goal Title" dataIndex="title" key="title" />
				<Column title="Description" dataIndex="description" key="description" />
				<Column title="Duration (days)" dataIndex="duration" key="duration" /> 
			    <Column
			      align="right"
			      key="action"
			      render={text => (
			        <Button>More Info <ArrowRightOutlined /></Button>
			      )}
			    />
			</Table>
		 );
	}
}

export default Listings;