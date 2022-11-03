//Dependencies:
const swaggerJsdoc = require ( 'swagger-jsdoc');
require ( 'dotenv').config();

//Options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Event service API',
            version: '1.0.0',
            description: ' Savannah Silica Event Service API documentation'
        },
        servers: [
            {
                url: `${process.env.APP_URL}:${process.env.APP_PORT}`,
            }
        ],
    },
    apis: ['./routers/*.js']
};

const specs = swaggerJsdoc (options);

//Export specs:
module.exports = specs;