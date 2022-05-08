import { Button, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ClassApi } from "../../api/ClassApi";
import { DeleteClassAttendanceCode, GetClassAttendanceCode } from "../../api/useClass";
import { useLecture } from "../../api/useLecture";
import { Subject } from "../../components/subject-table/SubjectTable";

export function AttendanceCodePage() {
  const location = useLocation();
  const subject = location.state as Subject; 
  // const [code, setCode] = useState();
  const codeApi = new ClassApi("");
  const { data: lecture, isLoading } = useLecture(subject.id);
  const { data: code } = GetClassAttendanceCode(lecture?.data.lectureId);
  
  // useEffect(() => {
  //   if (!isLoading) {
  //     updateCode();
  //     const interval = setInterval(() => {
  //       updateCode();
  //     }, 4000);
  //     return () => {
  //       clearInterval(interval);
  //     }
  //   }
  // }, [isLoading]);

  // const updateCode = () => {
  //   codeApi.getClassAttendanceCode(lecture?.data.id).then((result) => {
  //     setCode(result.data.code);
  //   });
  // }

  const handleClick = () => {
    DeleteClassAttendanceCode(lecture?.data.id);
  };

  return (
    <VStack height="75vh" justifyContent="center">
      <h2>{ subject.name }</h2>
      <p>Code: </p>
      <h2>{ code?.data.code }</h2>
      <Button variant="secondary" onClick={handleClick}>
        Stop Attendance
      </Button>
    </VStack>
  );
}
