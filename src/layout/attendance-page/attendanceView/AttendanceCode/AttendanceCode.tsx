import { useGetClassAttendanceCode } from "../../../../api/useClass";
import { Text } from "@chakra-ui/react";
import { Lecture } from "../../../../api/useLecture";

interface AttendanceCodeProps {
  lecture: Lecture;
}

export function AttendanceCode({ lecture }: AttendanceCodeProps) {
  const { data: code } = useGetClassAttendanceCode(lecture);
  return (
    <Text fontSize="4xl">
      Code: <span>{code?.data.code}</span>
    </Text>
  );
}
