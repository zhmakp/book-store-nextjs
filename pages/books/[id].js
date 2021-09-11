import { useState } from "react";
import Button from '../../components/button'
import provider from "../../data/provider";
import fetchUtils from "../../utils/fetchUtils";

export default function Detail({ detail, refreshCartCount }) {
  const [adding, setAdding] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addToCard = () => {
    setAdding(true);

    fetchUtils.post(`books/${detail.id}`, { quantity }).then(() => {
      setAdding(false);
      refreshCartCount();
      setInterval(() => setAdding(null), 1000);
    });
  };

  return (
    <div className="flex space-x-8 mt-8">
      <div className="flex-auto">
        <img src={detail.img} />
      </div>
      <div className="flex-auto w-3/5">
        <div className="block text-base">{detail.title}</div>
        <div className="block my-5">${detail.price}</div>
        <div>
          <label className="uppercase text-xs block">Quantity:</label>
          <input
            type="number"
            value={quantity}
            className="rounded-none border-black border-2 w-16 p-1 mb-5"
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
        </div>
        <div className="block mb-5">
          <Button
            click={addToCard}
            disabled={adding !== null}
            text={adding === null ? "Add to cart" : adding ? "Adding" : "Added!"}
          ></Button>
        </div>
        <div
          className="block text-sm"
          dangerouslySetInnerHTML={{ __html: detail.description }}
        ></div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const detail = provider.findById(context.query.id);
  return { props: { detail } };
}
