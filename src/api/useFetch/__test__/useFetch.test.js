import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../useFetch";

describe("useFetch", () => {
  it("should exist", () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current).toBeDefined();
  });
  it("should return the data from the server", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("http://localhost:8080/api/todo")
    );
    await waitForNextUpdate();
    expect(result.current.data).toMatchSnapshot();
  });
});
