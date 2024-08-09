import { render, screen, fireEvent } from "@testing-library/react";
import { CommentBox } from "./CommentBox";
import "@testing-library/jest-dom";

describe("CommentBox component", () => {
  it("renders correctly", () => {
    render(<CommentBox onSubmit={() => {}} />);
    expect(screen.getByPlaceholderText("정책 위반 댓글은 삭제될 수 있습니다.")).toBeInTheDocument();
  });

  it("calls onSubmit with the correct value", () => {
    const handleSubmit = jest.fn();
    render(<CommentBox onSubmit={handleSubmit} />);
    const textarea = screen.getByPlaceholderText("정책 위반 댓글은 삭제될 수 있습니다.");
    fireEvent.change(textarea, { target: { value: "Test comment" } });
    fireEvent.submit(textarea);
    expect(handleSubmit).toHaveBeenCalledWith("Test comment");
  });

  it("displays submitted comment", () => {
    render(<CommentBox />);
    const textarea = screen.getByPlaceholderText("정책 위반 댓글은 삭제될 수 있습니다.");
    fireEvent.change(textarea, { target: { value: "Test comment" } });
    fireEvent.submit(textarea);
    expect(screen.getByText("Test comment")).toBeInTheDocument();
  });
});
