'use strict';

import debug from 'debug';

import render from '@util/render.js';
import indexComponent from '@components/index.component.js';
import Konnected from '@root/app_scope.js';

let logger = debug('konnected:index_route');

export default () => {
    let data = {};

    if (!Konnected.watchEnabled) {
        Konnected
            .firebase
            .database()
            .ref('/devices')
            .on('value', snapshot => {
                data = snapshot.val();

                // re render
                logger('data received');
                render(false, indexComponent(data));
            })

        Konnected.watchEnabled = true;
    }

    // loading
    logger('loading');
    render(true);
}