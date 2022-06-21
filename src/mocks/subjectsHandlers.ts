/* istanbul ignore file */

import { rest } from "msw";
import { BASE_URL } from "./mockConfig";

// Handles a GET /subjects request
export const getSubjects = rest.get(
  `${BASE_URL}/subjects/by-teacher/:teacherId`,
  (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json([
        { classId: "SW22", name: "Testing", studentsCount: 10, subjectId: 1 },
        {
          classId: "DS22",
          name: "Databases for developers",
          studentsCount: 20,
          subjectId: 2,
        },
        {
          classId: "KYS",
          name: "Design class",
          studentsCount: 31,
          subjectId: 3,
        },
        {
          classId: "AB20",
          name: "Web Development",
          studentsCount: 24,
          subjectId: 4,
        },
        { classId: "DI21", name: "Security", studentsCount: 76, subjectId: 5 },
        {
          classId: "DI21i",
          name: "Testing nr 1",
          studentsCount: 41,
          subjectId: 6,
        },
        { classId: "WW3", name: "eCommerce", studentsCount: 18, subjectId: 7 },
      ])
    );
  }
);
