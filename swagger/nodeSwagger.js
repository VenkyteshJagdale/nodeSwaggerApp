const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Js Crud Apis',
      version: '1.0.0',
      description: 'CRUD stands for create, read, update, and delete. These functions are the four pillars of a complete CRUD API (and full-stack application, for that matter). Lets look at a sample healthcare company, Shmealth, which needs to store, access, and update its patients health records accurately and securely.',
    },
  },
  apis: ['./routes/userRoutes.js'], // Replace with the path to your route files
};

module.exports = swaggerJsdoc(options);