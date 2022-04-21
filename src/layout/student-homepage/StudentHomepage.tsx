import { Button, VStack } from "@chakra-ui/react";
import {
  AttendToClass,
  AttendClassFormValues,
} from "../../components/attend-to-class/AttendToClass";

export function StudentHomepage() {
  const onSubmit = (data: AttendClassFormValues) => {
    console.log("data", data);
    console.log("submitted");
  };
  return (
    <VStack>
      <AttendToClass onSubmit={onSubmit} />
      <Button variant="attend" bgColor="#5D5FEF">
        Check Attendance
      </Button>
    </VStack>
  );
}
