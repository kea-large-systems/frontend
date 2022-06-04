import { useState } from "react";
import { ClassApi } from "./ClassApi";
import { useMutation, useQuery } from "react-query";
import { Lecture } from "./useLecture";

interface UseAttendClassMutation {
  code: string;
}
export const attendanceQueryKey = {
  classes: "classes",
};
const UseClient = () => {
  const [classApi] = useState(() => new ClassApi());
  return classApi;
};

export const useGetClassAttendanceCode = (lecture: Lecture) => {
  const client = UseClient();
  console.log("lecture ", lecture);
  return useQuery(
    [attendanceQueryKey.classes, lecture.subjectId],
    () => client.getClassAttendanceCode(lecture.lectureId),
    {
      refetchInterval: 5000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
};

interface DeleteClassAttendanceCode {
  id: number;
}

export const useDeleteClassAttendanceCode = () => {
  const client = UseClient();
  return useMutation("classes", ({ id }: DeleteClassAttendanceCode) =>
    client.deleteClassAttendanceCode(id)
  );
};

export const useAttendClass = () => {
  const client = UseClient();
  return useMutation("classes", ({ code }: UseAttendClassMutation) =>
    client.getAttendClass(code)
  );
};
