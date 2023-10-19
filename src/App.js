
import './App.css';
import DashBoard from './DashBoard';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      {/* <DashBoard/> */}
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import DashBoard from './DashBoard'; 

// function App() {
//   return (
//     <Router>
//       <Route path="/" exact component={LoginForm} />
//       <Route path="/DashBoard" component={DashBoard} />
//     </Router>
//   );
// }

// export default App;