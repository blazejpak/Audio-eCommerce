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
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route
        path="headphones"
        element={<Headphones />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="headphones/:headphonesId"
        element={<DeviceDetail />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="speakers"
        element={<Speakers />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="speakers/:speakersId"
        element={<DeviceDetail />}
        errorElement={<ErrorPage />}
      />

      <Route
        path="earphones"
        element={<Earphones />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="earphones/:earphonesId"
        element={<DeviceDetail />}
        errorElement={<ErrorPage />}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
