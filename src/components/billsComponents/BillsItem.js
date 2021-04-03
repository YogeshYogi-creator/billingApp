import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {removeBill} from '../../actions/userActions'

//Material UI
import {Container, Grid, Typography, Card, CardContent} from '@material-ui/core'

import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import IconButton from '@material-ui/core/IconButton'


const BillsItem = (props) => {
    const {_id, date, customer, lineItems,total} = props 
    const [product, setProduct] = useState('')
    const [quantity, setQuentity] = useState('')
    const [price, setPrice] = useState('')
    const [subTotal, setSubTotal] = useState('')
    console.log('Line-Itme', lineItems)
    
    const dispatch = useDispatch()

    
    const handleRemove = () => {
        dispatch(removeBill(_id))
    }

    const billCustomer=useSelector((state)=>{        
        return state.customers.find(c=>c._id === customer)
    })
    console.log("BillCustomer", billCustomer)
    
    const billProduct=useSelector((state)=>{        
        return state.products.find(c=>c._id === product)
    })

    useEffect(()=>{
        lineItems.map(ele=>{
            setProduct(ele.product)
            setQuentity(ele.quantity)
            setPrice(ele.price)
            setSubTotal(ele.subTotal)    
        })
    },[lineItems])
    
    const pStyle = {
        position: "relative",
        top: "10px",
        left: "10px"
    }

    return(
        <Container>
            <Grid>
                    <Grid>
                        <Card>
                            <CardContent>
                                    <Typography style = {pStyle} variant = "h6"><b>Customer: </b>{billCustomer && billCustomer.name}</Typography>
                                    <Typography style = {pStyle}><b>Date:</b>{date}</Typography>
                                    <Typography style = {pStyle}><b>Product: </b>{billProduct && billProduct.name}</Typography>
                                    <Typography style = {pStyle}><b>Price: </b>{price}</Typography>
                                    <Typography style = {pStyle}><b>Quantity: </b>{quantity}</Typography>
                                    <Typography style = {pStyle}><b>Sub Total: </b>{subTotal}</Typography>
                                    <Typography style = {pStyle}><b>Total:</b> {total}</Typography>
                                        
                                        <Grid style = {pStyle} container direction="row">
                                        <Grid item lg={1} style = {{position: "relative", left: 10}}>
                                            <IconButton style={{backgroundColor: "#e67e22", marginRight:"10px", position: "relative", top:"5px"}} onClick = {handleRemove}>
                                                <DeleteTwoToneIcon/>
                                            </IconButton>
                                        </Grid>
                                            <Grid style = {{paddingLeft: 20, position: "relative", top: 5, left: 10}} item lg={1}>
                                                <IconButton {...props} style={{backgroundColor: "lightblue"}} component = {Link} to = {`/bills/${_id}`}><VisibilityTwoToneIcon/></IconButton>
                                            </Grid>
                                        </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
            </Grid>
        </Container>
    )
}

export default BillsItem