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
            {/* <Route exact path="/form" element={<Form/>}/>
            <Route exact path={'/patient=:userId'} element={<Details  />}/> */}
          </Routes>
      </Router>





    </div>
  );
}

export default App;
