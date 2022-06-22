import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("TodoList", () => {
  it("should render the color change of the priority button", () => {
    const fakeTodo = {
      data: [
        {
          id: "100",
          description: "sleeping",
          priority: false,
          completed: false,
        },
      ],
    };
    render(<TodoList todos={fakeTodo}></TodoList>);

    const cardElement = screen.getByTestId("todo-card-100");

    expect(cardElement).toBeInTheDocument();
  });
});
