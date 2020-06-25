import React from 'react';
import './App.css';
import './goal-description.css';
import 'antd/dist/antd.css';
import GoalSection from './goal-section'



class Description extends React.Component{


    render() {
        return (
            <div id='description'>
                <GoalSection color='#CF4141' title='Weight Loss' im="./images/icons8-weightlifting-96.png"/>
                <GoalSection color='#407EDA' title='Reading A Book For 30 Mins' im="./images/icons8-reading-150.png"/>
                <GoalSection color='#2ACA63' title='Online Learning For 1 Hr' im="./images/icons8-e-learning-128.png"/>
            </div>
        )
    }

}

export default Description;

