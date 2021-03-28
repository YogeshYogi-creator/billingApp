import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import {Container, Avatar, makeStyles, Grid, Paper, Toolbar,
         Typography, AppBar, Button, IconButton, Menu, MenuItem} from '@material-ui/core'
const UniqueProduct = (props) => {
    const {id} = props.match.params
    const [uniqueProduct, setUniqueProduct] = useState({})

    useEffect(()=>{
        axios.get(`https://dct-billing-app.herokuapp.com/api/products/${id}`, {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            setUniqueProduct(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }, [id])
    return(
        <Container>
        <Grid>
            <hr/>
            <Typography variant = "h4">Unique Product</Typography>
            <hr/>
            <Typography><b>User:</b> {uniqueProduct.user}</Typography>
            <hr/>
            <Typography><b>Name:</b> {uniqueProduct.name}</Typography>
            <Typography><b>Price:</b> {uniqueProduct.price}</Typography>
            <Typography><b>Product-Id:</b> {uniqueProduct._id}</Typography>
            <hr/>
            <Link to='/userProfile'>back to profile</Link> <b>| </b> 
            <Link to='/products'>products</Link>
        </Grid>
        </Container>
    )
}
export default UniqueProduct