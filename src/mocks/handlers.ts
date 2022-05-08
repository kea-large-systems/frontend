import { getClassCode, deleteClassCode } from "./classHandlers";
import { getSubjects } from "./subjectsHandlers";

export const handlers = [getSubjects, getClassCode, deleteClassCode];
