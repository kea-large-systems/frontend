import { useState } from "react";
import { useQuery } from "react-query";
import { LectureApi } from "./LectureApi";

const useClient = () => {
    const [subjectApi] = useState(() => new LectureApi(""));
    return subjectApi;
  };

export const useLecture = (id: number) => {
    const client = useClient();
    return useQuery("lectures", () => client.createLecturesBySubject(id));
}