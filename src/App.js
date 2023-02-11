import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {HashRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#141413';
      document.title = "Text Utility Toastify Dark";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "Text Utility Toastify";
    }
    
  }
  return (
    <>
    <HashRouter>
      <div>
        <Navbar title="Text Utility Toastify" mode={mode} toggleMode = {toggleMode}/>
        <ToastContainer />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} toggleMode = {toggleMode}/>}/>
            <Route path="/" element={<TextForm heading="Enter Text to Analyze" mode={mode} />}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
    </>
  );
}

export default App;
