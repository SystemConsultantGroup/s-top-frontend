import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    name: "favoriteFramework",
    label: "라디오 버튼입니당",
    description: "골라보세용",
    withAsterisk: true,
    options: [
      { value: "react", label: "1번" },
      { value: "svelte", label: "2번" },
      { value: "ng", label: "3번" },
      { value: "vue", label: "4번" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
};
