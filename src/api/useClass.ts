import { useState } from "react";
import { ClassApi } from "./ClassApi";
import { useMutation, useQuery } from "react-query";

const UseClient = () => {
  const [classApi] = useState(() => new ClassApi(""));
  return classApi;
};

export const useGetClassAttendanceCode = (id: number) => {
  const client = UseClient();
  return useQuery("classes", () => client.getClassAttendanceCode(id), {refetchInterval: 5000});
};

export const useDeleteClassAttendanceCode = (id: number) => {
  const client = UseClient();
  return useMutation("classes", () => client.deleteClassAttendanceCode(id));
};