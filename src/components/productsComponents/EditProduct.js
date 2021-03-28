import React from 'react'
import ProductForm from './ProductForm'
const EditProduct = (props) => {
    const {id, name, price, handleToggle} = props
    return (
        <div>
            <ProductForm id = {id} name={name} price={price} handleToggle = {handleToggle}/>
        </div>
    )
}
export default EditProduct