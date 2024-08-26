import express from 'express';
import { PrismaClient } from '@prisma/client';
import authMiddleware from './middlewares/authMiddleware';
import userRoutes from './routes/user/routes';

const PORT = process.env.PORT || 8000;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(authMiddleware);

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app, prisma };
