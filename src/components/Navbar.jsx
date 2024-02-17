import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { filterByCategory,sortByPrice } from "../redux/Slices/ProductSlice";
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [total, setTotal] = useState(0);
  
 const dispatch=useDispatch()

  // Dispatch filter and sort actions based on user interactions
  
  useEffect(() => {
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    setTotal(totalQuantity);
  }, [cart]);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-gray-800">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" alt="Logo" />
          </div>
        </NavLink>

        <NavLink to="/" className="text-gray-200 hover:text-gray-400">
          <button onClick={ ()=>{ dispatch(filterByCategory("clothing"))}}>Clothing</button>
        </NavLink>

        <NavLink to="/" className="text-gray-200 hover:text-gray-400">
        <button onClick={  ()=>{ dispatch(filterByCategory("electronics"))}}> Electronics</button> 
        </NavLink>

        <NavLink to="/" className="text-gray-200 hover:text-gray-400">
        <button onClick={ ()=>{ dispatch(filterByCategory("jewelery"))}}> jewelery</button> 
        </NavLink>
        <NavLink to="/" className="text-gray-200 hover:text-gray-400">
        <button onClick={ ()=>{ dispatch(sortByPrice())}}> Price Wise</button> 
      </NavLink>
        <div className="flex items-center font-medium text-white mr-5 space-x-6">
         

          <NavLink to="/cart" className="text-gray-200 hover:text-white">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {total}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
