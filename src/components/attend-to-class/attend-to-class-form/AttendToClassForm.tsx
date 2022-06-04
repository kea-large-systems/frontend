import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
interface AttendToClassFormProps {
  onSubmit: (data: AttendClassFormValues) => void;
  isLoading: boolean;
}

export interface AttendClassFormValues {
  classCode: string;
}

export function AttendToClassForm({
  onSubmit,
  isLoading,
}: AttendToClassFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AttendClassFormValues>();
  return (
    <VStack pt={100} px={100}>
      <FormControl isInvalid={errors.classCode?.message != null}>
        <VStack>
          <Input
            variant="flushed"
            placeholder="Class Code"
            width="250px"
            bgColor="#F0F0F1"
            {...register("classCode", {
              required: {
                value: true,
                message: "Please type the code from the teacher's monitor",
              },
              minLength: { value: 8, message: "Code should be 8 character" },
              maxLength: { value: 8, message: "Code should be 8 character" },
              pattern: {
                value: /^[A-Z]*$/,
                message: "Code should contains uppercase letters only",
              },
            })}
          />
          <Box height={5} color="transparent">
            <FormErrorMessage fontSize="small">
              {errors.classCode?.message}
            </FormErrorMessage>
          </Box>
        </VStack>
      </FormControl>
      <Button
        variant="attend"
        onClick={handleSubmit(onSubmit)}
        isLoading={isLoading}
      >
        Attend Class
      </Button>
    </VStack>
  );
}
