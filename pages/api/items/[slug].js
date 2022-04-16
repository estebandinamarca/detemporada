import items from '../../../public/data/items.json';

export default function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    const { slug } = req.query;
    const item = items.find((item) => item.slug === slug);
    if (!item) {
      return res.status(400).json('Item not found');
    }
    return res.status(200).json(item);
  }
}