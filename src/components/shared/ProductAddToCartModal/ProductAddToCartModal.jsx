import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductAddToCartModal.scss'


const ProductAddToCartModal = (props) => {

  const navigate = useNavigate()

  const { ImageofProduct, newProduct, productTitle, productDescription} = props
  const [price, setPrice] = useState(null)

  useEffect (() => {
    async function fetchData() {
      const response = await fetch('src/local-json/data.json');
      const data = await response.json();

      // Map the data from the JSON file to an array of objects
      const objects = data.map(item => ({
        id: item.id,
        slug: item.slug,
        name: item.name,
        image: item.image,
        category: item.category,
        categoryImage: item.categoryImage,
        new: item.new,
        price: item.price,
        description: item.description,
        features: item.features,
        includes: item.includes,
        gallery: item.gallery,
        others: item.others
      }));

      // Find the object with the name specified in the objectName prop
      const object = objects.find(item => item.name === productTitle);
      setPrice(object.price);
    }
    fetchData();
  }, [productTitle]);

  return (
    <div className="add__container">
       <button onClick={() => navigate(-1)}>Go Back</button>
       <img src={ImageofProduct} alt="A preview of the Product"/>
       <p>{newProduct}</p>
       <h1>{productTitle}</h1>
       <p>{productDescription}</p>
       <span>${price ? price : null}</span>
    </div>
  )
}

export default ProductAddToCartModal