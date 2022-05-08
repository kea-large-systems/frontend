import { getClassCode, deleteClassCode } from "./classesHandlers";
import { createLectureBySubject } from "./lecturesHandlers";
import { getSubjects } from "./subjectsHandlers";

export const handlers = [getSubjects, getClassCode, deleteClassCode, createLectureBySubject];
