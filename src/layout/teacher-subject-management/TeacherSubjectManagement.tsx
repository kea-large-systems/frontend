import {HStack} from "@chakra-ui/react";
import {SearchInput} from "../../components/search-input/SearchInput";
import { MainCard } from "../../components/main-card/MainCard";
import { PrimaryButton } from "../../components/primary-button/PrimaryButton";

export function TeacherSubjectManagement() {
  return (
    <HStack>

      <MainCard>
        <HStack width={"100%"}>
          <SearchInput/>
          <PrimaryButton width={"15vw"}>Add</PrimaryButton>
        </HStack>
      </MainCard>
    </HStack>
  );
}
