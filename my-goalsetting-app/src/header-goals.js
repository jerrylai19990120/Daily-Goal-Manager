import React from 'react';

class HeaderGoals extends React.Component{

    render(){
        return(
            <div>
                <img className="header-icon" src={require('./images/icons8-todo-list-96.png')} alt=''/>
                <h1 className="header-title">Way To Go, Keep Yourself on track!</h1>
            </div>
        );
    }
}

export default HeaderGoals;