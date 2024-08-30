import express from 'express';

import authMiddleware from '../middlewares/authMiddleware';
import authRoutes from './authentications/authenticationsRoute';
import homeRoutes from './homepage/homepageRoute';
import userRoutes from './user/userRoute';
import userDashboardRoutes from './user-dashboard/userDashboardRoute';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/homepage', homeRoutes);
router.use('/user', authMiddleware, userRoutes);
router.use('/user-dashboard', authMiddleware, userDashboardRoutes);

export default router;
