import React from 'react';
import { List, Button } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './../../App.css';
import "./styles.css";


class Listings extends React.Component{
	render() {

		const { goals } = this.props;

		return (
            
		    <List
			    itemLayout="vertical"
			 	className="listItem"
			    dataSource={goals}
			    renderItem={item => (
			      <List.Item
			        className="listItem"
			        key={item.title}
			      >
			        <List.Item.Meta
			          title={<span className="title">{item.title}</span>}
			          description={<span className="subtitle">Description: {item.description}</span>}
			        />
			        <div><span className="duration">Duration: {item.duration} Days</span></div>
			        <div className="button">
			        <Link to={"/GoalDetail"} >
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