import type { RootState } from "../../app/store.tsx";
import { useSelector } from "react-redux";
import Main from "../ui/autorisation/Main.tsx";
import Wishlist from "../ui/Wishlist.tsx";

export default function Account() {
  const sd = useSelector((state: RootState) => state.DateUser);
  if (sd.username !== "") {
    return (
      <div>
        <Wishlist />
      </div>
    );
  } else {
    return <Main />;
  }
}
