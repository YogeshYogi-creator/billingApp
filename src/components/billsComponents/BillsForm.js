import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startAddBills} from '../../actions/userActions'

import {Container, TextField, Grid, Paper, Avatar, Button, Typography} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone'
import IconButton from '@material-ui/core/IconButton'
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1'
import PlusOneIcon from '@material-ui/icons/PlusOne'
const BillsForm = (props) => {
    const {_id, date:thisDate, customer, lineItems, user, createdAt, updatedAt, total, handleToggle} = props 
    const dispatch = useDispatch()

    const [date, setDate] = useState(thisDate?thisDate:'')
    const [customerId, setCustomerId] = useState(customer?customer:'')
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const productsNames = useSelector((state)=>{
        return state.products
    })
    console.log("productsName", productsNames)

    const customersNames = useSelector((state)=>{
        return state.customers
    })
    console.log("customerNames", customersNames)

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleCustomerIdChange = (e, v) => {
        if(v){
          setCustomerId(v._id)  
        }else{
            setCustomerId('')
        }
    }
    const handleProductChange = (e, v) => {
        if(v){
          setProduct(v._id)
        }else{
            setProduct('')
        }
    }
    const handleQuantitysChange = (e) => {
        setQuantity(e.target.value)
    }
    const runValidations = () => {
        if(date.trim().length === 0){
            errors.date = 'date cannot be blank'
        }
        if(customerId.trim().length === 0){
            errors.customerId = 'customer cannot be blank'
        }
        if(product.trim().length === 0){
            errors.product = 'product cannot be blank'
        }
        if(quantity < 1){
            errors.quantity = 'minimum quantity should be 1'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                date: date,
                customer: customerId,
                lineItems: [{product: product, quantity: quantity}]
            }
            if(handleToggle){
                handleToggle()
            }else{
                dispatch(startAddBills(formData))
            }
        }else{
            setFormErrors(errors)
    }
        //Reset form
        setDate('')
        setCustomerId('')
        setProduct('')
        setQuantity('')
    }
    //Quantity Increment and Quantity Decrement
    const quantityIncrement = () => {
        setQuantity(quantity+1)
    }
    const decrementQuantity = () => {
        quantity>0 ? setQuantity(quantity-1) : setQuantity(0)
    }
    //CSS
    const paperStyle = {padding: 20 }
    const avatarStyle = {backgroundColor: 'green'}
    return (
        <Container>
            
                <Grid style = {{position: "relative", top: 35}}>
                    <form onSubmit = {handleSubmit}>
                        <Paper style = {paperStyle}>
                            <Grid style = {{textAlign: "center"}}>
                                <Avatar style = {avatarStyle}><LibraryAddTwoToneIcon/></Avatar>
                                {thisDate?<Typography variant = "h4">Edit Bill</Typography>:<Typography variant = "h4">Add a Bill</Typography>}
                            </Grid>
                            <Grid>
                                <TextField type = 'date' value = {date} onChange = {handleDateChange} placeholder = 'date' fullWidth/>
                                {formErrors.data && <span style = {{color: "red"}}>{formErrors.date}</span>}
                                <br/>
                                <Autocomplete
                                    options={customersNames}
                                    getOptionLabel={(option) => option.name}
                                    onChange = {handleCustomerIdChange}
                                    style={{ position: "relative", top: 20 }}
                                    renderInput={(params) => <TextField  {...params} label="Customers" variant="outlined" />
                                }/>
                                {formErrors.customerId && <span style = {{color: "red"}}>{formErrors.customerId}</span>}
                                <br/>

                                <Autocomplete
                                    options={productsNames}
                                    getOptionLabel={(option) => option.name}
                                    onChange = {handleProductChange}
                                    style={{ position: "relative", top: 20 }}
                                    renderInput={(params) => <TextField {...params} label="Products" variant="outlined" />
                                    }/>
                                {formErrors.product && <span style = {{color: "red"}}>{formErrors.product}</span>}
                                <br/>
                                <Grid >
                                <Typography variant = "h6">Quantity</Typography>
                                <Grid container >
                                    <Grid>
                                        <IconButton style = {{backgroundColor: "lightgreen"}} onClick = {()=>{
                                            decrementQuantity()
                                        }} color="primary" aria-label="-1">
                                        <ExposureNeg1Icon />
                                        </IconButton>
                                    </Grid>
                                    <Grid>
                                        <Typography style = {{paddingRight: 15, paddingLeft: 15}} onChange = {handleQuantitysChange} value = {quantity} variant = "h4">{quantity}</Typography>
                                        {formErrors.quantity && <span style = {{color: "red", position: "relative", top: 15}}>{formErrors.quantity}</span>}
                                    </Grid>
                                    <Grid>
                                        <IconButton style = {{backgroundColor: "lightgreen"}} onClick = {()=>{
                                            quantityIncrement()
                                        }} color="primary" aria-label="+1">
                                        <PlusOneIcon />
                                        </IconButton>
                                    </Grid> 
                                </Grid>
                                <Grid>
                                {/* <Typography variant = "h5">Price</Typography> */}
                                </Grid>
                                </Grid>
                                <br/>

                                <Button type = "submit" value = 'Add' color = 'primary' variant="contained" style = {{position: 'relative', top:10}}>Add</Button>
                            </Grid>
                        </Paper>
                    </form>
                </Grid>
            
        </Container>
    )
}
export default BillsForm