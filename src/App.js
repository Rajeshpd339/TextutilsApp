import React, { useState } from 'react'; //imrs 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {

const [mode, setMode] = useState('light')
const [alert, setAlert]=useState(null)
const showAlert=(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null)

  },2000
  )
}
const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#04027e';
    showAlert("Dark mode has been enabled", "success"); // Use "success" as the type
    //document.title="Dksra textutilies app-Dark Mode"  // this use for dynamic title change
    /*
    setInterval(() => {
      document.title="Dksra textutilies app is usefull app"

    },2000);
    setInterval(() => {
      document.title="install Dksra textutilies app"
      
    },1500);
    */   //this used f
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success"); // Use "success" as the type
    // document.title="Dksra textutilies app-Light Mode" // this is use for dynamic title change
  }
};

  return (
    <>
      <Navbar title="DKSRA Textutils App" aboutText="About Us"  mode={mode}  toggleMode={toggleMode}/> {/* here we are passing props as a title */}
      <Alert alert={alert}/>
      <div className='container'>
        <TextForm showAlert={showAlert} heading="Enter the text." mode={mode}/> {/*passing heading as a props  */}
        <About/>
      </div>
    </>
  );
}

export default App;
