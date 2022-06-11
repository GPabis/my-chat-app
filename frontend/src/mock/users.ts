import { UsersResponse } from '../types';
import stc from 'string-to-color';
import invert from 'invert-color';

export const usersMock: UsersResponse[] = [
    {
        userId: 1,
        userName: 'JanTenPan',
        userAvatar: `https://ui-avatars.com/api/?name=JanTenPan&background=${stc('JanTenPan').replace(
            '#',
            '',
        )}&color=${invert(stc('JanTenPan')).replace('#', '')}`,
        userStatus: 'online',
    },
    {
        userId: 2,
        userName: 'Franc',
        userAvatar: `https://ui-avatars.com/api/?name=Franc&background=${stc('Franc').replace('#', '')}&color=${invert(
            stc('Franc'),
        ).replace('#', '')}`,
        userStatus: 'offline',
    },
    {
        userId: 3,
        userName: 'Tom',
        userAvatar: `https://ui-avatars.com/api/?name=Tom&background=${stc('Tom').replace('#', '')}&color=${invert(
            stc('Tom'),
        ).replace('#', '')}`,
        userStatus: 'offline',
    },
    {
        userId: 4,
        userName: 'Andrew24',
        userAvatar: `https://ui-avatars.com/api/?name=Andrew24&background=${stc('Andrew24').replace(
            '#',
            '',
        )}&color=${invert(stc('Andrew24')).replace('#', '')}`,
        userStatus: 'online',
    },
];
