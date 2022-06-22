import { render, screen, fireEvent } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = () => {
  return (
    <BrowserRouter>
      <TodoFooter />
    </BrowserRouter>
  );
};

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("TodoFooter", () => {
  it("should render the plus icon", () => {
    const { container } = render(<TodoFooter />);

    expect(container.getElementsByClassName("plus").length).toBe(1);
  });
  it("should redirect to the Add Form Page when it is clicked", () => {
    const { container } = render(<TodoFooter />);

    const element = screen.getByTestId("plus");

    fireEvent.click(element);

    expect(mockedNavigate).toBeCalledWith("/create");
  });
});
