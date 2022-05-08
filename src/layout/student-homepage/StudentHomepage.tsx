import { Button, VStack } from "@chakra-ui/react";
import {
  AttendToClass,
  AttendClassFormValues,
} from "../../components/attend-to-class/AttendToClass";

interface StudentHomepageProps {
  userId: string;
}

export function StudentHomepage({ userId }: StudentHomepageProps) {
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
