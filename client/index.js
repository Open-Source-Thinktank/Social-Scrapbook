import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import styles from './stylesheets/styles.scss';

// import Sample from './Sample.jsx';

//<h3>Can you see me?</h3>,
render(
    (<BrowserRouter>
        <App />
    </BrowserRouter>),

    document.getElementById('root'),
);