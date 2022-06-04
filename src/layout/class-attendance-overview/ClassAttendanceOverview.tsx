import { Button, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { MainCard } from "../../components/main-card/MainCard";
import { TeacherClassList } from "../../components/teacher-class-list/TeacherClassList";

export function ClassAttendanceOverview() {
  const location = useLocation();
  const studentNr = location.state as number;
  const navigate = useNavigate();

  return (
    <HStack mx="40px" spacing="40px" key="page-container">
        <MainCard key="Class">
          <div>Student list</div>
          <TeacherClassList studentNr={studentNr}/>
        </MainCard>
        <Button onClick={() => navigate(-1)}>Back</Button>
    </HStack>
  );
}
