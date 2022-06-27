import { fireEvent, render, screen } from "@testing-library/react";
import AddForm from "../AddForm";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("AddForm", () => {
  it("should able to change the todo description", () => {
    render(<AddForm></AddForm>);
    const inputElement = screen.getByPlaceholderText(/Enter Todo Task/i);
    const priorityCheckboxElement = screen.getByTestId("priority");
    const completedCheckboxElement = screen.getByTestId("completed");
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "playing" } });
    fireEvent.click(priorityCheckboxElement);
    fireEvent.click(buttonElement);

    expect(mockNavigate).toBeCalledWith("/");
  });
});
