import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCustomer} from '../../actions/userActions'
import EditCustomer from './EditCustomer'

import {Container, TextField, Grid, 
        Paper, Avatar, Button, Typography,
        List, ListItem, ListItemText} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import IconButton from '@material-ui/core/IconButton'
const CustomersItem = (props) => {
    const {_id, name, mobile, email, user, createdAt, updatedAt} = props
    console.log(_id)
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleRemove = () => {
        dispatch(removeCustomer(_id))
    }
    return (
        <Container>
            {toggle ? (
                <Grid style = {{position: "relative", bottom: "40px"}}>
                    <EditCustomer id = {_id} name={name} mobile={mobile} email={email} 
                        user={user} createdAt={createdAt} updatedAt={updatedAt} 
                        handleToggle = {handleToggle}
                        />
                    <Button style = {{position: "relative", left: "30px", top: "40px"}} onClick = {handleToggle}>cancle</Button>
                </Grid>
            ):(
                <Grid>
                    <Paper>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Link style={{marginRight:"20px"}} to = {`/customers/${_id}`}><Typography variant = "h5">{name}</Typography></Link>
                                    <div style = {{display: "flex", flexDirection: "row", position: "relative", top: "5px"}}>    
                                        <div><IconButton style={{backgroundColor: "#e67e22", marginRight:"10px"}} onClick = {handleRemove}><DeleteTwoToneIcon/></IconButton></div>
                                        <div><IconButton style={{backgroundColor: "lightblue", marginRight:"10px"}} onClick = {handleToggle} ><EditIcon/></IconButton></div>
                                    </div>                             
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            )}
        </Container>
    )
}
export default CustomersItem