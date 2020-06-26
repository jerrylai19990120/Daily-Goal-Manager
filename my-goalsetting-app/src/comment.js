import React from 'react';
import './goal-description.css'

class Comment extends React.Component{


    constructor(){
        super();
        this.state = {
            content: 'Looks like the comment section is pretty empty'
        }
    }


    render(){
        return(
            <div className='comment'>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default Comment;