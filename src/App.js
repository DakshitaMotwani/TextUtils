import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React,{useState} from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const [gmode, setgMode] = useState('light');

  const showAlert = (message)=>{
      setalert({
        msg: message,
      })
      setTimeout(() => {
        setalert(null);
      }, 1400);
  }
  //green mode
  const greenMode =()=>{
    if(gmode==='light'){
      setgMode('green');
      document.body.style.backgroundColor = '#11995a';
      showAlert("Green mode is enabled");
    }
    else{
      setgMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled");
    }
  };

  //toggle-dark-mode
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#16263e';
      showAlert("Dark mode is enabled");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled");
    }
  };
  return (
    <>
      <BrowserRouter>
      <Navbar Title="TextUtils" mode= {mode} toggleMode= {toggleMode} gmode={gmode} greenMode={greenMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
      <Routes>
          < Route exact path="/" element={<TextForm heading = "Enter the text to analyze" mode={mode} showAlert={showAlert} gmode={gmode}/>}/>
   
          <Route exact path="/About" element={<About mode={mode} showAlert={showAlert} gmode={gmode}/>}/> 
      </Routes> 
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
