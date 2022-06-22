import { render, screen } from "@testing-library/react";
import Header from "../Header.jsx";

describe("Header", () => {
  it("should render the same text passed into the props", () => {
    render(<Header title={"To-Do"} />);

    const TitleElement = screen.getByText(/to-do/i);

    expect(TitleElement).toBeInTheDocument();
  });
});
