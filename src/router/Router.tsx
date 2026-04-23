import { Routes, Route, BrowserRouter } from "react-router-dom";
import { _routes } from "./_routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {_routes?.map(({ path, element: Component }, idx) => (
          <Route key={idx} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
