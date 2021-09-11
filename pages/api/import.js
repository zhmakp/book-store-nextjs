import { db } from '../../db-mock'
import fs from 'fs'

export default async function handler(_, res) {
  const url = 'https://learning.oreilly.com/api/v2/search/?formats[0]=book';
  const response = await fetch(url);
  const { results } = await response.json();
  const mappedResult = results.map(({title, description, archive_id}) => ({
    id: archive_id,
    img: `https://learning.oreilly.com/library/cover/${archive_id}/1000w/`,
    title,
    description,
    type: 'book',
    price: '100.00$',
    soldOut: false
  }))
  // await fs.writeFile('public/sample.json', JSON.stringify(mappedResult));
  db.books = mappedResult;

  res.status(200).json();
}