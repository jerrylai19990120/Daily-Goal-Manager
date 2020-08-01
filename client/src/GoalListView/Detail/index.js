import React from 'react';

class Detail extends React.Component{


    constructor(){
        super();
        this.state = {
            content: 'goal description!!!'
        }
    }


    render(){
        return(
            <div>
                <span>{this.state.content}</span>
            </div>
        );
    }
}

export default Detail;