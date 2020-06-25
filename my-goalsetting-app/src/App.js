import React from 'react';

import './App.css';

import Admin from './temp/Admin';

class App extends React.Component {

  state = {
    abc: "123"
  }

  render() {
    return (
      <div className="App">
        <Admin state={this.state}/>
      </div>
    );
  }
}

export default App;
