
import { useEffect, useState } from 'react';
import './App.css';
import Mainpage from './components/Mainpage';
import Welcome from './components/Welcome';

function App() {
  const [first, setfirst] = useState("home");
  useEffect(() => {
    setTimeout(() => {
      setfirst("newhome");
    }, 5000);
  })
  
  return (
    <>
    {first === "home" ? <Welcome /> : <Mainpage />}
    </>
  );
}

export default App;
