'use strict';

import {
    Router
} from '@libs/director.js';
import getComponent from '@utils/get_component.util.js';

import indexRouteHandler from '@route_handlers/index_route.handler.js';
import devicesRouteHandler from '@route_handlers/devices_route.handler.js';
import chatRouteHandler from '@route_handlers/chat_route.handler.js';
import loggedOuthandler from '@route_handlers/logged_out_route.handler.js';
import notFoundRouteHandler from '@route_handlers/not_found_route.handler.js';

import loginCheckMiddleware from '@middlewares/login_check.middleware.js';

const routes = {
    '/': indexRouteHandler,
    'devices': devicesRouteHandler,
    'chat': chatRouteHandler
};

const allRoutes = () => {
    // console.log("dsfds");
};

const router = Router(routes);

router.configure({
    html5history: false,
    on: allRoutes,
    // before: loginCheckMiddleware,
    notfound: notFoundRouteHandler
});

export default router;