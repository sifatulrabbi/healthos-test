import {Outlet, Navigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {isAuthenticated} from "../atoms";

function ProtectedRoutes() {
  const auth = useRecoilState(isAuthenticated);

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
