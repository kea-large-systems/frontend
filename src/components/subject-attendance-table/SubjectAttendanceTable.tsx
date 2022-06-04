import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { TableRow } from "../table-row/TableRow";

export interface StudentSubject {
  subjectId: number;
  name: string;
  class: string;
  attendance: number;
  studentsCount: number;
}

interface SubjectTableProps {
  data?: StudentSubject[];
  isLoading?: boolean;
}

export function SubjectAttendanceTable({
  data = [],
  isLoading = false,
}: SubjectTableProps) {
  const navigate = useNavigate();
  const getTableRows = (subjects: StudentSubject[]): ReactElement[] => {
    return subjects?.map((subject) => {
      return (
        <TableRow
          key={subject.subjectId}
          data={[subject.class, subject.name, subject.studentsCount, subject.attendance.toString() + "%"]}
          onClick={() => navigate(`/`, { state: subject })}
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
            <Th>ATTENDANCE</Th>
          </Tr>
        </Thead>
        {!isLoading && <Tbody>{getTableRows(data)}</Tbody>}
      </Table>
    </TableContainer>
  );
}