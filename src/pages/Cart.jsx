import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalQuantity = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity*item.price;
    });
    setTotal(totalQuantity);
  }, [cart]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div className="p-12">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">{total}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">9</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">{total+9}</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    

    </div>) : 
    (<div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="p-8 bg-white rounded-lg shadow-lg">
      <h1 class="text-center text-3xl font-semibold text-gray-800">Cart Empty</h1>
      <p class="text-center text-gray-600 mt-4">Looks like your cart is empty.</p>
      <Link to={"/"} class="block w-full mt-6 text-center">
        <button class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Start Shopping Now
        </button>
      </Link>
    </div>
  </div>
  
    )  
  }
    </div>
  );
};

export default Cart;
