import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';
import serverless from 'serverless-http';

import routes from './routes/routes';

const PORT = process.env.PORT || 8000;

const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app, prisma };

export const handler = serverless(app);
