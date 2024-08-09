import type { Meta, StoryObj } from "@storybook/react";
import { AdminSidebar } from "./AdminSidebar";

const meta = {
  title: "Admin Sidebar",
  component: AdminSidebar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AdminSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Usage: Story = {};
