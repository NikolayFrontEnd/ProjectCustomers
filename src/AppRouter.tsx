import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SigninPage/SignIn";
import Main from "./pages/MainPage/Main";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default AppRouter;
