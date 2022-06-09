import { MessageResponse } from '../types';
import stc from 'string-to-color';
import invert from 'invert-color';

export const messagesMock: MessageResponse[] = [
    {
        userId: '1',
        userName: 'JanTenPan',
        dateText: '10/12/2022',
        dateNumber: new Date().getTime(),
        img: `https://ui-avatars.com/api/?name=JanTenPan&background=${stc('JanTenPan').replace('#', '')}&color=${invert(
            stc('JanTenPan'),
        ).replace('#', '')}`,
        message: 'Hello',
    },
    {
        userId: '1',
        userName: 'JanTenPan',
        dateText: '10/12/2022',
        dateNumber: new Date().getTime(),
        img: `https://ui-avatars.com/api/?name=JanTenPan&background=${stc('JanTenPan').replace('#', '')}&color=${invert(
            stc('JanTenPan'),
        ).replace('#', '')}`,
        message: 'Whats Up?',
    },
    {
        userId: '2',
        userName: 'Franc',
        dateText: '10/12/2022',
        dateNumber: new Date().getTime(),
        img: `https://ui-avatars.com/api/?name=Franc&background=${stc('Franc').replace('#', '')}&color=${invert(
            stc('Franc'),
        ).replace('#', '')}`,
        message: 'Not much. You?',
    },
];
