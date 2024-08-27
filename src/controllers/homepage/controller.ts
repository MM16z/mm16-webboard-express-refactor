import { Response } from 'express';

import { AuthenticatedRequest } from '../../middlewares/authMiddleware';
import { homePageService } from '../../services/homepage/service';

export const getAllHomePageDataController = async (req: AuthenticatedRequest, res: Response) => {
    const offset = req.params.offset ? Number(req.params.offset) : 0;
    const currentUserId = req.query.currentUserId ? Number(req.query.currentUserId) : null;
    try {
        const homePageData = await homePageService.getAllHomePageData(currentUserId, offset);
        res.status(200).json(homePageData);
    } catch (error) {
        res.status(500).json({ message: error instanceof Error ? error.message : String(error) });
    }
};

export const updatePostLikeController = async (req: AuthenticatedRequest, res: Response) => {
    const postId = Number(req.body.postId);
    const userId = Number(req.decoded?.id);
    const actionType = req.body.actionType;
    try {
        const updatedPost = await homePageService.updatePostLike(postId, userId, actionType);
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const createCommentController = async (req: AuthenticatedRequest, res: Response) => {
    const postId = Number(req.body.postId);
    const userId = Number(req.decoded?.id);
    const commentContent = req.body.commentContent;
    try {
        const createdComment = await homePageService.createComment(postId, userId, commentContent);
        res.status(200).json(createdComment);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const deleteCommentController = async (req: AuthenticatedRequest, res: Response) => {
    const commentId = Number(req.body.commentId);
    try {
        const deletedComment = await homePageService.deleteComment(commentId);
        res.status(200).json(deletedComment);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
