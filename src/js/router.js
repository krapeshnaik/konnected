import {
    Router
} from './lib/director.js';
import getComponent from './util/get_component.util.js';

import indexRouteHandler from './route_handlers/index_route.handler.js';
import chatRouteHandler from './route_handlers/chat_route.handler.js';
import notFoundRouteHandler from './route_handlers/not_found_route.handler.js';

const routes = {
    '/': indexRouteHandler,
    'chat': chatRouteHandler
};

const allRoutes = () => {
    console.log("dsfds");
};

const router = Router(routes);

router.configure({
    html5history: false,
    on: allRoutes,
    notfound: notFoundRouteHandler
});

export default router;