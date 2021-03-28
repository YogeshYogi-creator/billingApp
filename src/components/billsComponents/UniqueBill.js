import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import jsPDF from "jspdf"
import {Container, Avatar, makeStyles, Grid, Paper, Toolbar,
         Typography, AppBar, Button, IconButton, Menu, MenuItem} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
const UniqueBill = (props) => {
    const {id} = props.match.params
    console.log(id)
    const [uniqueBill, setUniqueBill] = useState({})
    const [orderDetails, setOrderDetails] = useState([])
    const [product, setProduct] = useState('')
    const [quantity, setQuentity] = useState('')
    const [price, setPrice] = useState('')
    const [subTotal, setSubTotal] = useState('')
    // console.log('uniqueBill', uniqueBill)
    // console.log('orderDetails', orderDetails)
    console.log('typeof Date', typeof(uniqueBill.date))
    // console.log('date', uniqueBill.date.slice(0,10))
    useEffect(()=>{
        axios.get(`https://dct-billing-app.herokuapp.com/api/bills/${id}`, {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            console.log('result', result)
            setUniqueBill(result)
            setOrderDetails(result.lineItems)
            result.lineItems.map(ele=>{
                setProduct(ele.product)
                setQuentity(ele.quantity)
                setPrice(ele.price)
                setSubTotal(ele.subTotal)
            })
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[id])

    const generatePDF = () => {
      let doc = new jsPDF('p', 'pt');
      
      doc.text(280, 20, `Bill`)

      doc.setFont('helvetica')
    //   doc.setFontType('normal')
      doc.text(20, 60, `Customer_id: ${uniqueBill.customer}`)

      doc.setFont('helvetica')
    //   doc.setFontType('normal')
      doc.text(20, 80, `Date: ${uniqueBill.date.slice(0,10)}`)
      
      doc.text(20, 100, `Order Details: 
                        Product_Id: ${product}
                        Quantity: ${quantity}
                        Price: ${price}
                        Sub-Total: ${subTotal}`
        )      
      doc.text(20, 200, `Total: ${uniqueBill.total}`)
      
      doc.save('bill.pdf')
    }


    const navStyle = {
        position: "relative",
        left: 20
    }
    return(
        <Container>
            <Grid>
                <hr/>
                    <Typography variant = "h4">Bill-Details</Typography>
                <hr/>
                    <Typography><b>User:</b> {uniqueBill.user}</Typography>
                <hr/>
                    <Typography><b>Customer_id:</b> {uniqueBill.customer}</Typography>
                    <Typography><b>Date:</b> {uniqueBill.date}</Typography>
                    <Typography><b>Order Details: </b>{orderDetails.map(ele=>{
                    return (
                        <Typography key = {ele._id}>
                                    <b>Product:</b> {ele.product}<br/>
                                    <b>Quantity:</b> {ele.quantity}<br/>
                                    <b>Sub-Total:</b> {ele.subTotal}
                        </Typography>
                            )
                        })}
                    </Typography>
                    <Typography><b>Total:</b> {uniqueBill.total}</Typography>
                <hr/>
                <Grid container>
                    <Grid ><Link to='/userProfile'><h3><b> ||</b>back to profile<b> | </b></h3></Link></Grid>    
                    <Grid ><Link to='/bills'><h3><b> | </b>bills<b> ||</b></h3></Link></Grid>
                    <Button style = {{left: 4}} startIcon={<SaveIcon />} variant="small" onClick = {generatePDF}>Pdf</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default UniqueBill