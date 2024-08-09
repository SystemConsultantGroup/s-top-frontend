import { render, screen, fireEvent } from "@testing-library/react";
import { RadioButton } from "./RadioButton";
import "@testing-library/jest-dom";

describe("RadioButton component", () => {
  it("renders correctly and toggles state on click", () => {
    const options = [
      { value: "react", label: "React" },
      { value: "svelte", label: "Svelte" },
      { value: "ng", label: "Angular" },
      { value: "vue", label: "Vue" },
    ];

    render(<RadioButton options={options} name="framework" label="Choose a framework" />);

    const radioButton = screen.getByLabelText("React");
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).not.toBeChecked();

    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();

    // Clicking again should not uncheck a radio button (standard behavior)
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });
});
