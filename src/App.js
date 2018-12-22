import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/pages/HomePage';
import BlogPage from './components/pages/BlogPage';

const App = () => (
    <div className="page-wrap">
        <Route path="/" exact component={HomePage}/>
        <Route path="/blog" exact component={BlogPage}/>
    </div>
);

export default App;
