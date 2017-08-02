'use strict';
// require('@css/index.scss');

import debug from 'debug';

let logger = debug('konnected:devices_comp');

export default data => {
    let controls = Object.keys(data);
    let controlsHTML = '';

    controls.forEach(control => {
        controlsHTML += `<button id="device1">${control}</button>`
    });

    return {
        html: `<div class="devices-container animated zoomIn">
            <div class="message">
                Welcome!
            </div>

            ${controlsHTML}
        </div>`,
        bindEvents: bindEvents
    };
}

const bindEvents = () => {
    document
        .querySelector('#device1')
        .addEventListener('click', e => {
            fetch('https://us-central1-konnected-e015d.cloudfunctions.net/chatBot?command=lights')
                .then(response => {
                    if (response.status !== 200) {
                        logger('Looks like there was a problem. Status Code: ' + response.status);
                        return;
                    }

                    // Examine the text in the response  
                    response.json().then(data => {
                        logger(data);
                    });
                })
                .catch(error => {
                    logger(error);
                })
        });
};