
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { UserType } from "../../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { UserContext } from "../../provider/UserProvider";

export function LogoutButton() {
    const { setUserDetail } = useContext(UserContext);
    
    const logout = () => {
        console.log("logging out");
        setUserDetail({
            username: "",
            role: UserType.GUEST,
            userId: "",
        });
    }

    return <Button onClick={logout} variant="navigationLink">Log out</Button>
};