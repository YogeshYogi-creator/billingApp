import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {removeProduct} from '../../actions/userActions' 
import {Link} from 'react-router-dom'
import EditProduct from './EditProduct'

import {Container, TextField, Grid, 
        Paper, Avatar, Button, Typography,
        List, ListItem, ListItemText} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
const ProductsItem = (props) => {
    const dispatch = useDispatch()
    const {_id, name, price, user, createdAt, updatedAT} = props
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleRemove = () => {
        dispatch(removeProduct(_id))
    }
    return(
        <Container>
            {toggle?(
                <Grid>
                    <Paper>
                        <EditProduct id={_id} name={name} price={price} handleToggle={handleToggle}/>
                        <button onClick = {handleToggle}>cancle</button>
                    </Paper>
                </Grid>
            ):(
                <Grid>
                    <Paper>
                        <List>
                            <ListItem>
                                <ListItemText style = {{textAlign: "center"}}>
                                    <Link to = {`/products/${_id}`}><Typography variant = "h5">{name}</Typography></Link> <br/>
                                    <Grid style = {{display: "flex", flexDirection: "row", position: "relative", top: "5px"}}>
                                        <Grid> <Avatar style={{backgroundColor: "red", marginRight:"10px"}} onClick = {handleRemove}><DeleteTwoToneIcon/></Avatar></Grid>
                                        <Grid><Avatar style={{backgroundColor: "green", marginRight:"10px"}} onClick = {handleToggle} ><EditIcon/></Avatar></Grid>
                                    </Grid>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            )}

        </Container>
    )
}
export default ProductsItem