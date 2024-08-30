import { Router } from 'express';

import {
    loginController,
    logoutController,
    registerController,
} from '../../controllers/authentications/controller';

const router = Router();

// GET /api/authentications/
router.get('/');

// POST /api/authentications/
router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', logoutController);

export default router;
