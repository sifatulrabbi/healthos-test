import {Outlet, Navigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {isAuthenticatedSelector} from "../atoms";

function ProtectedRoutes() {
  const auth = useRecoilValue(isAuthenticatedSelector);

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
