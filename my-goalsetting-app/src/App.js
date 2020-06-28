import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Goal from './goal-description-component/goal-section'
import Home from './Home';
import Login from './LoginView/Login';
import Signup from './LoginView/Signup';

// Jerry's App.js

// function App() {
//   return (
//     <div className="App">
//       <Goal />
//     </div>
//   );
// }

class App extends React.Component {

  state = {
    abc: "123"
  }

  render(){
    return (

      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route exact path='/login' render={() =>
                            (<Login state={this.state}/>)}/>
            <Route exact path='/signup' render={() =>
                            (<Signup state={this.state}/>)}/>
            <Home state={this.state}/>
          </Switch>
        </BrowserRouter>

      </div>
      );
  }

}


export default App;
