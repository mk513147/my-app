import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

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
      <Navbar title="Fiddle with texts" about="About" mode={changeMode} toggleModeDark={toggleModeDark} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen} toggleModeBlue={toggleModeBlue} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm placeholder="Enter text to Start." mode={changeMode} showAlert={showAlert} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
