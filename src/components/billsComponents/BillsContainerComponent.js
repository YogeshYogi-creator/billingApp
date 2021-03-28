import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {startGetBills} from '../../actions/userActions'
import BillsList from './BillsList'
import BillsForm from './BillsForm'
import {Container, TextField, Grid, Paper, Avatar, Button, Typography} from '@material-ui/core'

const BillsContainerComponent = (props) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startGetBills())
    },[dispatch])
    return (
        <Container>
            <Grid style = {{position: "relative", top: 20}} xs={12} sm={6}>
                    <Typography variant = "h4">Bill's</Typography>
            </Grid>
            <Grid container directions = "row">
                <Grid xs={12} sm={6}>
                    <BillsForm/>
                </Grid>
                <Grid style = {{position: "relative", top: 20}} xs={12} sm={6}>
                    <BillsList/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default BillsContainerComponent