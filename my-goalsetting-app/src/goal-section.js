import React from 'react';
import './App.css';
import './goal-description.css';
import 'antd/dist/antd.css';
import {Progress, Button, Divider, Row, Col, Popover} from 'antd';
import {LikeOutlined, ShareAltOutlined, CommentOutlined, StarOutlined, CheckOutlined, SendOutlined, SmileOutlined} from '@ant-design/icons';
import Comment from './comment';
import TextareaAutosize from 'react-textarea-autosize';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';



class GoalSection extends React.Component{

    constructor(){
        super();
        this.state = {
            visible: false,
            pic: './images/profilePic.jpg',
            kudos: 0,
            rating: 0,
            days: 0,
            comments: [],
            enrolled: false,
            color: '#F646AC',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
        };
        this.logProgress=this.logProgress.bind(this);
    }
    
    logProgress(){
        let days = this.state.days;
        days++;
        this.setState({days: days});
    }

    hide = () => {
        this.setState({
            visible: false,
        });
    }

    handleVisibleChange = visible => {
        this.setState({ visible });
    }  
    
    commentFocus = () => {
        document.getElementById('enterComment').focus();
    }
    

    send = () => {
            let content = document.getElementById('enterComment').value;
            let comments = this.state.comments;
            comments.push(<Comment content={content}/>);
            this.setState({comments: comments});
            document.getElementById('enterComment').value = '';
    }


    render(){


        const check = (index)=>{
                let checks = document.getElementsByClassName('checked');
                for(let i=0;i<checks.length;i++){
                    if(i===index){
                        checks[index].style.visibility = 'visible';
                    }else{
                        checks[i].style.visibility = 'hidden';
                    }
                }
                if(index===5){
                    document.getElementById('init').style.visibility = 'visible';
                }else{
                    document.getElementById('init').style.visibility = 'hidden';
                }
        };

        const addEmojis = (e) => {
            let emoji = e.native;
            document.getElementById('enterComment').value += emoji;
        };

        

        const colors = [];
        colors.push(<li className='color color1'><div className='color-item item1' onClick={()=> {this.setState({color: '#4232EB'});check(0);}}><CheckOutlined className='checked'/></div></li>);
        colors.push(<li className='color'><div className='color-item item2' onClick={()=> {this.setState({color: '#FF4A4D'});check(1);}}><CheckOutlined className='checked'/></div></li>);
        colors.push(<li className='color'><div className='color-item item3' onClick={()=> {this.setState({color: '#4497FF'});check(2);}}><CheckOutlined className='checked'/></div></li>);
        colors.push(<li className='color'><div className='color-item item4' onClick={()=> {this.setState({color: '#2ACB63'});check(3);}}><CheckOutlined className='checked'/></div></li>);
        colors.push(<li className='color'><div className='color-item item5' onClick={()=> {this.setState({color: '#F646AC'});check(5);}}><CheckOutlined id='init'/></div></li>);
        colors.push(<li className='color'><div className='color-item item6' onClick={()=> {this.setState({color: '#ff9102'});check(4);}}><CheckOutlined className='checked'/></div></li>);
        
        
        return(
            <div className="goal" style={{background:this.state.color}}>
                <div className="progress">
                    <Progress type="circle" percent={this.state.days} 
                    format={percent => `${percent} Days`} 
                    strokeColor='#FFCB35'
                    />
                </div>
                <h1 className='goal-title'>{this.props.title}</h1>
                
                <ul className='buttonGroup'> 
                    <li><Button className='btn' type="primary" onClick={this.logProgress}>Log Your Progress</Button></li>
                    <li><Button className='btn' type="primary">Start Now</Button></li>
                    <li><Button className='btn' type="primary">Remove</Button></li>
                </ul>
                <div className='description'>
                    <h2>Goal</h2>
                    {this.state.description}
                </div>
                <div className='colors'>
                    <h2>Select Colors</h2>
                    <ul className='colorsList'>
                        {colors}
                    </ul>
                </div>
                <Divider />

                <Row>
                    <Col span={5}><button className='btn2'><LikeOutlined /> Kudo</button></Col>
                    <Divider type="vertical"/>
                    <Col span={6}><button className='btn2' onClick={this.commentFocus}><CommentOutlined /> Comment</button></Col>
                    <Divider type="vertical"/>
                    <Col span={6}><button className='btn2'><ShareAltOutlined /> Share</button></Col>
                    <Divider type="vertical"/>
                    <Col span={5}><button className='btn2'><StarOutlined /> Rate It</button></Col>
                </Row>
                
                <Divider />
                <Row>
                    <Col span={3}><img className='send-icon' src={require(`${this.state.pic}`)} alt=''/></Col>
                    <Col span={15}><TextareaAutosize id='enterComment' placeholder='Enter your comment...'></TextareaAutosize></Col>
                    <Col span={3}>
                        <Popover
                            content={<Picker onSelect={addEmojis}/>}
                            trigger="click"
                            visible={this.state.visible}
                            onVisibleChange={this.handleVisibleChange}
                        >
                        <button className='emojis'><SmileOutlined /></button>
                        </Popover>
                    </Col>
                    <Col span={3}><button className="sendBtn" onClick={this.send}><SendOutlined /></button></Col>
                    
                </Row>
                
                {this.state.comments}

            </div>
        );
    }

}

export default GoalSection;