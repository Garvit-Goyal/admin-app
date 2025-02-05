import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":usedID" element={<Single />} />
              <Route path="new" element={<New input={userInputs} title="ADD NEW USER"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productID" element={<Single />} />
              <Route path="new" element={<New input={productInputs} title="ADD NEW PRODUCT"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
