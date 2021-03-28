import React, {useEffect} from 'react'
import {startGetUsers} from '../../actions/userActions'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import {Container, Avatar, makeStyles, Grid, Paper, Toolbar,
         Typography, AppBar, Button, IconButton, Menu, MenuItem} from '@material-ui/core'
const UserProfile = (props) => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.userProfile
    })
    // console.log(data.createdAt.slice(0,9))
    // console.log(data.createdAt.slice(11,18))
    useEffect(()=>{
        dispatch(startGetUsers())
    }, [])
    
    return (
        <Container>
        <Grid>
            <Grid>
                <hr/>
                <Typography variant = "h4">User Profile</Typography>
                <hr/>
                {data?
                <Grid xs={12} sm={6}>
                    <Typography><strong>User Name: </strong>{data.username}</Typography>
                    <Typography><strong>User Id: </strong>{data._id}</Typography>
                    <Typography><strong>Email: </strong>{data.email}</Typography>
                    <Typography><strong>Business Name: </strong>{data.businessName}</Typography>
                    <Typography><strong>Address: </strong>{data.address}</Typography>
                </Grid>
            : <Grid><p>Loading User Profile Data</p></Grid>
        }
    
            {/* <p><strong>Account Created Date: </strong>{data.createdAt.slice(0,9)}</p>
            <p><strong>Account Created Time: </strong>{data.createdAt.slice(11,18)}</p> */}
        </Grid>
        <hr/>
        <Grid xs={12} sm={6}>
            <Link to = '/customers'>Add Customer</Link><b> | </b>
            <Link to = '/products'>Add Product</Link><b> | </b>
            <Link to = '/bills'>Add Bills</Link>
        </Grid>
    </Grid>
    </Container>
    )
}
export default UserProfile