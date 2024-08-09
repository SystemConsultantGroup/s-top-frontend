import { render, screen } from "@testing-library/react";
import { AdminSignupPreview } from "./AdminSignupPreview";
import "@testing-library/jest-dom";

describe("AdminSignupPreview component", () => {
  it("renders correctly with given props", () => {
    const signups = [
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
    ];

    render(<AdminSignupPreview signups={signups} />);

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("신청자")).toBeInTheDocument();
    expect(screen.getByText("신청일")).toBeInTheDocument();
    expect(screen.getByText("분류")).toBeInTheDocument();
    expect(screen.getByText("비고")).toBeInTheDocument();

    signups.forEach((signup) => {
      expect(screen.getByText(signup.id)).toBeInTheDocument();
      expect(screen.getByText(signup.applicant)).toBeInTheDocument();
      expect(screen.getByText(signup.date)).toBeInTheDocument();
      expect(screen.getByText(signup.category)).toBeInTheDocument();
      if (signup.remark) {
        expect(screen.getByText(signup.remark)).toBeInTheDocument();
      }
    });
  });
});
