import { Button, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function LectureCodeAcceptedPage() {
  const navigate = useNavigate();
    
  return (
    <VStack height="75vh" justifyContent="center">
      <Text fontSize="6xl">Thank you for attending.</Text>
      <Button variant="secondary" onClick={() => navigate(-1)}>
        Back
      </Button>
    </VStack>
  );
}