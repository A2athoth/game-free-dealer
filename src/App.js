import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from './components/Home';
import CrawlingByTitle from './components/CrawlingByTitle';
import CrawlingByUrl from './components/CrawlingByUrl';
import './App.css';

class App extends Component {
  render() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" component={Home}></Route>
            <Route path="/title" component={CrawlingByTitle}></Route>
            <Route path="/url" component={CrawlingByUrl}></Route>
        </HashRouter>
    );
  }
}

export default App;
