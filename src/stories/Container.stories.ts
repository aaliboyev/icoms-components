import type { Meta, StoryObj } from '@storybook/react';

import Container from "../components/container";

const meta = {
    title: 'Example/Container',
    component: Container,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        style: {
            control: {
                type: 'object',
            },
        },
    },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story ={
    args: {
        style: {
            backgroundColor : "red",
            width : "200px",
            height : "200px",
            color: "white",
        },
        children: "Is this a paragraph now"
    },
}
