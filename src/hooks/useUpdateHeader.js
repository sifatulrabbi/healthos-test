import {useSetRecoilState} from "recoil";
import {pageHeader} from "../atoms";

export function useUpdateHeader() {
  const setHeader = useSetRecoilState(pageHeader);

  return function (title, prev, search, turn_off) {
    setHeader({title, prev, search, turn_off});
  };
}
