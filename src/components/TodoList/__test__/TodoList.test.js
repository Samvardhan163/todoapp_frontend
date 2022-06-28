import {
  screen,
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import TodoList from "../TodoList";
import { BrowserRouter } from "react-router-dom";
import { server } from "../../../mocks/server";
import useFetch from "../../../api/useFetch/useFetch";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

const { Mockdata, Mocktask, Mockrefetch } = jest.mock(
  "../../../api/useFetch/useFetch"
);

describe("TodoList", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it("should render the todo card with todo task playing ", async () => {
    render(<TodoList />);

    const cardElement = await screen.findByText("playing");

    expect(cardElement).toBeVisible();
  });

  it("should render the  todo card with todo task with edit button and navigate to the form Page ", async () => {
    render(<TodoList></TodoList>);
    const editElement = await screen.findByTestId("todo-edit-1");

    fireEvent.click(editElement);

    expect(mockedNavigate).toBeCalledWith("/create/1");
  });

  it("should render the todo card with todo task with star and change color", async () => {
    render(<TodoList></TodoList>);

    const priorityElement = await screen.findByTestId("todo-priority-1");

    fireEvent.click(priorityElement);

    expect(priorityElement).toHaveClass("todo-priority false");
  });
});
