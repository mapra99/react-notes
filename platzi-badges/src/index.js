import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import Badge from './components/Badge';

const container = document.getElementById('app');
ReactDOM.render(<Badge 
                  firstName="Miguel" 
                  lastName="Prada" 
                  jobTitle="Frontend Engineer" 
                  twitterHandle="MiguelPrada1" 
                  avatarUrl="https://www.gravatar.com/avatar/"/>, container);
