import React from 'react';
import './App.css';
import './goal-description.css';
import 'antd/dist/antd.css';
import {Progress} from 'antd';
import InfoSection from './section-des';

class GoalSection extends React.Component{


    render(){
        return(
            <div className="goal" style={{background:this.props.color}}>
                <div className="progress">
                    <Progress type="circle" percent={this.props.progress} 
                    format={percent => `${percent} Days`} 
                    strokeColor='#FFCB35'
                    />
                </div>
                <h1 className='goal-title'>{this.props.title}</h1>
                <img src={require(`${this.props.im}`)} alt='' className='icons'/>
                <div className='info'>
                    <InfoSection />
                </div>
            </div>
        );
    }

}

export default GoalSection;