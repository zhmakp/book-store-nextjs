import Link from "next/link";
import {useState} from "react";
import fetchUtils from "../utils/fetchUtils";

export default function CartItem({
  id,
  img,
  title,
  quantity,
  price,
  onnDelete,
  onUpdateQuantity
}) {
  const [quantityState,
    setQuantityState] = useState(quantity);

  const updateQuantity = (quantity) => {
    if (!quantity) 
      return;
    
    fetchUtils
      .patch(`cart/${id}/quantity`, {quantity})
      .then(({quantity}) => {
        setQuantityState(quantity);
        onUpdateQuantity();
      });
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="w-20" onClick={() => onnDelete(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 m-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
      <div className="w-1/12 p-2">
        <img src={img}></img>
      </div>
      <div className="flex-auto justify-start text-xl">
        <Link href={`books/${id}`}>{title}</Link>
      </div>
      <div className="w-2/12 text-center">
        <input
          className="w-10 h-8
            text-center
            focus:outline-none
            rounded-none border-gray-200
            border"
          value={quantityState}
          onChange={(e) => updateQuantity(e.target.value)}></input>
      </div>
      <div className="flex w-2/12 justify-end">${price}</div>
    </div>
  );
}
