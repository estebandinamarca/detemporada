// import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Image from 'next/image';

function ItemIdPage({ item }) {
  // const router = useRouter();
  // const slug = router.query.slug;
  return (
    <Fragment>
      {/* <h1>Item ID Page {slug}</h1> */}
      <p>[slug]</p>
      <p>{item.name.es}</p>
      <Image
        src={item.image.src}
        alt={item.name.es}
        layout='responsive'
        placeholder='blur'
        blurDataURL
        width={1280}
        height={960} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/items')
  const items = await response.json()
  const paths = items.map((item) => ({
    params: { slug: item.slug },
  }));
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/items/${params.slug}`)
  const item = await res.json()
  return { props: { item } }
}

export default ItemIdPage;