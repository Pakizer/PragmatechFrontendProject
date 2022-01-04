import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";
import { getUserByUserId } from "../services/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userA = await getUserByUserId(authUser.uid);
        localStorage.setItem("authUser", JSON.stringify(userA[0]));
        setUser(userA[0]);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
