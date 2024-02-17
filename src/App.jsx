import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
      
        <div className="p-12">
        <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
        </div>
  </div>)
};

export default App;
