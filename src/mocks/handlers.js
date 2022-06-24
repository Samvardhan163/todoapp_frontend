import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/api/todo", (req, res, ctx) => {
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
  }),
  rest.post("http://localhost:8080/api/todo", (req, res, ctx) => {
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
  }),
];
