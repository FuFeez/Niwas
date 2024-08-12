import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { HouseListPage } from "../pages/HouseListPage";
import { PropertyDetail } from "../components/PropertyDetail";
import DetailPage from "../pages/DetailPage";
// import ModelPage from "../pages/ModelPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    )
  },
  {
    path: "/house",
    element: (
      <HouseListPage />
    )
  },
  {
    path: "/property/:id",
    element: (
      <DetailPage />
    )
  }
])