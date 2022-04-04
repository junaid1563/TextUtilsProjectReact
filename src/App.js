import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import About from "./components/About";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // to toggle mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled Dark Mode", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success");
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      message, type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  return (<>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <TextForm heading="Enter the Text Here to Analyze" mode={mode} showAlert={showAlert} />
  </>
    // <Router>

    //   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert} />
    //   <Routes>

    //     <Route exact path="/about" element={<About />} />
    //     <Route exact path="/TextUtilsProjectReact" element={<TextForm heading="Enter the Text Here to Analyze" mode={mode} showAlert={showAlert} />
    //     } />
    //   </Routes>

    // </Router>
  );
}

export default App;
