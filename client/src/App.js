import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Goal from './goal-description-component/goal-section'
import Home from './Home';
import Login from './LoginView/Login';
import Signup from './LoginView/Signup';
import { readCookie } from './actions/usersActions';
import Admin from './AdminView/Admin';
import Profile from './ProfileView/FindUserPage';
import FollowingPage from './ProfileView/FollowingPage';

class App extends React.Component {

  constructor(props){
    super(props);
    readCookie(this);
  }

  state = {
    currentUser: null,
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
            <Route exact path ='/GoalDetail' render={() =>
                            (<Goal title='title' targetDays={10} description="sample description"/>)}/>
            <Route exact path='/admin' render={() =>
                            (<Admin />)}/>
            <Route exact path="/user/:name" component={Profile}>
            </Route>
            <Route exact path="/user/:name/following" component={FollowingPage}>
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
      );
  }

}


export default App;
