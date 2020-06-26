import React from 'react';
import './goal-description.css';


class ViewGoal extends React.Component{

    constructor(){
        super();
        this.state = {
            title: '',
            length: 0,
            description: '',
            color: ''
        };
    }

    render(){
        return(
            <div className='viewGoal'>
                <div className='detail'>
                    
                </div>
            </div>
        );
    }
}

export default ViewGoal;