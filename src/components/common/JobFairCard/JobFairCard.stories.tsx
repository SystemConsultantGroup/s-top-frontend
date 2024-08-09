import type { Meta, StoryObj } from "@storybook/react";
import { JobFairCard } from "./JobFairCard";

const meta: Meta<typeof JobFairCard> = {
  title: "JobFairCard",
  component: JobFairCard,
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
    logo: "/images/lululabLogo.png",
    company: "룰루랩",
    position: "Web SDK 개발자, AI 개발자",
    employmentType: ["인턴", "신입 정규직"],
    location: "서울 강남구",
  },
};
