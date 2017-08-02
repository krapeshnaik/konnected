'use strict';

import debug from 'debug';

import Konnected from '@root/app_scope.js';
import render from '@utils/render.js';
import chatComponent from '@components/chat.component.js';

let logger = debug('konnected:chat_route');

export default () => {
    let messages = [];

    // read all messages
    Konnected
        .firebase
        .database()
        .ref('/messages')
        .once('value')
        .then(snapshot => {
            messages = snapshot.val();

            // re render
            logger('data received');
            render(false, chatComponent(messages));
        });

    // loading
    logger('loading');
    render(true);
}