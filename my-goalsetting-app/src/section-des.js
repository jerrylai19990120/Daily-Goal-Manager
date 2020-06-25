import React from 'react';
import './App.css';
import './goal-description.css';
import 'antd/dist/antd.css';

class InfoSection extends React.Component{

    constructor(){
        super();
        this.state = {
            target: '',
            daysRemain: 0
        };
    }

    render(){
        return(
            <div>
                Target: 
            </div>
        );
    }
}

export default InfoSection;