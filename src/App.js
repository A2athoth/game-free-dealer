import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from './components/Home';
import CrawlingByTitle from './components/CrawlingByTitle';
import CrawlingByUrl from './components/CrawlingByUrl';
import './App.css';

class App extends Component {
  render() {
    return (
        <HashRouter>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/title" component={CrawlingByTitle}></Route>
            <Route path="/url" component={CrawlingByUrl}></Route>
        </HashRouter>
    );
  }
}

export default App;
