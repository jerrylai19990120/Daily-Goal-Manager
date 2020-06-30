import React from 'react';
import { List, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './../../App.css';
import "./styles.css";


class Listings extends React.Component{
	render() {

		const { goals , listComponent } = this.props;

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
			          description={<span>Duration: {item.goalDuration} Days</span>}
			        />
			        <span >Description: {item.goalDescription}</span>
			        <div className="button"/>
			        <Link to={"/GoalDetail"}>
			        	<Button>More Info</Button>
			        </Link>
			      </List.Item>
			    )}
			  />

		 );
	}
}

export default Listings;