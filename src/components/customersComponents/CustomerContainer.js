import React, {useEffect} from 'react'
import CustomerForm from './CustomerForm' 
import CustomersList from './CustomersList'
import {useDispatch} from 'react-redux'
import {startGetCustomers} from '../../actions/userActions'

import { Container, Grid, Typography } from '@material-ui/core'
const CustomerContainer = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetCustomers())
    },[dispatch])

    // const data = useSelector((state)=>{
    //     return state.customers
    //     })
    // console.log('customerList', data)

    return (
        <Container>
            <Grid xs={12} sm={6} style = {{position: "relative", top: 20}}>
                <Typography variant = "h4" >Customer's</Typography>
            </Grid>
        <Grid container directions = "row">
            <Grid xs={12} sm={6}>
                <CustomerForm/>
            </Grid>
            <Grid style = {{position: "relative", top: 30, textAlign: "center"}} xs={12} sm={6}>
                <CustomersList/>
            </Grid>
        </Grid>
        </Container>
    )
}
export default CustomerContainer