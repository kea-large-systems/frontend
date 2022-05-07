import { HStack, Skeleton, Stack } from "@chakra-ui/react";
import {SearchInput} from "../../components/search-input/SearchInput";
import { MainCard } from "../../components/main-card/MainCard";
import { PrimaryButton } from "../../components/primary-button/PrimaryButton";
import { SubjectTable } from "../../components/subject-table/SubjectTable";
import { useSubject } from "../../api/useSubject";

export function TeacherSubjectManagement() {
  const {data: subjects, isLoading} = useSubject();

  return (
    <HStack key="page-container">
      <MainCard>
        <HStack width={"100%"} key="card-header">
          <SearchInput/>
          <PrimaryButton width={"15vw"}>Add</PrimaryButton>
        </HStack>
        <SubjectTable data={subjects?.data} isLoading={isLoading}/>
      </MainCard>
    </HStack>
  );
}
