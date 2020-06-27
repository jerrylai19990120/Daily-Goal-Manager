import React from 'react';
import './goal-description.css';
import {Col, Row} from 'antd';

class Comment extends React.Component{


    constructor(){
        super();
        this.state = {
            user: 'Jerry',
            pic: './images/profilePic.jpg',
            date: 'May 20, 2020'
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