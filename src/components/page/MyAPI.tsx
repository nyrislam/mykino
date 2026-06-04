import type { RootState } from "../../app/store.tsx";
import { useSelector } from "react-redux";
import Main from "../ui/autorisation/Main.tsx";

export default function MyAPI() {
  const sd = useSelector((state: RootState) => state.DateUser);
  console.log("sss", sd);

  if (sd.username !== "") {
    return <div>Вы вошли в систуму {sd.username}</div>;
  } else {
    return <Main />;
  }
}
