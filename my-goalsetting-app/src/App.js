import React from 'react';
import './App.css';

import Home from './Home';

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
            <Home/>
      </div>
      );
  }

}


export default App;