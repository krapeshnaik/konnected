'use strict';
require('@css/index.scss');

import debug from 'debug';
import Konnected from '@root/app_scope';

let logger = debug('konnected:index_comp');

export default data => {
    return {
        html: `<div class="home-container animated zoomIn">
            <button id="login_konnect" class="pure-button">Login</button>
        </div>`,
        bindEvents: bindEvents
    };
}

const bindEvents = () => {
    document
        .querySelector('#login_konnect')
        .addEventListener('click', () => {
            logger('logging in..');

            Konnected
                .firebase
                .auth()
                .signInWithEmailAndPassword('krapeshnaik@gmail.com', 'krapesh')
                .then(user => {
                    logger('logged in', user);
                    window.location.hash = '/devices';

                    // store per session
                    Konnected.user = user;
                })
                .catch(error => {
                    logger('error', error);
                });
        })
};