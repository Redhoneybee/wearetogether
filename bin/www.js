const app = require('../index');
const { createServer } = require('http');

// config
const config = require('../config');

const startServer = async () => {
    await require('../loaders')(app);

    // server
    const server = createServer(app);

    // listen
    server.listen(config.port, () => {
        console.log(`server start`);
        console.log(`server listen...${config.port}`);
    })
};

startServer();