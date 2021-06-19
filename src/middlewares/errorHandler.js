const logger = require("../loaders/logger/winston.logger");

const errorHandler = (err, req, res, next) => {
    const code = err.statusCode || 500;

    logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.ip}`);
    logger.error(`${err.stack}`);
    
    res.status(code).json({
        error: {
            code,
            message: err.message,
            data: err.data,
        },
    });
};

module.exports = errorHandler;
