import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import {Container, Avatar, makeStyles, Grid, Paper, Toolbar,
         Typography, AppBar, Button, IconButton, Menu, MenuItem} from '@material-ui/core'
const UniqueCustomer = (props) => {
    const {id} = props.match.params
    console.log(id)
    const [uniqueCustomer, setUniqueCustomer] = useState({})
    console.log(uniqueCustomer)
    useEffect(()=>{
        axios.get(`https://dct-billing-app.herokuapp.com/api/customers/${id}`, {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            console.log('result', result)
            setUniqueCustomer(result)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[id])

    
    return (
        <Container>
            <Grid container>
                <Grid>
                    <Typography variant = "h4">Customer-Details</Typography>
                <hr/>
                    <Typography><b>User:</b> {uniqueCustomer.user}</Typography>
                <hr/>
                    <Typography><b>Name:</b> {uniqueCustomer.name}</Typography>
                    <Typography><b>Mobile:</b> {uniqueCustomer.mobile}</Typography>
                    <Typography><b>email:</b> {uniqueCustomer.email}</Typography>
                    <Typography><b>Customer-Id:</b> {uniqueCustomer._id}</Typography>
                <hr/>
                    <Link to='/userProfile'>back to profile</Link><b> | </b>
                    <Link to='/customers'>customers</Link>
                    </Grid>
            </Grid>
        </Container>
    )
}
export default UniqueCustomer