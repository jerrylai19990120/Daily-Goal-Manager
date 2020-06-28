import React from 'react';
import './goal-description.css';
import {Col, Row} from 'antd';

class Comment extends React.Component{


    constructor(){
        super();
        const date = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = date.getDate();
        let num_m = date.getMonth();
        let year = date.getFullYear();
        let hour = date.getHours();
        let mins = date.getMinutes();
        this.state = {
            user: 'Jerry',
            pic: './images/profilePic.jpg',
            date: `${hour}:${mins}, ${months[num_m]} ${day}, ${year}`
        }
    }


    render(){
        return(
            <div className='comment'>
                <Row>
                    <Col span={4}>
                        <img className='comment-icon' src={require(`${this.state.pic}`)} alt=''/>
                    </Col>
                    <Col span={20}>
                        <div className='content'><strong>{this.state.user}</strong>{" "}{this.props.content}</div>
                        <span className='date'>{this.state.date}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Comment;