import { Button, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { GetClassAttendanceCode } from "../../api/useClass";
import { Subject } from "../../components/subject-table/SubjectTable";

export function AttendanceCodePage() {
  const location = useLocation();
  const subject = location.state as Subject; 
  const { data: code } = GetClassAttendanceCode(subject.id);

  return (
    <VStack height="70vh" justifyContent="center">
      <h2>{ subject.name }</h2>
      <p>Code: </p>
      <h2>{ code?.data.code }</h2>
      <Button variant="secondary">
        Check Attendance
      </Button>
    </VStack>
  );
}
