'use strict';

import debug from 'debug';

import render from '@utils/render.js';
import devicesComponent from '@components/devices.component.js';
import Konnected from '@root/app_scope.js';

let logger = debug('konnected:devices_route');

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
                render(false, devicesComponent(data));
            })

        Konnected.watchEnabled = true;
    }

    // loading
    logger('loading');
    render(true);
}