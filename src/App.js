import Navigation from "./component/Navigation";
import Body from "./component/Body";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import { createPortal } from "react-dom";

import { Button } from "./components/ui/button";
import HomePageProduct from "./component/HomePageProduct";

function App() {
  return (
    <>
      <Router>
        <Navigation key={localStorage.getItem("isLoggedIn")} />
        <div style={{ marginTop: "72px" }}></div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/productlistpage" element={<ProductListPage />} />
          <Route path="/productpage/:productId" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/red-nike" element={<HomePageProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
