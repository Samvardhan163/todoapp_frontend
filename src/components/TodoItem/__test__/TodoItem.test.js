import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../TodoItem";
import userEvent from "@testing-library/user-event";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

const todo = {
  id: 1,
  description: "sleeping",
  completed: "true",
  priority: "true",
};

test("should delete todo item", async () => {
  const refetchMockFunc = jest.fn();
  render(<TodoItem refetch={refetchMockFunc} todo={todo} />);
  const deleteElement = await screen.findByTestId("todo-delete-1");

  await userEvent.click(deleteElement);

  expect(refetchMockFunc).toBeCalled();
});

it("should render the todo card with todo item playing ", async () => {
  render(<TodoItem todo={todo} />);

  const cardElement = await screen.findByText("sleeping");

  expect(cardElement).toBeInTheDocument();
});
test("should able to update todo task completion status", async () => {
  const updateTodoTaskMockFunc = jest.fn();

  render(<TodoItem updateTodoTask={updateTodoTaskMockFunc} todo={todo} />);

  const descriptionElement = await screen.findByTestId("todo-description-1");

  await userEvent.click(descriptionElement);

  expect(updateTodoTaskMockFunc).toBeCalled();
});
test("should able to update todo task priority status", async () => {
  const updateTodoMockFunc = jest.fn();

  render(<TodoItem updateTodo={updateTodoMockFunc} todo={todo} />);

  const priorityElement = await screen.findByTestId("todo-priority-1");

  await userEvent.click(priorityElement);

  expect(updateTodoMockFunc).toBeCalled();
});
