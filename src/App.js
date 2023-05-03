import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Anasayfa from "./components/Anasayfa";
import SiparisFormu from "./components/SiparisFormu";
import SiparisAlindi from "./components/SiparisAlindi";
import './App.css';
import './fonts';

const App = () => {
  return (
    <>
      <Router> 
      <Switch>
        <Route exact path="/" component={Anasayfa} />
        <Route path="/SiparisFormu" component={SiparisFormu} />
        <Route path="/SiparisAlindi" component={SiparisAlindi} />
      </Switch>
    </Router>
    </>
  );
};
export default App;
