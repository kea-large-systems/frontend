import { useState } from "react";
import { ClassApi } from "./ClassApi";
import { useQuery } from "react-query";

const UseClient = () => {
  const [classApi] = useState(() => new ClassApi(""));
  return classApi;
};

export const GetClassAttendanceCode = (id: string) => {
  const client = UseClient();
  return useQuery("classes", () => client.getClassAttendanceCode(id));
};