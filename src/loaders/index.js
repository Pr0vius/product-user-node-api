require('colors');
const ExpressServer = require("./server/expressServer");
const config = require("../config/index");
const logger = require('./logger/winston.logger');

module.exports = async () => {
  const server = new ExpressServer();
  logger.info(`Express Server Loaded`);

  server.start();
  logger.info(`#####################################
        Server is listening on PORT: ${config.port}
      #####################################`.cyan);
};
