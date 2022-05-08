import { getClassCode, deleteClassCode } from "./classesHandlers";
import { getSubjects } from "./subjectsHandlers";

export const handlers = [getSubjects, getClassCode, deleteClassCode];
