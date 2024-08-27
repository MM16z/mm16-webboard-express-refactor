import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';

import authMiddleware from './middlewares/authMiddleware';
import authRoutes from './routes/authentications/routes';
import homeRoutes from './routes/homepage/routes';
import userRoutes from './routes/user/routes';
import userDashboardRoutes from './routes/user-dashboard/routes';

const PORT = process.env.PORT || 8000;

const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(authMiddleware);

app.use('/api/auth', authRoutes);
app.use('/api/homepage', homeRoutes);
app.use('/api/user', userRoutes);
app.use('/api/user-dashboard', userDashboardRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app, prisma };
