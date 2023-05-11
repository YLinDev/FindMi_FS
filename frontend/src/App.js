import React from "react";
import { Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import IntroBar from "./components/IntroBar";
import FirstCollection from "./components/FirstCollection";
import Home from "./components/Home";
import ShowListing from "./components/ShowListing";
import UserListings from "./components/UserListings";
import SavedHomes from "./components/SavedHomes";
import Footer from "./components/Footer";
import Future from "./components/Future";


function App() {
  return (
    <>
      <Navigation path="/"/>
        <Switch>
          <Route exact path="/">
            <SearchBar />
            <FirstCollection />
            <IntroBar />
            <Footer />
          </Route>
          <Route exact path="/future">
            <Future />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/userListing/:userId">
            <UserListings />
            <Footer />
          </Route>
          <Route path="/savedHomes/:userId">
            <SavedHomes />
            <Footer />
          </Route>
          <Route path="/show/:listingId">
            <ShowListing />
          </Route>
        </Switch>
        
    </>
  );
}

export default App;
