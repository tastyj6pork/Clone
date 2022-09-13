import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Head from './Head';
import Home from "./Home";
import Join from "./Join";
import Login from "./Login";
import Subhead from "./Subhead";
import Menu from "./Menu";
import Coin from "./Coin";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if(window.scrollY < 100){
      setScroll(true);
    }else{
      setScroll(false);
    }

  };
  
  return (<div>
        {scroll ? <Head /> : <Subhead />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/coin" element={<Coin />}></Route>
        </Routes>
  </div>);
}

export default App;
