/* istanbul ignore file */

import { rest, RestRequest } from "msw";
import { BASE_URL } from "./mockConfig";
import { Subject } from "../components/subject-table/SubjectTable";

export const createLectureBySubject = rest.post(
  `${BASE_URL}/lectures`,
  (req: RestRequest<Subject>, res, ctx) => {
    if (req?.body?.subjectId === 1)
      return res(
        ctx.status(200),
        ctx.json({
          lectureId: 1,
          subjectId: req.body,
          name: "lecture_1",
        })
      );
    else return res(ctx.status(400));
  }
);
