import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

// const addTask = (tasks) => {
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     const buttonElement = screen.getByRole("button", { name: /Add/i} );
//     tasks.forEach((task) => {
//         fireEvent.change(inputElement, { target: { value: task } });
//         fireEvent.click(buttonElement);
//     })
// }

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("TodoList", () => {
  it("should render the color change of the priority button", () => {
    render(<TodoList></TodoList>);

    const fakeTodo = {
      id: "100",
      description: "sleeping",
      priority: false,
      completed: false,
    };

    const star = screen.getByTestId("todo-priority-8");

    expect(star).toBe;
  });
});
