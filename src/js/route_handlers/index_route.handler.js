'use strict';

import debug from 'debug';

import render from '@utils/render.js';
import indexComponent from '@components/index.component.js';
import Konnected from '@root/app_scope.js';

let logger = debug('konnected:index_route');

export default () => {
    logger('render');
    render(false, indexComponent({}));
}