import type { Meta, StoryObj } from '@storybook/react';
import Gallery from '../components/gallery';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Gallery',
    component: Gallery,
    parameters: {
        layout: 'centered',
    },
    argTypes: {

    },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        items: [
            {
                src: "https://picsum.photos/seed/1/1000/1000",
                width: 1000,
                height: 1000,
            },
            // 9 more lorem picsum images with different width and height dimensions
            {
                src: "https://picsum.photos/seed/2/800/1200",
                width: 800,
                height: 1200,
            },
            {
                src: "https://picsum.photos/seed/3/1200/800",
                width: 1200,
                height: 800,
            },
            {
                src: "https://picsum.photos/seed/4/800/800",
                width: 800,
                height: 800,
            },
            {
                src: "https://picsum.photos/seed/5/800/800",
                width: 800,
                height: 800,
            },
            {
                src: "https://picsum.photos/seed/6/800/800",
                width: 800,
                height: 800,
            },
            {
                src: "https://picsum.photos/seed/7/800/800",
                width: 800,
                height: 800,
            },
            {
                src: "https://picsum.photos/seed/8/800/800",
                width: 800,
                height: 800,
            },
            {
                src: "https://picsum.photos/seed/9/800/800",
                width: 800,
                height: 800,
            },
        ]
    },
};
