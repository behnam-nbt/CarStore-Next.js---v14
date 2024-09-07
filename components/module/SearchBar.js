"use Client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './SearchBar.module.css'

function SearchBar() {

  const router = useRouter();

  const searchHandler = () => {
    if (minPrice && maxPrice) {
      router.push(`/filter/${minPrice}/${maxPrice}`);
    }else {
      alert('Please enter min and max price');
    }
  }

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  return (
    <div className={styles.container}>
      <div>
        <div>
          <input type="text" placeholder="Enter max-price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          <input type="text" placeholder="Enter min-price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        </div>
        <button onClick={searchHandler}>Search</button>
      </div>
    </div>
  )
}

export default SearchBar