import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {removeBill} from '../../actions/userActions'
import EditBill from './EditBill'

//Material UI
import {Container, TextField, Grid, 
        Paper, Avatar, Button, Typography,
        List, ListItem, ListItemText, Card, CardContent} from '@material-ui/core'

import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';



const BillsItem = (props) => {
    const {_id, date, customer, lineItems, user, createdAt, updatedAt, total} = props 
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    // console.log('Line-Itme', lineItems)

    
    const handleRemove = () => {
        dispatch(removeBill(_id))
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const pStyle = {
        position: "relative",
        top: "10px",
        left: "10px"
    }


    return(
        <Container>
            <Grid>
              {toggle?(
                <Grid item sm = {4}>
                    <Card>
                        <CardContent>
                            <Typography>
                                <EditBill id={_id} date = {date} customer={customer} 
                                lineItems={lineItems} user={user} total={total} 
                                handleToggle={handleToggle}/>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                ):(
                    <Grid>
                        <Card>
                            <CardContent>
                                    <Typography style = {pStyle} variant = "h6"><b>Customer: </b>{customer}</Typography>
                                    <Typography style = {pStyle}><b>Date:</b>{date}</Typography>
                                    <Typography style = {pStyle}><b>Order Details: </b>{lineItems.map(ele=>{
                                        return <Typography key = {ele._id}>
                                                    <b>Product:</b> {ele.product}<br/>
                                                    <b>Quantity:</b> {ele.quantity}<br/>
                                                    <b>Sub-Total:</b> {ele.subTotal}
                                                </Typography>
                                            })}
                                    </Typography>
                                        <Typography style = {pStyle}>
                                            <b>Total:</b> {total}
                                        </Typography>
                                        <Grid style = {pStyle} container direction="row">
                                        <Grid item lg={1} style = {{position: "relative", left: 10}}>
                                            <Avatar style={{backgroundColor: "red", marginRight:"10px", position: "relative", top:"5px"}} onClick = {handleRemove}>
                                                <DeleteTwoToneIcon/>
                                            </Avatar>
                                        </Grid>
                                            <Grid style = {{paddingLeft: 20, position: "relative", top: 5}} item lg={1}>
                                                <Avatar style={{backgroundColor: "blue"}} component = {Link} to = {`/bills/${_id}`}><VisibilityTwoToneIcon/></Avatar>
                                            </Grid>
                                        </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default BillsItem