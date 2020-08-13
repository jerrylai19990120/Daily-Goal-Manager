import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Goal from './goal-description-component/goal-section'
import Home from './Home';
import Login from './LoginView/Login';
import Signup from './LoginView/Signup';
import { readCookie } from './actions/usersActions';

class App extends React.Component {

  constructor(props){
    super(props);
    readCookie(this);
  }

  state = {
    currentUser: null,
    currentUserID: null,
    abc: "123"
  }


  render(){

    const currentUser = this.state.currentUser;

    return (

      <div className="App">

        <BrowserRouter>
          <Switch>
            
            <Route exact path='/signup' render={() =>
                            (<Signup state={this.state}/>)}/> 
            
            <Route exact path={['/', '/login', '/home']} render={({history}) =>
                            (!currentUser? <Login state={this.state} history={history} app={this}/> : <Home state={this.state} history={history} app={this}/>)}/>
            
          </Switch>
        </BrowserRouter>

      </div>
      );
  }

}


export default App;
