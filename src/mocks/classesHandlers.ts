/* istanbul ignore file */

import { rest } from "msw";
import { BASE_URL } from "./mockConfig";

// Handle a GET for class codes
export const getClassCode = rest.get(
  `${BASE_URL}/class-codes/:id`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ code: Math.random().toString() }));
  }
);

export const deleteClassCode = rest.delete(
  `${BASE_URL}/class-codes/:id`,
  (req, res, ctx) => {
    return res(ctx.status(200));
  }
);

export const getAttendCode = rest.get(
  `${BASE_URL}/class-codes/attend/:code`,
  (req, res, ctx) => {
    return res(ctx.status(200));
  }
);
