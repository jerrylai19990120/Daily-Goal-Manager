import React from 'react';
import './goal-description.css';
import Comment from './comment'


class Comments extends React.Component{

    constructor(){
        super();
        this.state = {
            numOfComments: 0
        }
    }


    render(){


        const comments = [];

        if(this.state.numOfComments === 0){
            comments.push(<Comment/>);
        }else{
            for(let i=0; i<this.state.numOfComments;i++){
                comments.push(<Comment/>);
            }
        }


        return(
            <div className='comments'>
                    {comments}
            </div>
        );
    }
}

export default Comments;