'use strict';

import debug from 'debug';

import render from '@utils/render.js';
import devicesComponent from '@components/devices.component.js';
import Konnected from '@root/app_scope.js';

let logger = debug('konnected:devices_route');

export default () => {
    // check if devices are already fetched
    if (Konnected.devices) {
        logger('cached devices');
        render(false, devicesComponent(Konnected.devices));
        return;
    }

    // get all devices
    Konnected
        .firebase
        .database()
        .ref('/devices')
        .once('value', snapshot => {
            // re render
            logger('devices fetched');
            Konnected.devices = snapshot.val();
            render(false, devicesComponent(Konnected.devices));

            // activate link
            document
                .querySelector('.devices-link')
                .focus()
        });

    // loading
    logger('loading');
    render(true);
}