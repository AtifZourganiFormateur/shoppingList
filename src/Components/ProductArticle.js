import React from 'react';

const ProductArticle = ({product, id, addProduct, products}) => {
    let comment;
    let styleArticle;

    //gestion du message en cas d'absence de commentaire
    if(product.comment.length < 1){
        comment = 'Pas de commentaire';
    }else{
        comment = product.comment;
    }
    //gestion du style en fonction du boolean active
    if(product.active == true){
        styleArticle = 'articleProd articleTrue'
    }else{
        styleArticle = 'articleProd articleFalse'
    }
    //gestion de suppression des elements product par id
    const handleDeleteProd = (id) => {
        const productsCopy = [...products];
        const newProductsFilter = productsCopy.filter(product => product.id !== id);
        // setProducts(newProductsFilter);
        addProduct(newProductsFilter);
    }
    //gestion de la modification de la key active des elements product
    const handleChangeStatus = (id) => {
        const productsToChange = products.map( (product) => {
            if(product.id === id){
                const productToChange = {...product, active: !product.active};
                return productToChange
            }
            return product;
        })
        addProduct(productsToChange);
    }
    return (
        <div  className={styleArticle}>
            <h3>{product.prod} </h3>
            <span>{product.amount}</span>
            <p>{comment}</p>
            <button onClick={()=>{handleDeleteProd(id)}}>Delete produit</button>
            <button onClick={()=>{handleChangeStatus(id)}}>Change status</button>
        </div>
    );
};

export default ProductArticle;