import { useLecture } from "../../../api/useLecture";
import { Subject } from "../../../components/subject-table/SubjectTable";
import { AttendanceCode } from "./AttendanceCode/AttendanceCode";
import { Button, Text } from "@chakra-ui/react";
import {
  attendanceQueryKey,
  useDeleteClassAttendanceCode,
} from "../../../api/useClass";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

interface AttendanceViewProps {
  subject: Subject;
}

export function AttendanceView({ subject }: AttendanceViewProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate } = useDeleteClassAttendanceCode();
  const handleClick = () => {
    if (lecture?.lectureId)
      mutate(
        { id: lecture.lectureId },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([
              attendanceQueryKey.classes,
              subject.subjectId,
            ]);
            navigate(-1);
          },
        }
      );
  };

  const { data: lecture } = useLecture(subject.subjectId);
  return (
    <>
      {lecture?.name ? <Text fontSize="2xl">{lecture.name}</Text> : null}
      {lecture?.lectureId ? (
        <AttendanceCode lectureId={lecture.lectureId} />
      ) : null}
      <Button variant="secondary" onClick={handleClick}>
        Stop Attendance
      </Button>
    </>
  );
}
