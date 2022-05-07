import { useState } from "react";
import { SubjectApi } from "./SubjectApi";
import { useQuery } from "react-query";

const useClient = () => {
  const [subjectApi] = useState(() => new SubjectApi(''))
  return subjectApi;
};

export const useSubject = () => {
  const client = useClient();
  return useQuery('subjects', client.apiGetSubjects);
};