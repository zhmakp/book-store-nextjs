import provider from '../../../data/provider'

export default async function handler (req, res) {
  res.status(200).json({ count: provider.numberOfBooksInCart })
}