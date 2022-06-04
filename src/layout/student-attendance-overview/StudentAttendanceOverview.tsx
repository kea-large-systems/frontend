import { HStack } from "@chakra-ui/react";
import { MainCard } from "../../components/main-card/MainCard";
import { StudentSubject, SubjectAttendanceTable } from "../../components/subject-attendance-table/SubjectAttendanceTable";

export function StudentAttendanceOverview() {
    const subjects: StudentSubject[] = [
        {
            subjectId: 1,
            name: "Testing",
            class: "SW20",
            attendance: 95,
            studentsCount: 38,
        },
        {
            subjectId: 2,
            name: "Web Development",
            class: "SW20",
            attendance: 82,
            studentsCount: 38,
        },
        {
            subjectId: 3,
            name: "Databases",
            class: "SW20",
            attendance: 88,
            studentsCount: 38,
        },
    ];

    const getAttendanceAverage = (subjects: StudentSubject[]) => {
        let sum = 0;
        let i = 0;
        for( i; i < subjects.length; i++ ) {
            sum += subjects[i].attendance;
        }
        const average = sum / i;
        return average.toFixed(2);
    }

    return (
        <HStack mx="40px" spacing="40px" key="page-container">
            <MainCard>
                <h3><strong>Total attendance: {getAttendanceAverage(subjects)} %</strong></h3>
                <SubjectAttendanceTable data={subjects} />
            </MainCard>
        </HStack>
    );
}