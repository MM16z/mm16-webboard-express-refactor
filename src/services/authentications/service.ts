import { PrismaClient } from '@prisma/client';
import { createUser } from '../../models/authentications/model';

const prisma = new PrismaClient();

class authenticationService {
    static async createUser(userData: createUser) {
        const user = await prisma.user.create({
            data: userData,
        });
        return user;
    }
}

export default authenticationService;
