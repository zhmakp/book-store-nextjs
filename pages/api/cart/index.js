import provider from "../../../data/provider";

export default async function handler(req, res){
  return res.status(200).json({cart: provider.itemsInCart})
}