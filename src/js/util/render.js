'use strict';

const render = (isLoading, component = {}) => {
    if (isLoading) {
        document
            .querySelector('.router-view')
            .innerHTML = 'Loading..';
    } else {
        document
            .querySelector('.router-view')
            .innerHTML = component.html;

        component.bindEvents();
    }
}

export default render;