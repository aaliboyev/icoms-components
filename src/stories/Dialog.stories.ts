import type { Meta, StoryObj } from '@storybook/react';
import * as Carousel from "../components/carousel";
import {DialogDemo} from "../components/dialog";

const meta = {
    title: 'Example/Dialog',
    component: DialogDemo,
    parameters: {
        layout: 'centered',
    },
    argTypes: {

    },
} satisfies Meta<typeof Carousel.Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story ={
    args: {
        styles: {
            root: {
                backgroundColor : "red",
                width : "200px",
                height : "200px",
                color: "white",
            }
        },
        children: "Is this a paragraph now"

    },
}
