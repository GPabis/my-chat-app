import { NextFunction, Request, Response } from 'express';
import { UserResponse, UsersDBResponse } from '../types';
import jwt from 'jsonwebtoken';
import { sendErrorResponse } from './error-handler';
import { getUser } from '../db/userDB';
import moment from 'moment';

export const getEnvTokenKey = () => {
    const tokenKey = process.env.TOKEN_KEY;
    if (!tokenKey) throw 'Server Problem - plesase try again later';
    return tokenKey;
};

export const returnUser = (res: Response, user: UsersDBResponse) => {
    const token = jwt.sign({ user_id: user.user_id, username: user.username }, getEnvTokenKey(), {
        expiresIn: '2h',
    });

    const resData: UserResponse = {
        userId: user.user_id,
        userName: user.username,
        userAvatar: user.user_avatar,
        token: token,
        expires: moment().add(2, 'hours').toLocaleString(),
    };
    res.status(200).json(resData);
};

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.query.token || req.headers['x-access-token'] || req.body.token;
    if (!token) return sendErrorResponse(res, 'A token is required for authentication', 401);

    try {
        const tokenKey = getEnvTokenKey();

        const decoded = jwt.verify(token, tokenKey);
        // eslint-disable-next-line
        (<any>req).user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token!');
    }
    return next();
};

export const getUserFromToken = async (req: Request) => {
    const token = req.query.token || req.headers['x-access-token'] || req.body.token;
    if (!token) throw 'A token is required for authentication';
    const tokenKey = getEnvTokenKey();

    if (!tokenKey) throw 'Server Problem - plesase try again later';

    const decoded = await jwt.verify(token, tokenKey);

    if (typeof decoded === 'string') throw 'Somethings goes wrong - please login again';

    const user = await getUser(decoded.username);

    if (!user) throw 'Somethings goes wrong. Please login again.';

    return user;
};
