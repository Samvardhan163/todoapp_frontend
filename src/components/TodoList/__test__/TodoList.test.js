import { screen, render } from "@testing-library/react";
import TodoList from "../TodoList";
import { BrowserRouter } from "react-router-dom";

const MockTodoList = () => {
  return (
    <BrowserRouter>
      <TodoList></TodoList>
    </BrowserRouter>
  );
};
describe("TodoList", () => {
  it("should render the todo card with todo task playing ", async () => {
    render(<MockTodoList />);

    const cardElement = await screen.findByText("playingfvdsvfb ");

    expect(cardElement).toBeVisible();
  });

  it("should render the priority star in the todo card", async () => {
    render(<MockTodoList></MockTodoList>);

    const starElement = await screen.findByTestId("todo-card-10");

    expect(starElement).toBeInTheDocument;
  });
});
