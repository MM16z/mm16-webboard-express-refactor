import { PrismaClient } from '@prisma/client';
import { User } from '../../models/user/model';

const prisma = new PrismaClient();

class UserService {
    static async getUsers(): Promise<User[]> {
        const users = await prisma.user.findMany();
        return users;
    }
}

export default UserService;
