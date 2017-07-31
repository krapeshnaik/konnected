import { Router } from './lib/director.js';

import indexRouteHandler from './routeHandlers/indexRoute.handler.js';
import chatRouteHandler from './routeHandlers/chatRoute.handler.js';
import notFoundRouteHandler from './routeHandlers/notFoundRoute.handler.js';

const routes = {
    '/': indexRouteHandler,
    '/chat': chatRouteHandler
};

const allRoutes = () => {
    console.log("dsfds");
};

const router = Router(routes);

router.configure({
    html5history: true,
    on: allRoutes,
    notfound: notFoundRouteHandler
});

export default router;