import { setupRoutes } from '@/main/config/routes';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());

setupRoutes(app);

export default app;
