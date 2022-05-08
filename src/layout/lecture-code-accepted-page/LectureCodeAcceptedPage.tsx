import { Button, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Subject } from "../../components/subject-table/SubjectTable";

export function LectureCodeAcceptedPage() {
  const location = useLocation();
  const subject = location.state as Subject; 
  const navigate = useNavigate();
    
  return (
    <VStack height="75vh" justifyContent="center">
      <p>Thank you for attending: </p>
      {/* <h2>{ subject.name }</h2> */}
      <Button variant="secondary" onClick={() => navigate(-1)}>
        Back
      </Button>
    </VStack>
  );
}