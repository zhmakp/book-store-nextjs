import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'
import '../public/styles.css'
import { useState, useEffect } from 'react'
import fetchUtils from '../utils/fetchUtils';

function MyApp({ Component, pageProps }) {
  const [itemsInCart, setitemsInCart] = useState(0);

  const fetchCount = async () => {
    const { count } = await fetchUtils.get('cart/count');
    setitemsInCart(count);
  }

  useEffect(() => (fetchCount()))

  return (<Layout itemsInCart={itemsInCart}>
    <Component {...pageProps} refreshCartCount={fetchCount}/>
  </Layout>)
}

export default MyApp
