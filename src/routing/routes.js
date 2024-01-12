import { createBrowserRouter } from "react-router-dom";
import Mainpage from "./MainPage";
import Carform from "../components/carform";

const Router = createBrowserRouter([
  { path: "/", element: <Mainpage /> },
  { path: "/form", element: <Carform /> },
]);

export default Router