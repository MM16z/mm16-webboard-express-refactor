import { Request, Response } from 'express';
import userService from '../../services/user/service';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getUsers();
        if (users && users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'Users not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
