import { Button, VStack } from "@chakra-ui/react";
import { GetClassAttendanceCode } from "../../api/useClass";

interface AttendanceCodePageProps {
  subjectName: string;
}

export function AttendanceCodePage({
  subjectName
}: AttendanceCodePageProps) {
const { data: code } = GetClassAttendanceCode("1");
  //const onSubmit = () => {};
  return (
    <VStack height="70vh" justifyContent="center">
      <h2>{ subjectName }</h2>
      <p>Code: </p>
      <h2>{ code }</h2>
      <Button variant="secondary">
        Check Attendance
      </Button>
    </VStack>
  );
}
