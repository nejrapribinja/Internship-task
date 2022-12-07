import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import AllPosts from "./components/userPrivate/AllPosts";
import MyPosts from "./components/userPrivate/MyPosts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/allPosts" element={<AllPosts />} />
        <Route path="/editPost" element={<MyPosts />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
