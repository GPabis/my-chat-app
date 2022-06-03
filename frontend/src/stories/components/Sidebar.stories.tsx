import { ComponentStory, Meta } from '@storybook/react';
import { Sidebar } from '../../components/Sidebar';

export default {
    title: 'Sidebar',
    component: Sidebar,
} as Meta;

export const Template: ComponentStory<typeof Sidebar> = () => {
    return (
        <>
            <Sidebar />
        </>
    );
};
