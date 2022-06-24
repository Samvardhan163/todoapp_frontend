import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Form";

import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

const MockForm = () => {
  return (
    <BrowserRouter>
      <Form></Form>
    </BrowserRouter>
  );
};
const TodoList = () => {
  return (
    <BrowserRouter>
      <TodoList></TodoList>
    </BrowserRouter>
  );
};

const todoResponse = rest.post(
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

const handlers = [todoResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

  it("should able to post new Todo Task", () => {
    render(<MockForm></MockForm>);

    const todoElement = screen.findByText("playing");

    expect(todoElement).toBeInTheDocument;
  });
});
