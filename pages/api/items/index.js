import data from '../../../public/data/items.json';

function handler(req, res) {
  const items = data;
  res.status(200).json(items);
}

export default handler;
