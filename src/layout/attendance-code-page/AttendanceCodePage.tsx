import { Button, VStack } from "@chakra-ui/react";

export function AttendanceCodePage() {
  const onSubmit = () => {};
  return (
    <VStack height="70vh" justifyContent="center">
      {/* TODO: Name of class here */}
      <p>Code: </p>
      {/* TODO:  Display code */}
      <Button variant="secondary">
        Check Attendance
      </Button>
    </VStack>
  );
}
