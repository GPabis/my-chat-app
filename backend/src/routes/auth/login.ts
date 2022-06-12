import express, { Request, Response } from 'express';
import { getUser } from '../../db/userDB';
import bcrypt from 'bcryptjs';
import { LoginBody } from '../../types';
import { returnUser } from '../../middleware/auth';
import { sendErrorResponse } from '../../middleware/error-handler';
import UsersStatus from '../../middleware/usersStatus';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password }: LoginBody = req.body;

        const user = await getUser(username);

        if (user && (await bcrypt.compare(password, user.user_password))) {
            UsersStatus.updateStatus(user.user_id);
            returnUser(res, user);
        } else sendErrorResponse(res, 'Invalid Credentials', 401);
    } catch (err) {
        sendErrorResponse(res, 'Internal Server Error', 500);
        throw err;
    }
});

export default router;
