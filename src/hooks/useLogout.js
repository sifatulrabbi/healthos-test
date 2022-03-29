import {removeAuthUser} from "../atoms";
import {useSetRecoilState} from "recoil";

export function useLogout() {
  const removeUser = useSetRecoilState(removeAuthUser);
  const functions = {};

  functions.logout = function () {
    removeUser();
  };

  return functions;
}
