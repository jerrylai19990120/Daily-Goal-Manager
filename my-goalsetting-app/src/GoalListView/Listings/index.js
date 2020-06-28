import React from 'react';

import { List, Button } from 'antd';
//import { uid } from "react-uid";
import { ArrowRightOutlined } from '@ant-design/icons';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './../../App.css';

//import Goal from "./../Goal";
import Detail from "./../GoalDetail";
import "./styles.css";


class Listings extends React.Component{
	render() {

		const { goals , listComponent } = this.props;

		return (

			<Router>

		    <List
			    itemLayout="vertical"
			 
			    dataSource={goals}
			    renderItem={item => (
			      <List.Item
			        className="listItem"
			        key={item.goalTitle}
			      >
			        <List.Item.Meta
			          title={<a className="title">{item.goalTitle}</a>}
			          description={<span>Duration: {item.goalDuration} Days</span>}
			        />
			        <span >Description: {item.goalDescription}</span>
			        <div className="button"/>
			        <Button >More Info <ArrowRightOutlined /></Button>
			      </List.Item>
			    )}
			  />
			<div>
				<Route path='/GoalDetail' component={Detail}/>
			</div>
			</Router>

		 );
	}
}

export default Listings;