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
import DeviceDetail from "./pages/DeviceDetails/DeviceDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="headphones" element={<Headphones />} />
      <Route path="headphones/:headphonesId" element={<DeviceDetail />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="speakers/:speakersId" element={<DeviceDetail />} />

      <Route path="earphones" element={<Earphones />} />
      <Route path="earphones/:earphonesId" element={<DeviceDetail />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
