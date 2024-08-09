import type { Meta, StoryObj } from "@storybook/react";
import { AdminNoticePreview } from "./AdminNoticePreview";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "AdminNoticePreview",
  component: AdminNoticePreview,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // More on Action Args : https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof AdminNoticePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Usage: Story = {
  args: {
    title: "공지사항",
    pagingData: [
      {
        data: [
          { pinned: true, title: "S-TOP 리뉴얼 안내", writer: "SCG", registeredDate: new Date() },
          {
            pinned: true,
            title: "S-TOP 리뉴얼 안내 재공지",
            writer: "SCG",
            registeredDate: new Date(),
          },
          {
            pinned: true,
            title: "S-TOP 리뉴얼 안내 22",
            writer: "SCG",
            registeredDate: new Date(),
          },
          {
            pinned: false,
            title: "공지사항 제목입니다. 엄청 긴 제목입니다. 더 긴 제목",
            writer: "행정실",
            registeredDate: new Date(),
          },
          {
            pinned: false,
            title: "공지사항 제목입니다.",
            writer: "소프트웨어융합대학 행정실",
            registeredDate: new Date(),
          },
        ],
      },
      {
        data: [
          {
            pinned: false,
            title: "공지사항 제목입니다.",
            writer: "행정실",
            registeredDate: new Date(),
          },
          {
            pinned: false,
            title: "공지사항 제목입니다. 2",
            writer: "소프트웨어융합대학 행정실",
            registeredDate: new Date(),
          },
        ],
      },
    ],
  },
};
