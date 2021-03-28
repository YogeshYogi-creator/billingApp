import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startGetCustomers, startGetBills} from '../../actions/userActions'
import {Container, Grid, Typography, Paper} from '@material-ui/core'
import Graph from './Graph'
const UserDashboard = (props) => {
    const dispatch = useDispatch()

    const customersData = useSelector((state)=>{
        return state.customers
    })
    console.log(customersData)
    const billsData = useSelector((state)=>{
        return state.bills
    })

    useEffect(()=>{
        dispatch(startGetCustomers())
        dispatch(startGetBills())
    },[dispatch])

    const lastFiveCustomers = customersData.slice(Math.max(customersData.length - 5, 0))
    const lastFiveBills = billsData.slice(Math.max(billsData.length - 5, 0))
    console.log(lastFiveBills)
    
    return (
        <Container>
            <Typography variant = "h2" style = {{textAlign: "center"}}>Dashboard</Typography>
            <Grid style={{position: "relative", top: 30}} container>
                <Grid>
                    <Typography variant = "h4">Last Five Customers</Typography>
                    <ol>
                    {lastFiveCustomers.map((ele)=>{
                        return <li><Typography key = {ele._id}>{ele.name}</Typography></li>
                    })}
                    </ol>
                </Grid>
                                {/* Graph */}
                <Grid>
                    <Grid>
                        <Graph/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{position: "relative", top: 40}}>
                <Typography variant = "h4">Last 5 Bill's</Typography>
                <Grid container>
                {lastFiveBills.map((ele)=>{
                    return (
                        
                        <Grid style = {{position: "relative", padding: 7}} key = {ele._id}>
                            <Paper style = {{position: "relative", padding: 7, top: 5}}>
                            <Typography>User: {ele.user}</Typography>
                            <Typography>date: {ele.date}</Typography>
                            <Typography>Customer: {ele.customer}</Typography>
                            <Typography>Order Details: {ele.lineItems.map(ele=>{
                                return <Typography key = {ele._id}>Product: {ele.product} <br/> Quantity: {ele.quantity} <br/> Sub Total: {ele.subTotal}</Typography>
                            })}</Typography>
                            <hr/>
                            <Typography>Total: {ele.total}</Typography>
                            <hr/>
                            </Paper>
                        </Grid>
                            )
                })}
                </Grid>
            </Grid>
        </Container>
    )
}
export default UserDashboard