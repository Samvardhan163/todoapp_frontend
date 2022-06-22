import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

describe("TodoFooter", () => {
  it("should render the plus icon", () => {
    const { container } = render(<TodoFooter />);

    expect(container.getElementsByClassName("plus").length).toBe(1);
  });
});
