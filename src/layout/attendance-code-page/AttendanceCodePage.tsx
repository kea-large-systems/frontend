import { Button, VStack } from "@chakra-ui/react";

interface AttendanceCodeProps {
    subjectName: string;
    code: string;
}

export function AttendanceCodePage({
    subjectName = "Untitled",
    code = "1234"
}: AttendanceCodeProps) {
  //const onSubmit = () => {};
  return (
    <VStack height="70vh" justifyContent="center">
      {/* TODO: Name of class here */}
      <h2>{ subjectName }</h2>
      <p>Code: </p>
      <h2>{ code }</h2>
      {/* TODO:  Display code */}
      <Button variant="secondary">
        Check Attendance
      </Button>
    </VStack>
  );
}
