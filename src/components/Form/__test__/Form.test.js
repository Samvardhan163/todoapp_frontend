import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Form";
const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Form", () => {
  it("should able to type into the input", () => {
    render(<Form></Form>);

    const inputElement = screen.getByPlaceholderText(/Enter Todo Task/i);

    fireEvent.change(inputElement, { target: { value: "playing" } });

    expect(inputElement).toHaveValue("playing");
  });

  it("should able to check the checkbox", () => {
    render(<Form></Form>);
    const checkboxElement = screen.getByTestId("priority");

    fireEvent.click(checkboxElement);

    expect(checkboxElement).toBeChecked;
  });

  it("should able to check the button in the form", () => {
    render(<Form></Form>);

    const buttonElement = screen.getByRole("button", { name: /Add/i });

    expect(buttonElement).toBeInTheDocument;
  });
});
