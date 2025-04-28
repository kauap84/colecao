'use client'

import styles from "./page.module.css";
import Categories from '@/components/categories';
import Search from "@/components/Search";
import Card from "@/components/Card";
import { filterProducts, searchProducts } from "@/Service";
import { useState } from 'react'

export default function Home() {

  const [btnClicked, setBtnClicked] = useState('Entradas');
  const [searchTxt, setSearchTxt] = useState('');
  const [list, setList] = useState(filterProducts('Entradas'))


  const handleFilter = (category) => {
    setList(filterProducts(category));
    setBtnClicked(category);
    setSearchTxt('');
  }

  const handleSearch = (typedText) => {
    setSearchTxt(typedText);
    if (typedText.length > 2){
      setList(searchProducts(typedText))
    }
  }

  return (
    <div className={styles.container}>

      <section className={styles.banner}></section>

      <main className={styles.main}>
        <Categories
         onclickEntradas={() => handleFilter('Entradas')}
         onclickMassa={() => handleFilter('massas')}
         onclickCarnes={() => handleFilter('Carnes')}
         onclickBebidas={() => handleFilter('Bebidas')}
         onclickSaladas={() => handleFilter('Saladas')}
         onclickSobremesas={() => handleFilter('Sobremesas')}

         selectedBtn={btnClicked}/>

         <Search onChange={(event) => handleSearch(event.target.value)}
         value={searchTxt}/>

         <section className={styles.foodMenu}>
          <h2>Cardapio</h2>
          <div className={styles.cards}>
            {list.map((product) => (

            <Card 
            key={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            description={product.description}
            price={product.price}
            lenght={list.lenght}
            />
          ))}
          </div>
         </section>

      </main>

    </div>
  );
}
