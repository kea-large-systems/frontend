import { useGetClassAttendanceCode } from "../../../../api/useClass";
import { Text } from "@chakra-ui/react";

interface AttendanceCodeProps {
  lectureId: number;
}

export function AttendanceCode({ lectureId }: AttendanceCodeProps) {
  const { data: code } = useGetClassAttendanceCode(lectureId);
  return (
    <Text fontSize="4xl">
      Code: <span>{code?.data.code}</span>
    </Text>
  );
}
