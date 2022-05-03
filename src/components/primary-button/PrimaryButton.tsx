import { Button } from "@chakra-ui/react";

interface PrimaryButtonProps {
  children: string | JSX.Element;
  size?: string;
  onClick?: () => void;
}

export function PrimaryButton({children, size = 'lg', onClick = () => {}}: PrimaryButtonProps) {
  return <Button onClick={onClick}>{children}</Button>
}