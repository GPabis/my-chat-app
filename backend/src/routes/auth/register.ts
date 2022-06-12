import express, { Request, Response } from 'express';
import invert from 'invert-color';
import stc from 'string-to-color';
import { registerUser } from '../../db/userDB';
import { returnUser } from '../../middleware/auth';
import { sendErrorResponse } from '../../middleware/error-handler';
import UsersStatus from '../../middleware/usersStatus';

const router = express.Router();

interface RegisterBody {
    username: string;
    password: string;
}

router.post('/register', async (req: Request, res: Response) => {
    try {
        const { username, password }: RegisterBody = req.body;

        const avatar = `https://ui-avatars.com/api/?name=${username}&background=${stc(username).replace(
            '#',
            '',
        )}&color=${invert(stc(username)).replace('#', '')}`;

        const user = await registerUser(username, password, avatar);

        if (user && 'user_id' in user) {
            UsersStatus.updateStatus(user.user_id);
            returnUser(res, user);
        } else sendErrorResponse(res, user.msg, 401);
    } catch (err) {
        sendErrorResponse(res, 'Internal Server Error', 500);
        throw err;
    }
});

export default router;
