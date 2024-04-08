import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/main_layout";
import Homepage from "../components/homepage";
import Exhibition from "../components/my_exhibition";
import NotFound from "../components/not_found";
import SearchResultsPage from "../components/search_results_page";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />}></Route>;
        <Route path="/search-results" element={<SearchResultsPage />}></Route>
        <Route path="/my-exhibition" element={<Exhibition />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
