import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form.tsx";
import SimpleHooks from "./components/SimpleHooks";
import CalculateAge from "./components/CalculateAge";
import Navbar from "./components/Navbas";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <SimpleHooks /> <Navbar />
      </div>
    ),
  },
  {
    path: "/form",
    element: (
      <div>
        <Navbar></Navbar>
        <Form />
      </div>
    ),
  },
  {
    path: "/calage",
    element: (
      <div>
        {" "}
        <Navbar /> <CalculateAge />{" "}
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
