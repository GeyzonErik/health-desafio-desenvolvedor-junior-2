import express from 'express';

const PORT = process.env.PORT || 3001;
const app = express();
const ownerModules = require('./owners/owners.controller')(app);
const animalModules = require('./animals/animals.controller')(app)

import { swaggerDocument } from './swagger/swagger';
const swaggerUi = require('swagger-ui-express');

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

ownerModules
animalModules


app.listen(PORT, () => {
    console.log(`REST API server ready at http://localhost:${PORT}`);
});