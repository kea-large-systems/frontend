import { Divider, VStack } from "@chakra-ui/react";
import { Fragment, ReactElement } from "react";

interface MainCardProps {
  children: ReactElement | ReactElement[];
}

export function MainCard({ children }: MainCardProps) {
  const getChildren = () => {
    let childrenArray: ReactElement[] = [];
    childrenArray = childrenArray.concat(children);

    return childrenArray.map((child, index) => {
      return (
        <Fragment key={child.key}>
          {index !== 0 && <Divider />}
          {child}
        </Fragment>
      );
    });
  };

  return (
    <VStack
      borderRadius={"5px"}
      boxShadow={"0px 0px 23px -1px rgba(0, 0, 0, 0.2)"}
      width={"55vw"}
      height={"70vh"}
      maxHeight={"70vh"}
      px={10}
      py={5}
    >
      {getChildren()}
    </VStack>
  );
}
