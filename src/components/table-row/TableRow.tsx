import { Td, Tr } from "@chakra-ui/react";

interface TableRowProps {
  data: (string | number)[];
  onClick?: () => void;
}

export function TableRow({ data, onClick = () => {} }: TableRowProps) {
  const getTableData = () =>
    data.map((item, index) => {
      return <Td key={index}>{item}</Td>;
    });

  return (
    <Tr
      _hover={{
        opacity: "80%",
        backgroundColor: "lightgrey",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {getTableData()}
    </Tr>
  );
}
