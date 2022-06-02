import { useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { LectureApi } from "./LectureApi";

const useClient = () => {
    const [subjectApi] = useState(() => new LectureApi());
    return subjectApi;
  };

interface Lecture {
  lectureId: number;
  subjectId: string;
  name: string;
}

export const useLecture = (id: number): UseQueryResult<Lecture> => {
  const client = useClient();
  return useQuery("lectures", () =>
    client.createLectureBySubject(id).then((res) => res.data)
  );
};
