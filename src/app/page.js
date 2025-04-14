'use client'

import styles from "./page.module.css";
import Categories from '@/components/categories';
import { useState } from 'react'

export default function Home() {

  const [btnClicked, setBtnClicked] = useState('Entradas');

  const handleFilter = (category) => {
    setBtnClicked(category);
  }
  return (
    <div className={styles.container}>

      <section className={styles.banner}></section>

      <main className={styles.main}>
        <Categories onclick={() => handleFilter('Entradas')}
         selectedBtn={btnClicked}/>
      </main>

    </div>
  );
}
