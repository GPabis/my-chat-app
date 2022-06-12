import { Status } from '../types';
import moment from 'moment';

class UsersStatus {
    private static _instance: UsersStatus;
    status: Status[];

    constructor() {
        this.status = [];
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    public updateStatus(userId: number) {
        this.status = this.status.map((user) =>
            user.userId === userId ? { userId: user.userId, statusExpiredAt: moment().add(5, 'minutes').unix() } : user,
        );
    }

    public getStatusByUserId(userId: number) {
        return this.status.find((user) => user.userId === userId) ? 'online' : 'offline';
    }

    public checkUsersStatus() {
        setInterval(() => {
            this.status = this.status.filter((user) => user.statusExpiredAt > moment().unix());
        }, 60000);
    }
}

export default UsersStatus.Instance;
