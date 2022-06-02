import { Skeleton, Stack } from "@chakra-ui/react";

interface LoadingTableProps {
  height?: string;
  rows?: number;
}

export function LoadingTable({height = "20px", rows = 1}: LoadingTableProps) {
  const getSkeletonRows = () =>
    new Array(rows).fill(null).map((_, index) => <Skeleton key={index} data-testid="loading-row" height={height} />);

  return (
    <Stack width={"100%"} children={getSkeletonRows()}/>
  );
}