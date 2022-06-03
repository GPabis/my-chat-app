import { Meta, ComponentStory } from '@storybook/react';
import { Header } from '../../components/Header';

export default {
    title: 'Header',
    component: Header,
} as Meta;

export const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
