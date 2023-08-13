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
import HeadphonesDetail from "./pages/HeadphonesDetails/HeadphonesDetail";
import EarphonesDetails from "./pages/EarphonesDetails/EarphonesDetails";
import SpeakersDetails from "./pages/SpeakersDetails/SpeakersDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="headphones" element={<Headphones />} />
      <Route path="headphones/:headphonesId" element={<HeadphonesDetail />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="speakers/:speakersId" element={<SpeakersDetails />} />

      <Route path="earphones" element={<Earphones />} />
      <Route path="earphones/:earphonesId" element={<EarphonesDetails />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
