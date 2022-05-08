import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { LoadingTable } from "../loading-table/LoadingTable";
import { TableRow } from "../table-row/TableRow";

export interface Subject {
  id: number;
  name: string;
  class: string;
  studentsCount: number;
}

interface SubjectTableProps {
  data?: Subject[];
  isLoading?: boolean;
}

export function SubjectTable({
  data = [],
  isLoading = false,
}: SubjectTableProps) {
  const getTableRows = (subjects: Subject[]): ReactElement[] => {
    return subjects?.map((subject) => {
      return (
        <TableRow
          key={subject.id}
          data={[subject.class, subject.name, subject.studentsCount]}
        />
      );
    });
  };

  return (
    <TableContainer width="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>CLASS</Th>
            <Th>SUBJECT NAME</Th>
            <Th>STUDENTS</Th>
          </Tr>
        </Thead>
        {!isLoading && <Tbody>{getTableRows(data)}</Tbody>}
      </Table>
      {isLoading && <LoadingTable rows={10} />}
    </TableContainer>
  );
}
