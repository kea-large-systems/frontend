import { Button, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ClassApi } from "../../api/ClassApi";
import { DeleteClassAttendanceCode } from "../../api/useClass";
import { Subject } from "../../components/subject-table/SubjectTable";

export function AttendanceCodePage() {
  const location = useLocation();
  const subject = location.state as Subject; 
  const [code, setCode] = useState();
  const codeApi = new ClassApi("");

  useEffect(() => {
    updateCode();
    const interval = setInterval(() => {
      updateCode();
    }, 4000);
    return () => {
      clearInterval(interval);
    }
  });

  const updateCode = () => {
    codeApi.getClassAttendanceCode(subject.id).then((result) => {
      setCode(result.data.code);
    });
  }

  const handleClick = () => {
    DeleteClassAttendanceCode(subject.id);
  };

  return (
    <VStack height="75vh" justifyContent="center">
      <h2>{ subject.name }</h2>
      <p>Code: </p>
      <h2>{ code }</h2>
      <Button variant="secondary" onClick={handleClick}>
        Stop Attendance
      </Button>
    </VStack>
  );
}
