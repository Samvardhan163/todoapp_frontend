import { screen, render } from "@testing-library/react";
import TodoList from "../TodoList";
import { BrowserRouter } from "react-router-dom";

import { rest } from "msw";
import { setupServer } from "msw/node";

const todoResponse = rest.get(
  "http://localhost:8080/api/todo/",
  (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          description: "playing",
          completed: "true",
          priority: "true",
        },
      ])
    );
  }
);

const todoErrorResponse = rest.get(
  "http://localhost:8080/api/todo/",
  (req, res, ctx) => {
    return res(ctx.status(500));
  }
);

const handlers = [todoResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

    const cardElement = await screen.findByText("playing");

    expect(cardElement).toBeVisible();
  });
});
