import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

describe("TodoFooter", () => {
  it("should render the same text passed into the props", () => {
    const { container } = render(<TodoFooter />);

    expect(container.getElementsByClassName("plus").length).toBe(1);
  });
});
