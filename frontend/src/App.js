import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/LoginFormModal";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import IntroBar from "./components/IntroBar";
import FirstCollection from "./components/FirstCollection";


function App() {
  return (
    <>
      <Navigation />
      <SearchBar />
      <IntroBar />
      <FirstCollection />
        <Switch>
          <Route>
          </Route>
        </Switch>
    </>
  );
}

export default App;
