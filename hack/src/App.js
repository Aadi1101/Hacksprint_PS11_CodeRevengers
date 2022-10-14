import React from 'react'; 
import  'bootstrap/dist/css/bootstrap.css';
import './app.css'
import {Home} from './components/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App ">
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            
          </Routes>
      </Router>





    </div>
  );
}

export default App;
