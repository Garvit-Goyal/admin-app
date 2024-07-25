import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const RedirectIfAuthenticated = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="login" element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
            <Route path="users">
              <Route index element={<RequireAuth><List titleH="ADD NEW USER" /></RequireAuth>} />
              <Route path=":usedID" element={<RequireAuth><Single /></RequireAuth>} />
              <Route path="new" element={<RequireAuth><New input={userInputs} title="ADD NEW USER" /></RequireAuth>} />
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List titleH="ADD A NEW PRODUCT" /></RequireAuth>} />
              <Route path=":productID" element={<RequireAuth><Single /></RequireAuth>} />
              <Route path="new" element={<RequireAuth><New input={productInputs} title="ADD NEW PRODUCT" /></RequireAuth>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
