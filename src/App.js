import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Main from "./components/Main";
import MTS from "./components/MTS";
import Beeline from "./components/Beeline";
import Megafone from "./components/Megafone";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <ParallaxProvider>
          <Main />
          {children}
          <BrowserRouter>
            <Switch>
              <Route path="/MTS" component={MTS}>
                <MTS />
              </Route>
              <Route path="/componets/Beeline" component={Beeline}>
                <Beeline />
              </Route>
              <Route path="/components/Megafone" component={Megafone}>
                <Megafone />
              </Route>
            </Switch>
          </BrowserRouter>
        </ParallaxProvider>
      </header>
    </div>
  );
};

export default App;
