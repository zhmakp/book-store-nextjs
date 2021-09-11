import { useState } from "react";
import fetchUtils from "../../utils/fetchUtils";
import provider from '../../data/provider'
import Button from "../../components/button";
import CartItem from '../../components/cart-item'

export default function Cart({ cart, refreshCartCount }) {
  const [cartState, setCartState] = useState(cart)

  const refreshItems = async () => {
    const { cart } = await fetchUtils.get("cart");
    setCartState(cart);
    refreshCartCount();
  }

  const deleteHandler = async (id) => {
    await fetchUtils.delete(`cart/${id}`);
    refreshItems();
  };

  return (
    <div>
      <div className="text-2xl uppercase tracking-widest mx-2 mt-20 mb-10">
        Shopping cart
      </div>
      <div className="divide-y divide-gray-200 mx-2">
        <div className="flex space-x-2 text-xs my-5">
          <span className="uppercase flex-auto">Item</span>
          <span className="uppercase w-2/12 text-center">Quantity</span>
          <span className="uppercase flex w-2/12 justify-end">Price</span>
        </div>
        {cartState.items.map((item) => (
          <CartItem
            {...item}
            onnDelete={() => deleteHandler(item.id)}
            onUpdateQuantity={refreshItems}
          ></CartItem>
        ))}
        <div className="flex flex-col items-end">
          <div className="py-8 text-sm ">Subtotal: ${cartState.subtotal}</div>
          <Button click={() => {}} text={"Checkout"}></Button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(_) {
  return { props: { cart: provider.itemsInCart } };
}
