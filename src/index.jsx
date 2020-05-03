// Mandatory to build a react app
import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
// Import of needed components
import App from './components/app';

// Need a index.html in templates with a unique root div
// This div will be used to contain the react app
const root = document.getElementById('root');

// Thanks to ReactDOM, render the code of the components in the selected div
ReactDOM.render(<App id="LmNwrBhejkK9EFP504" />, root);
