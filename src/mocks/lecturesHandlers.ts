/* istanbul ignore file */

import { rest } from "msw";
import { BASE_URL } from "./mockConfig";

export const createLectureBySubject = rest.post(
  `${BASE_URL}/lectures`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        lectureId: 1,
        subjectId: req.body,
        name: "lecture_1",
      })
    );
  }
);
