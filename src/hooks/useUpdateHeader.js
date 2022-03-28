import {useRecoilState} from "recoil";
import {pageHeader} from "../atoms";

export function useUpdateHeader() {
  // eslint-disable-next-line no-unused-vars
  const [header, setHeader] = useRecoilState(pageHeader);

  return function (title, prev) {
    setHeader({
      title: title,
      prev: prev,
    });
  };
}
