import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";


function App() {
  let [changeMode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleModeDark = () => {
    if (changeMode === 'light' || changeMode === 'danger' || changeMode === 'success' || changeMode === 'info') {
      setMode('dark');
      document.body.style.backgroundColor = '#2b2929'
    }
  }
  const toggleModeLight = () => {
    if (changeMode === 'dark' || changeMode === 'danger' || changeMode === 'success' || changeMode === 'info') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  const toggleModeRed = () => {
    if (changeMode === 'light' || changeMode === 'dark' || changeMode === 'success' || changeMode === 'info') {
      setMode('danger');
      console.log(changeMode);
      document.body.style.backgroundColor = 'orange'
    }
  }
  const toggleModeGreen = () => {
    if (changeMode === 'light' || changeMode === 'dark' || changeMode === 'danger' || changeMode === 'info') {
      setMode('success');
      console.log(changeMode);
      document.body.style.backgroundColor = 'green'
    }
  }
  const toggleModeBlue = () => {
    if (changeMode === 'light' || changeMode === 'dark' || changeMode === 'success' || changeMode === 'danger') {
      setMode('info');
      console.log(changeMode);
      document.body.style.backgroundColor = 'blue'
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Fiddle with texts" about="About" mod={changeMode} toggleModeDark={toggleModeDark} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen} toggleModeBlue={toggleModeBlue} toggleModeLight={toggleModeLight} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/home" element={<TextForm placeholder="Enter text to Start." mode={changeMode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
