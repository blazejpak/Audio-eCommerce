import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/HomePage/Home";
import Headphones from "./pages/HeadphonesPage/Headphones";
import Speakers from "./pages/Speakers/Speakers";
import Earphones from "./pages/Earphones/Earphones";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/earphones" element={<Earphones />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
