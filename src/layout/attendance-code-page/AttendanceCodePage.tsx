import { Button, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GetClassAttendanceCode } from "../../api/useClass";

export function AttendanceCodePage() {
  const pathParams = useParams();
  console.log(pathParams);
  
  const { data: code } = GetClassAttendanceCode("1");
  return (
    <VStack height="70vh" justifyContent="center">
      <h2>{ pathParams.subject }</h2>
      <p>Code: </p>
      <h2>{ code }</h2>
      <Button variant="secondary">
        Check Attendance
      </Button>
    </VStack>
  );
}
