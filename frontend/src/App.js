import React from "react";
import { Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import IntroBar from "./components/IntroBar";
import FirstCollection from "./components/FirstCollection";
import Home from "./components/Home";
import ShowListing from "./components/ShowListing";


function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <SearchBar />
            <FirstCollection />
            <IntroBar />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/show/:listingId">
            <ShowListing />
          </Route>
        </Switch>
    </>
  );
}

export default App;
