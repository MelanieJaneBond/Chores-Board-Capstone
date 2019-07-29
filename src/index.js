import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import ChoresMain from './components/ChoresMain';

ReactDOM.render(
    <Router>
        <ChoresMain />
    </Router>
    , document.getElementById('root'));

