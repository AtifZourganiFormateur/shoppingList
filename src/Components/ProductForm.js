import React from 'react';

const ProductForm = ({addProduct, products}) => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const prod = e.target.product.value;
        const amount = e.target.amount.value;
        const comment = e.target.comment.value;
        const id = products[products.length - 1].id + 1;
        const active = true;
        const newProduct = {id, prod, amount, active, comment}
        const productsCopy = [...products];
        productsCopy.push(newProduct);
        
        addProduct(productsCopy);
    }
    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <input type="text" name="product" placeholder='produit'/>
                <input type="number" name='amount' placeholder='quantité'/>
                <input type="text " name='comment' placeholder='commentaire'/>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default ProductForm;