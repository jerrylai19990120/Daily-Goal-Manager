import React from 'react';
import { List, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './../../App.css';
import "./styles.css";


class Listings extends React.Component{
	render() {

		const { goals  } = this.props;

		return (

		    <List
			    itemLayout="vertical"
			 	className="listItem"
			    dataSource={goals}
			    renderItem={item => (
			      <List.Item
			        className="listItem"
			        key={item.goalTitle}
			      >
			        <List.Item.Meta
			          title={<span className="title">{item.goalTitle}</span>}
			          description={<span className="description">Description: {item.goalDescription}</span>}
			        />
			        <div><span className="duration">Duration: {item.goalDuration} Days</span></div>
			        <div className="button">
			        <Link to={"/GoalDetail"}>
			        	<Button>More Info</Button>
			        </Link>
			        </div>
			      </List.Item>
			    )}
			  />

		 );
	}
}

export default Listings;