import { jwtDecode } from "jwt-decode";
import CreateMovie from "../ui/AdminMov";

export default function Admin() {
  return jwtDecode(localStorage.getItem("token")).user_id == 2 ? (
    <div>
      ВЫ АДМИН
      <CreateMovie />
    </div>
  ) : (
    <div>ВЫ НЕ АДМИН</div>
  );
}
