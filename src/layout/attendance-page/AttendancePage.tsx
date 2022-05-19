import { VStack, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Subject } from "../../components/subject-table/SubjectTable";
import { AttendanceView } from "./attendanceView/AttendanceView";

export function AttendancePage() {
  const location = useLocation();
  const subject = location.state as Subject;

  return (
    <VStack height="75vh" justifyContent="center">
      <Text fontSize="5xl">{subject.name}</Text>
      <AttendanceView subject={subject} />
    </VStack>
  );
}
