import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import {Container, Avatar, makeStyles, Grid, Paper, Toolbar,
         Typography, AppBar, Button, IconButton, Menu, MenuItem} from '@material-ui/core'
import { useSelector } from 'react-redux'
const UniqueCustomer = (props) => {
    const {id} = props.match.params
    console.log(id)
    const [uniqueCustomer, setUniqueCustomer] = useState({})
    console.log(uniqueCustomer)

    const userId = useSelector((state)=>{
        return state.userProfile
    })
    let userName = ''
    if(userId._id === uniqueCustomer.user){
        userName = userId.username
    }
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
            <Grid container directions = 'row'>
                <Grid xs = {12} sm = {6}>
                    <Typography variant = "h4">Customer-Details</Typography>
                <hr/>
                    <Typography><b>User:</b> {userName}</Typography>
                <hr/>
                    <Typography><b>Name:</b> {uniqueCustomer.name}</Typography>
                    <Typography><b>Mobile:</b> {uniqueCustomer.mobile}</Typography>
                    <Typography><b>email:</b> {uniqueCustomer.email}</Typography>
                    
                <hr/>
                    </Grid>
            </Grid>
        </Container>
    )
}
export default UniqueCustomer