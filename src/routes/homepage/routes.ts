import { Router } from 'express';

import {
    createCommentController,
    deleteCommentController,
    getAllHomePageDataController,
    updatePostLikeController,
} from '../../controllers/homepage/controller';

const router = Router();

// GET /api/home/
router.get('/:offset', getAllHomePageDataController);

// POST /api/home/
router.post('/update_post_like', updatePostLikeController);
router.post('/create_comment', createCommentController);
router.post('/delete_comment', deleteCommentController);

export default router;
