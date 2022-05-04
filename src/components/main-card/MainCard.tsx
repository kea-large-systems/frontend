import { Container, Divider, Spacer, VStack, Flex } from "@chakra-ui/react";
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

  return <VStack width={"55vw"} height={"70vh"} maxHeight={"70vh"} background={"pink"} px={10} py={5}>{getChildren()}</VStack>;
}
