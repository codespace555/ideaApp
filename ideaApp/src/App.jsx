import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/auth.slice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/auth";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getcurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>{/* <Outlet/> */}</main>
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
