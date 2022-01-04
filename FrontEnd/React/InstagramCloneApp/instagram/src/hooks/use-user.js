import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const [response] = await getUserByUserId(user.userId);
      setActiveUser(response);
    }

    if (user?.userId) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser };
}
