import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { ReactElement } from "react";
import { TableRow } from "../table-row/TableRow";

export interface Student {
  studentId: number;
  name: string;
  attendance: string;
  pressent: string;
}

export function TeacherClassList({
    studentNr = 20
}) {
    const getName = () => {
        const names = [
            "Casper",
            "Marie",
            "Johanne",
            "Kream",
            "Buddah",
            "JAnus",
            "Frederikke",
            "Camilla",
            "Christoffer",
            "Jannick",
            "Neja",
            "Amanda",
            "Alex",
            "Maccagnan",
            "Jonas",
            "Hannah"
        ];
        return names[Math.floor(Math.random()*names.length)]
    }
    const getTableRows = (studentNr: number): ReactElement[] => {
        let students: Student[] = []
        for( let i = 0; i < studentNr; i++ ) {
            const student: Student = {
                studentId: i+1,
                name: getName(),
                attendance: (50 + Math.floor(Math.random()*50)).toString() + "%",
                pressent: (Math.floor(Math.random()*10) % 2 === 0).toString()
            }
            students.push(student)
        }
        
        return students?.map((students) => {
            return (
                <TableRow
                    key={students.studentId}
                    data={[students.name, students.attendance, students.pressent]}
                />
            );
        });
    };

  return (
    <TableContainer width="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>STUDENT</Th>
            <Th>ATTENDANCE</Th>
            <Th>PRESENT</Th>
          </Tr>
        </Thead>
        <Tbody>{getTableRows(studentNr)}</Tbody>
      </Table>
    </TableContainer>
  );
}