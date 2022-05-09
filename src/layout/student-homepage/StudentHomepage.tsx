import { Button, VStack } from "@chakra-ui/react";
import {
  AttendToClass,
  AttendClassFormValues,
} from "../../components/attend-to-class/AttendToClass";
import { useAttendClass } from "../../api/useClass";

interface StudentHomepageProps {
  onAttend: () => void;
}

export function StudentHomepage({onAttend}: StudentHomepageProps) {
  const { mutate } = useAttendClass();

  const onSubmit = (_data: AttendClassFormValues) => { mutate({code: _data.classCode}, {onSuccess: onAttend})};
  return (
    <VStack>
      <AttendToClass onSubmit={onSubmit} />
      <Button variant="attend" bgColor="#5D5FEF">
        Check Attendance
      </Button>
    </VStack>
  );
}
