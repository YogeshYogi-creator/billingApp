import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startGetCustomers, startGetBills, startGetProducts} from '../../actions/userActions'
import {Container, Grid, Typography} from '@material-ui/core'
import BillsList from './BillsList'
import Graph from './Graph'
const UserDashboard = (props) => {
    const dispatch = useDispatch()

    const customersData = useSelector((state)=>{
        return state.customers
    })
    console.log(customersData)

    useEffect(()=>{
        dispatch(startGetCustomers())
        dispatch(startGetBills())
        dispatch(startGetProducts())
    },[dispatch])

    //Last five items
    const lastFiveCustomers = customersData.slice(Math.max(customersData.length - 5, 0))
    console.log(lastFiveCustomers)

    
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
                    <Grid xs={12} sm={6}>
                        <Graph/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{position: "relative", top: 40}}>
                <Typography variant = "h4">Last 5 Bill's</Typography>
                <Grid>
                    <Grid>
                        <BillsList/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default UserDashboard