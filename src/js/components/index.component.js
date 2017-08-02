'use strict';
require('@css/index.scss');

export default data => {
    let controls = Object.keys(data);
    let controlsHTML = '';

    controls.forEach(control => {
        controlsHTML += `<li>${control}</li>`
    });

    return {
        html: `<div class="home-container animated zoomIn">
            <div class="message">
                Welcome!
            </div>

            <ul>
                ${controlsHTML}
            </ul>
        </div>`,
        bindEvents: bindEvents
    };
}

const bindEvents = () => {};