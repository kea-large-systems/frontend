/* istanbul ignore file */

import {
  getClassCode,
  deleteClassCode,
  getAttendCode,
} from "./classesHandlers";
import { createLectureBySubject } from "./lecturesHandlers";
import { getSubjects } from "./subjectsHandlers";

export const handlers = [
  getSubjects,
  getClassCode,
  deleteClassCode,
  createLectureBySubject,
  getAttendCode,
];
