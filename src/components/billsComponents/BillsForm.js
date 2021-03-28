import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {startAddBills, editBill} from '../../actions/userActions'

import {Container, TextField, Grid, Paper, Avatar, Button, Typography} from '@material-ui/core'
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
const BillsForm = (props) => {
    const {_id, date:thisDate, customer, lineItems, user, createdAt, updatedAt, total, handleToggle} = props 
    const dispatch = useDispatch()

    const [date, setDate] = useState(thisDate?thisDate:'')
    const [customerId, setCustomerId] = useState(customer?customer:'')
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState(0)



    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleCustomerIdChange = (e) => {
        setCustomerId(e.target.value)
    }
    const handleProductChange = (e) => {
        setProduct(e.target.value)
    }
    const handleQuantitysChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            date: date,
            customer: customerId,
            lineItems: [{product: product, quantity: quantity}]
        }
        if(handleToggle){
            dispatch(editBill(formData, _id))
            handleToggle()
        }else{
            dispatch(startAddBills(formData))
        }
        
        setDate('')
        setCustomerId('')
        setProduct('')
        setQuantity('')
    }
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
                                <TextField type = 'date' value = {date} onChange = {handleDateChange} placeholder = 'date' fullWidth/><br/>
                                <TextField label = "Customer" type = 'text' value = {customerId} onChange = {handleCustomerIdChange} placeholder = 'customer' fullWidth/><br/>
                                <TextField label = "Product" type = 'text' value = {product} onChange = {handleProductChange} placeholder = 'product' fullWidth/><br/>
                                <TextField label = "Quantity" type = 'number' value = {quantity} onChange = {handleQuantitysChange} placeholder = 'quantity' fullWidth/><br/>
                                <Button type = "submit" value = 'Add' color = 'primary' variant="contained" style = {{position: 'relative', top:10}}>Add</Button>
                            </Grid>
                        </Paper>
                    </form>
                </Grid>
            
        </Container>
    )
}
export default BillsForm