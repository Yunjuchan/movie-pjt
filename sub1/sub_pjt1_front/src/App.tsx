import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import Signup from "./routes/signup";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import Temp from "./routes/temp";

const router = createBrowserRouter([
  // 중첩 라우팅 => layout과 경로에 따른 자식 컴포넌트를 동시에 렌더링
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  // 라우팅
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/temp",
    element: <Temp />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [loading, setLoading] = useState(true);
  const init = async () => {
    // 백 연동 대기
    // await
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Wrapper>
        <GlobalStyles />
        {loading ? <LoadingScreen /> : <RouterProvider router={router} />}
      </Wrapper>
    </>
  );
}

export default App;
