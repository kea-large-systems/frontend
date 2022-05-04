import { Button } from "@chakra-ui/react";

interface PrimaryButtonProps {
  children: string | JSX.Element;
  size?: string;
  width?: string;
  onClick?: () => void;
}

export function PrimaryButton({children, size = "lg", width = "auto", onClick = () => {}}: PrimaryButtonProps) {
  return <Button variant={"primary"} width={width} size={size} onClick={onClick}>{children}</Button>
}