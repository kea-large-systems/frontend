import { Button, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { DeleteClassAttendanceCode, GetClassAttendanceCode } from "../../api/useClass";
import { useLecture } from "../../api/useLecture";
import { Subject } from "../../components/subject-table/SubjectTable";

export function AttendanceCodePage() {
  const location = useLocation();
  const subject = location.state as Subject; 
  const { data: lecture } = useLecture(subject.id);
  const { data: code } = GetClassAttendanceCode(lecture?.data.lectureId);
  const navigate = useNavigate();
  const { mutate } = DeleteClassAttendanceCode(lecture?.data.lectureId);

  const handleClick = () => {
    mutate(lecture?.data.lectureId, {onSuccess: () => navigate("/manage-classes")})
  };

  return (
    <VStack height="75vh" justifyContent="center">
      <h2>{ subject.name }</h2>
      <p>Code: </p>
      <h2>{ code?.data.code }</h2>
      <Button variant="secondary" onClick={handleClick}>
        Stop Attendance
      </Button>
    </VStack>
  );
}
