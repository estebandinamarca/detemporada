import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import useSwr from 'swr';
// import BananaImg from '/public/fruits/banana.png';

// const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ItemsPage({ data }) {
  // const { data, error } = useSwr('http://localhost:3000/api/items', fetcher);
  // if (error) return <div>Failed to load items</div>
  // if (!data) return <div>Loading...</div>

  // *** SSR API Routes
  // const [items, setItems] = useState([]);
  // const fetchItems = async () => {
  //   const response = await fetch('/api/items');
  //   const data = await response.json();
  //   setItems(data);
  // }

  // *** SSR getStaticProps
  // const data = items;
  return (
    <Fragment>
      {/* <button onClick={fetchItems}>fetchItems</button> */}
      {data.map((item) => {
        return (
          <div
            className="item"
            key={item.id}>
            <Link
              href={`/items/${item.slug}`}>
              {item.name.es}
            </Link>
            <Image
              src={item.image.src}
              alt={item.name.es}
              layout='responsive'
              placeholder='blur'
              blurDataURL
              width={1280}
              height={960} />
            <hr />
          </div>
        )
      })}
    </Fragment>
  );
}

// *** SSR getStaticProps
export async function getStaticProps(context) {
  const response = await fetch('http://localhost:3000/api/items');
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}