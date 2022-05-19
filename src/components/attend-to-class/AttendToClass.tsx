import { LectureCodeAcceptedModal } from "../../layout/lecture-code-accepted-modal/LectureCodeAcceptedModal";
import { useDisclosure, useToast, Wrap } from "@chakra-ui/react";
import { useAttendClass } from "../../api/useClass";
import {
  AttendClassFormValues,
  AttendToClassForm,
} from "./attend-to-class-form/AttendToClassForm";

export function AttendToClass() {
  const toast = useToast();
  const { mutate, isLoading } = useAttendClass();

  const onSubmit = (_data: AttendClassFormValues) => {
    mutate(
      { code: _data.classCode },
      {
        onSuccess: () => {
          onOpen();
        },
        onError: () => {
          toast({
            title: "Seems like you entered the wrong code",
            status: "error",
          });
        },
      }
    );
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <AttendToClassForm onSubmit={onSubmit} isLoading={isLoading} />
      <Wrap alignItems="center">
        <LectureCodeAcceptedModal isOpen={isOpen} onClose={onClose} />
      </Wrap>
    </>
  );
}
