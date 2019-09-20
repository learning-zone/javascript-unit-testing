import express from 'express';

import homepage from './middleware/homepage';
import login from './middleware/login';
import authenticate from './middleware/authenticate';
import dashboard from './middleware/dashboard';
import promiseTest from './middleware/promiseTest';
import apiRoutes from './routes/api';

function setupRoutes(app) {
    app.get('/', homepage);
    app.get('/login', login);
    app.get('/dashboard',
        authenticate,
        dashboard
    );
    app.get('/promises', promiseTest);

    app.use('/api', apiRoutes);
}

function start(port = 7080) {
    const app = express();

    setupRoutes(app);

    const server = app.listen(port, () => {
        console.log(`Server running on: ${port}`);
    });

    return server;
}

export {
    start
};
