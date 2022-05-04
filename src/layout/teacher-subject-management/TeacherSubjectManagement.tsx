import {HStack} from "@chakra-ui/react";
import {SearchInput} from "../../components/search-input/SearchInput";
import { MainCard } from "../../components/main-card/MainCard";

export function TeacherSubjectManagement() {
  return (
    <HStack>

      <MainCard><SearchInput/><SearchInput/><SearchInput/></MainCard>
    </HStack>
  );
}
