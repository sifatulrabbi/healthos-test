import {useSetRecoilState} from "recoil";
import {pageHeader} from "../atoms";

export function useUpdateHeader() {
  const setHeader = useSetRecoilState(pageHeader);

  return function (title, prev, logout, turn_off) {
    setHeader({title, prev, logout, turn_off});
  };
}
