import React from 'react';
import './App.css';
import './goal-description.css';
import 'antd/dist/antd.css';
import {Progress, Button} from 'antd';
import InfoSection from './section-des';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import ViewGoal from './view-goal';
import Comments from './comments-section'



class GoalSection extends React.Component{

    constructor(){
        super();
        this.state = {
            days: 0
        };
        this.logProgress=this.logProgress.bind(this);
    }
    
    logProgress(){
        let days = this.state.days;
        days++;
        this.setState({days: days});
    }


    render(){
    
        return(
            <div className="goal" style={{background:this.props.color}}>
                <div className="progress">
                    <Progress type="circle" percent={this.state.days} 
                    format={percent => `${percent} Days`} 
                    strokeColor='#FFCB35'
                    />
                </div>
                <h1 className='goal-title'>{this.props.title}</h1>
                <img src={require(`${this.props.im}`)} alt='' className='icons'/>
                <div className='info'>
                    <InfoSection />
                </div>
                
                    <ul className='buttonGroup'> 
                        <li><Button className='btn' type="primary" onClick={this.logProgress}>Log Your Progress</Button></li>
                        <li><Link to='/comments'><Button className='btn' type="primary">Comments</Button></Link></li>
                        <li><Link to='/viewGoal'><Button className='btn' type="primary">View Goal</Button></Link></li>
                    </ul>
                    
                
            </div>
        );
    }

}

export default GoalSection;