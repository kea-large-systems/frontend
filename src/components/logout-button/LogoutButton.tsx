
import { Button } from "@chakra-ui/react";

interface LogoutButtonProps {
    logout: () => void,
}

export function LogoutButton({logout}: LogoutButtonProps) {
    return <Button onClick={logout} variant="navigationLink">Log out</Button>
};