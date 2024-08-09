import { render, screen } from "@testing-library/react";
import { JobFairCard } from "./JobFairCard";
import "@testing-library/jest-dom";

describe("JobFairCard component", () => {
  it("renders correctly with given props", () => {
    render(
      <JobFairCard
        logo="/images/lululabLogo.png"
        company="룰루랩"
        position="Web SDK 개발자, AI 개발자"
        employmentType={["인턴", "신입 정규직"]}
        location="서울 강남구"
      />
    );
    expect(screen.getByText("룰루랩")).toBeInTheDocument();
    expect(screen.getByText("Web SDK 개발자, AI 개발자")).toBeInTheDocument();
    expect(screen.getByText("인턴")).toBeInTheDocument();
    expect(screen.getByText("신입 정규직")).toBeInTheDocument();
    expect(screen.getByText("근무 지역: 서울 강남구")).toBeInTheDocument();
  });
});
