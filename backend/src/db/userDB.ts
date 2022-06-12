import pool from './pgWrapper';
import { UsersDBResponse } from '../types';
import bcrypt from 'bcryptjs';

const registerUser = async (username: string, password: string, avatar: string) => {
    const shaPass = await bcrypt.hash(password, 10);

    if (await (await getUser(username)).username) {
        return { status: 401, msg: 'User with that username arleady exist' };
    }

    const queryString = `INSERT INTO users (username, user_password, user_avatar) VALUES ('${username}', '${shaPass}', '${avatar}')`;
    await pool.query(queryString);
    return getUser(username);
};

const getUser = async (username: string) => {
    const getUserQuery = `SELECT * FROM users WHERE user_id = '${username}'`;
    const res = await pool.query<UsersDBResponse>(getUserQuery);
    return res.rows[0];
};

export { registerUser, getUser };
