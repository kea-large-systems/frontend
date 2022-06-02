import { Button, VStack } from "@chakra-ui/react";
import { AttendToClass } from "../../components/attend-to-class/AttendToClass";

export function StudentHomepage() {
  return (
    <VStack>
      <AttendToClass />
      <Button variant="attend" bgColor="#5D5FEF">
        Check Attendance
      </Button>
    </VStack>
  );
}
