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
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default Detail;