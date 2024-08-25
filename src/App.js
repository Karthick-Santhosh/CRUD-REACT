// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import AddEmployee from './Components/AddEmployee';
import DeleteEmployee from './Components/DeleteEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
import GetEmployee from './Components/GetEmployee';
import './App.css';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Home route */}
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/delete" element={<DeleteEmployee />} />
          <Route path="/update" element={<UpdateEmployee />} />
          <Route path="/get" element={<GetEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


