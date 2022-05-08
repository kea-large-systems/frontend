import { rest } from "msw";

// Handle a GET for class codes
export const getClassCode = rest.get("/class-codes/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({code: Math.random().toString()})
    );
  });
  
  export const deleteClassCode = rest.delete("/class-codes/:id", (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  });

  export const getAttendCode = rest.get("/class-codes/attend/:code", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({code: Math.random().toString()})
    )
  });