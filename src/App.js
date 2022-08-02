import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
// import PropTypes from 'prop-types'//impt 

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert(
      {msg:message,
      type:type}
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removecls =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');

  }
const toggleMode = (cls)=>{  
    removecls();
   let background  ='bg-';
    document.body.classList.add(background);
  if (mode==='light') {
    setMode('dark');
    document.body.style.backgroundColor="#11253a";
    document.body.style.color="white";
    document.title ='textutils- dark mode';
  showAlert("dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    showAlert("light mode has been enabled","success");
    document.title ='textutils- light mode';

  }
    
     }

  return (
    <Router>
    <Navbar title = 'textUtils' mode={mode} toggleMode={toggleMode} about = 'about us'/>
      <Alert alert ={alert}/>
      <div className="container">
          <Routes>
            <Route exact path="/About" element= {<About title='this is '  mode={mode} toggleMode={toggleMode}/>}/>
            <Route exact path="/" element= {<TextForm heading = 'enter your text here' showAlert={showAlert} mode={mode} toggleMode={toggleMode} />}/>
          </Routes>
          {/* <TextForm heading = 'enter  your text here'  mode={mode} toggleMode={toggleMode} /> */}
    </div>
    </Router>
  
  );
// }
// Navbar.propTypes = {title:PropTypes.string.isRequired, about:PropTypes.string.isRequired}
// //this is the default value. incase no value is passed

// Navbar.defaultProps = {
//   title : 'set title here',
//   about :'set about us here'
// }
  }
export default App;