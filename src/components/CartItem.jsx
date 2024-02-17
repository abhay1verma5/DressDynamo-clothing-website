
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
          <p className="mt-1 text-xs text-gray-700">{item.description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> <button onClick={(()=>dispatch(remove(item)))}>-</button>  </span>
            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.quantity} min="1" />
            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"><button onClick={(()=>dispatch(add(item)))}>+</button>  </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">{item.price}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
