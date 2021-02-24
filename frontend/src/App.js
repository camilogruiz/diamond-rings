import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Index';
import Jewels from "./components/Jewels";
import Users from "./components/Users";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/users' component={Users} />
      <Route path='/jewels' component={Jewels} />
      <Route path='/about' component={About} />
    </Switch>
    <Footer />
  </>
  );
}

export default App;