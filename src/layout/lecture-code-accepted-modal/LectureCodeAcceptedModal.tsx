import {
  Button,
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalOverlay,
} from "@chakra-ui/react";

interface LectureCodeAcceptedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LectureCodeAcceptedModal({
  isOpen,
  onClose,
}: LectureCodeAcceptedModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent justifyContent="center">
        <ModalHeader>
          <Text fontSize="6xl">Success!</Text>
        </ModalHeader>
        <ModalBody>Thank you for attending the class</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
