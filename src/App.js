import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/pages/HomePage';
import BlogPage from './components/pages/BlogPage';
import Footer from './components/Footer';


const App = () => (
    <div className="page-wrap">
        <Route exact path="/" component={HomePage}/>
        <Route path="/blog" component={BlogPage}/>
        <Footer/>
    </div>
);

export default App;
