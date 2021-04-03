import React, {useState} from 'react'
import {startAddProducts, editProduct} from '../../actions/userActions'
import {useDispatch} from 'react-redux'

import {Container, TextField, Grid, Paper, Avatar, Button, Typography} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const ProductForm = (props) => {
    const {id, name: title, price: cost, handleToggle} = props
    const dispatch = useDispatch()
    const [productName, setProductName] = useState(title?title:'')
    const [productPrice, setProductPrice] = useState(cost?cost:'')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleProductNameChange = (e) => {
        setProductName(e.target.value)
    }
    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value)
    }

    const runValidations = () => {
        if(productName.trim().length === 0){
            errors.productName = 'product name cannot be empty'
        }
        if(productPrice.trim().length === 0){
            errors.productPrice = 'product price cannot be empty'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()
        if(Object.keys(errors).length === 0){
            setFormErrors({})
        const formData = {
            name: productName,
            price: productPrice
        }
        if(handleToggle){
            dispatch(editProduct(formData, id))
            handleToggle()
        }else{
            dispatch(startAddProducts(formData))
        }
        }else{
            setFormErrors(errors)
        }

        //Reset Form
        setProductName('')
        setProductPrice('')
    }
    const paperStyle = {padding: 20 }
    const avatarStyle = {backgroundColor: 'green'}
    return (
        <Container>
            <center>
            <Grid style = {{position: "relative", top: 35}}>
                <form onSubmit = {handleSubmit}>    
                <Paper style = {paperStyle}>
                    <Grid>
                        <Avatar style = {avatarStyle}><AccountCircleIcon/></Avatar>
                        {title?<h2>Edit Product</h2>:<h1>Add a product</h1>}
                    </Grid>
                        <TextField label = "Product Name" type = 'text' value = {productName} onChange = {handleProductNameChange} placeholder = 'Product name' fullWidth/>
                        {formErrors.productName && <span style = {{color: "red"}}>{formErrors.productName}</span>}
                        <br/>
                        <TextField label = "Price" type = 'number' value = {productPrice} onChange = {handleProductPriceChange} placeholder = 'Price' fullWidth/>
                        {formErrors.productPrice && <span style = {{color: "red"}}>{formErrors.productPrice}</span>}
                        <br/>
                        <Button type = 'submit' value = 'Add' color = 'primary' variant="contained" style = {{position: 'relative', top:10}}>Add</Button>
                </Paper>
            </form>
           </Grid>
        </center>
      </Container>
    )
}
export default ProductForm