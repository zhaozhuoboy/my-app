import React from 'react';
import {render} from 'react-dom';

import LuYou from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './css/animate.min.css';

import WOW from 'wow.js/dist/wow.js';
new WOW().init();
render(<LuYou />,document.getElementById('root'));
