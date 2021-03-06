/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import './styles/navbar.css'
import './navbar.js';

// start the Stimulus application
import './bootstrap';

import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';
const swup = new Swup({
    plugins: [new SwupOverlayTheme({
        color: '#198754',
        duration: 300,
        direction: 'to-right',
    })]
});

