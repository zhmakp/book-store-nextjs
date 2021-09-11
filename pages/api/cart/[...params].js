import provider from "../../../data/provider";

export default async function handler(req, res) {
  const bookId = req.query.params[0];
  const part = req.query.params[1];

  if (req.method === "DELETE") {
    provider.removeBookFromCart(bookId);
    return res.status(200).json({ id: bookId });
  }
  if (req.method === "PATCH" && part === "quantity") {
    provider.updateBookQuantityInCart(bookId, req.body.quantity);
    return res.status(200).json({ quantity: req.body.quantity });
  }
  return res.status(404);
}
