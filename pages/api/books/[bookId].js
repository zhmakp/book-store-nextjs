import provider from "../../../data/provider";

export default async function handler(req, res) {
  const { bookId } = req.query;

  if (req.method === "POST") {
    const { quantity } = req.body;
    provider.addBookToCart(bookId, quantity);
    return res.status(200).json({});
  }
}
