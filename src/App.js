import './App.css';
import React, { useState } from 'react';
import ProductArticle from './Components/ProductArticle';
import ProductForm from './Components/ProductForm';


function App() {
    //déclaration de mon array product
    const [products, setProducts] = useState([
      {id: 1, prod: 'banane', amount: 10, active: true, comment: 'des bananes bios'},
      {id: 2, prod: 'Lait', amount: 1, active: true, comment: 'Le moins cher !'},
      {id: 3, prod: 'Manette switch', amount: 1, active: true, comment: 'Pour battre mathieu'},
      {id: 4, prod: 'PC', amount: 100, active: false, comment: 'Le miens est trop lent'},
      {id: 5, prod: 'Carottes', amount: 4, active: true, comment: ''},
      {id: 6, prod: 'Merguez', amount: 10, active: false, comment: ''}
    ])

    //gestion d'ajout de produits
    const addProduct = (productsCopy,) => {
      setProducts(productsCopy);
    }

    //gestion de la barre de recherche
    const [searchValue, setSearchValue] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
      };
    React.useEffect(() => {
        const searchProduct = products.filter(product => product.prod.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredProducts(searchProduct);
    }, [searchValue, products]);

  return (
    <div>
        <section>
            <h2>Ajouter un éléments</h2>
            <ProductForm addProduct={addProduct} products={products}/>
        </section>
        <section className='marginAuto'>
          <div>
            <input type="search" value={searchValue} onChange={handleSearchInput} placeholder="cherchez un produit" />
          </div>
          <div className='articlesContainer'>
              {filteredProducts.map((product)=>{
                  return <article key={product.id}>
                              <ProductArticle products={products} addProduct={addProduct} product={product} id={product.id}/>
                          </article>
              })}
          </div>
        </section>
    </div>
  );
}

export default App;

