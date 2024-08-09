import type { Meta, StoryObj } from "@storybook/react";
import { AdminSignupPreview } from "./AdminSignupPreview";

const meta: Meta<typeof AdminSignupPreview> = {
  title: "AdminSignupPreview",
  component: AdminSignupPreview,
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
  args: {
    signups: [
      { id: 1, applicant: "김교수", date: "2024/07/05", category: "교수", remark: "" },
      {
        id: 2,
        applicant: "나공기업",
        date: "2024/07/05",
        category: "공공기관",
        remark: "인공지능지원사업부",
      },
      { id: 3, applicant: "김교수", date: "2024/07/05", category: "교수", remark: "" },
      {
        id: 4,
        applicant: "나공기업",
        date: "2024/07/05",
        category: "공공기관",
        remark: "인공지능지원사업부",
      },
    ],
  },
};
