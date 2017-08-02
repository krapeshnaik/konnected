'use strict';

import debug from 'debug';
import Konnected from '@root/app_scope';

let logger = debug('konnected:login');

const initLogin = () => {
    logger('initialize');

    let loginButton = document.querySelector('#login_konnect');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            logger('logging in..');

            Konnected
                .firebase
                .auth()
                .signInWithEmailAndPassword('krapeshnaik@gmail.com', 'krapesh')
                .then(user => {
                    logger('logged in', user);
                    window.location.hash = '/';
                    // store per session
                    Konnected.user = user;
                })
                .catch(error => {
                    logger('error', error);
                });
        })
    }
}

export default {
    init: initLogin
}