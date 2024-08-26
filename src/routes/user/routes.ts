import { Router } from 'express';
import { getUsers } from '../../controllers/user/controller';

const router = Router();

// GET /api/user/
router.get('/', getUsers);

// POST /api/user/

export default router;
