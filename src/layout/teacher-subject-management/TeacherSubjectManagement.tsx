import { HStack } from "@chakra-ui/react";
import { SearchInput } from "../../components/search-input/SearchInput";
import { MainCard } from "../../components/main-card/MainCard";
import { PrimaryButton } from "../../components/primary-button/PrimaryButton";
import { SubjectTable } from "../../components/subject-table/SubjectTable";
import { useSubject } from "../../api/useSubject";
interface TeacherSubjectManagementProps {
  userId: string;
}
export function TeacherSubjectManagement({
  userId,
}: TeacherSubjectManagementProps) {
  const { data: subjects, isLoading } = useSubject(+userId);

  return (
    <HStack mx="40px" spacing="40px" key="page-container">
      <MainCard>
        <HStack width={"100%"} key="card-header">
          <SearchInput />
          <PrimaryButton width={"15vw"}>Add</PrimaryButton>
        </HStack>
        <SubjectTable data={subjects?.data} isLoading={isLoading} />
      </MainCard>
    </HStack>
  );
}
