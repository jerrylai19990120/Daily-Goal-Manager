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
import { json } from 'body-parser';

class App extends React.Component {

  constructor(props){
    super(props);
    readCookie(this);
    this.state = {
        currentUser: null,
        abc: "123",
        goals: []
    }
  }

  componentDidMount(){
    fetch('/goals')
      .then(result => {
        return result.json()
      })
      .then(json => {
        console.log(json.goals[2].duration)
        this.setState({goals: json.goals})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render(){

    const currentUser = this.state.currentUser;

    let goalRoutes = [];

    for(let i=0;i<this.state.goals.length;i++){
      goalRoutes.push(<Route exact path={`/GoalDetail/${this.state.goals[i].title}`} render={() =>
        (<Goal title={`${this.state.goals[i].title}`} targetDays={`${this.state.goals[i].duration}`} description={`${this.state.goals[i].description}`}/>)}/>);
    }

    return (

      <div className="App">

        <BrowserRouter>
          <Switch>
            
            <Route exact path='/signup' render={() =>
                            (<Signup state={this.state}/>)}/> 
            
            <Route exact path={['/', '/login', '/home']} render={({history}) =>
                            (!currentUser? <Login state={this.state} history={history} app={this}/> : <Home state={this.state} history={history} app={this}/>)}/>
            {goalRoutes}
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
