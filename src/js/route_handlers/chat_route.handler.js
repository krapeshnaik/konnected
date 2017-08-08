'use strict';

import debug from 'debug';

import Konnected from '@root/app_scope.js';
import render from '@utils/render.js';
import chatComponent from '@components/chat.component.js';

let logger = debug('konnected:chat_route');

export default () => {
    let messages = [];

    // Use IDB

    // render
    logger('render');
    render(false, chatComponent(messages));
}