import TextForm from './Component/TextForm';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'
import About from './Component/About';
import React,{ useState } from 'react';
import Nav from './Component/Nav';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
 
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    
  }

  
  }
  return (
    <>
<Nav title="TextUtils" mode={mode} toggleMode={toggleMode}  />
    <div className="container my-3">
    <TextForm heading="Enter text to analyze" mode={mode} />
<About mode={mode}/>
    </div>
    </>
  )
}

export default App
