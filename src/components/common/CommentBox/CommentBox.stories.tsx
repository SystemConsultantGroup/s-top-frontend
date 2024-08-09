import type { Meta, StoryObj } from "@storybook/react";
import { CommentBox } from "./CommentBox";

const meta: Meta<typeof CommentBox> = {
  title: "CommentBox",
  component: CommentBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
};
