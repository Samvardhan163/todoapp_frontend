import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Form";

describe("Form", () => {
  it("should able to type into the input", () => {
    render(<Form></Form>);

    const inputElement = screen.getByPlaceholderText(/Enter Todo Task/i);

    fireEvent.change(inputElement, { target: { value: "playing" } });

    expect(inputElement).toHaveValue("playing");
  });
});
