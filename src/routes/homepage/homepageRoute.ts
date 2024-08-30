import { Router } from 'express';

import {
    createCommentController,
    deleteCommentController,
    getAllHomePageDataController,
    updatePostLikeController,
} from '../../controllers/homepage/controller';
import authMiddleware from '../../middlewares/authMiddleware';

const router = Router();

// GET /api/home/
router.get('/:offset', getAllHomePageDataController);

// POST /api/home/
router.post('/update_post_like', authMiddleware, updatePostLikeController);
router.post('/create_comment', authMiddleware, createCommentController);
router.post('/delete_comment', authMiddleware, deleteCommentController);

export default router;
