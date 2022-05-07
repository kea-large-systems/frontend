import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ReactElement } from "react";
import { LoadingTable } from "../loading-table/LoadingTable";

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

export function SubjectTable({ data = [], isLoading = false }: SubjectTableProps) {
  const getTableRows = (subjects: Subject[]): ReactElement[] => {
    return subjects.map((subject) => {
      return (
        <Tr key={subject.id}>
          <Td>{subject.class}</Td>
          <Td>{subject.name}</Td>
          <Td>{subject.studentsCount}</Td>
        </Tr>
      );
    });
  };

  return (
    <TableContainer>
      <Table variant='simple'>
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