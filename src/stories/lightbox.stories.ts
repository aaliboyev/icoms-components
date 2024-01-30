import type { Meta, StoryObj } from '@storybook/react';
import {advancedSlides} from '../components/lightbox/slides';
import Lightbox from '../components/lightbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Lightbox',
    component: Lightbox,
    parameters: {
        layout: 'centered',
    },
    argTypes: {

    },
} satisfies Meta<typeof Lightbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        slides: [{
            src: "https://picsum.photos/1080/720",
            width: 1080,
            height: 720,
        }, {
            src: "https://picsum.photos/1080/720",
            width: 1080,
            height: 720,
        }, {
            src: "https://picsum.photos/1080/720",
            width: 1080,
            height: 720,
        }],
    },
};
