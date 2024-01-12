import Carform from "./components/carform";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes"

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Carform />
      </RouterProvider>
    </>
  );
}

export default App;
