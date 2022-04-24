import { Button, VStack } from "@chakra-ui/react";
import {
  AttendToClass,
  AttendClassFormValues,
} from "../../components/attend-to-class/AttendToClass";

export function StudentHomepage() {
  const onSubmit = (_data: AttendClassFormValues) => {};
  return (
    <VStack>
      <AttendToClass onSubmit={onSubmit} />
      <Button variant="attend" bgColor="#5D5FEF">
        Check Attendance
      </Button>
    </VStack>
  );
}
