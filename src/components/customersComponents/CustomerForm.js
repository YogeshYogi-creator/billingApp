import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {startAddCustomer, editCustomer} from '../../actions/userActions'

import {Container, TextField, Grid, Paper, Avatar, Button, Typography} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const CustomerForm = (props) => {
    const {id, name: ame, number: mobile, email: mail, user, createdAt, updatedAt, handleToggle} = props
    console.log('ame', ame)
    const dispatch = useDispatch()
    const [name, setName] = useState(ame?ame:'')
    const [number, setNumber] = useState(mobile?mobile:'')
    const [email, setEmail] = useState(mail?mail:'')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleCustomerName = (e) => {
        setName(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const runValidation = () => {
        if(name.trim().length === 0){
            errors.name = 'name cannot be empty'
        }
        if(number.trim().length === 0){
            errors.number = 'phone number cannot be empty'
        }
        if(email.trim().length === 0){
            errors.email = 'email cannot be empty'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        runValidation()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                name: name,
                mobile: Number(number),
                email: email
            }
            if(handleToggle){
                console.log(formData)
                dispatch(editCustomer(formData, id))
                handleToggle()
            } else {
                dispatch(startAddCustomer(formData))
            }
        }else{
            setFormErrors(errors)
        }

        //Reset Form
        setName('')
        setNumber('')
        setEmail('')
    }
    const paperStyle = { padding: 20 }
    const avatarStyle = {backgroundColor: 'green'}
    return (
        <Container>
            <center>
            <Grid style = {{position: "relative", top: 20}}>
                <form onSubmit = {handleSubmit}>
                    <Paper style = {paperStyle}>
                        <Grid>
                            <Avatar style = {avatarStyle}><AccountCircleIcon/></Avatar>
                            {ame ? <h2>Edit Form</h2> : <h1>Add a customer</h1>}
                        </Grid>
                            <TextField label = "Customer Name" type = 'text' value = {name} onChange = {handleCustomerName} placeholder = 'customer name' fullWidth/>
                            {formErrors.name && <span style = {{color: "red"}}>{formErrors.name}</span>}
                            <br/>
                            <TextField label = "Phone Number" type = 'number' value = {number} onChange = {handleNumberChange} placeholder = 'phone number' fullWidth/>
                            {formErrors.number && <span style = {{color: "red"}}>{formErrors.number}</span>}
                            <br/>
                            <TextField label = "Email" type = 'email' value = {email} onChange = {handleEmailChange} placeholder = 'email' fullWidth/>
                            {formErrors.email && <span style = {{color: "red"}}>{formErrors.email}</span>}
                            <br/>
                            <Button type = 'submit' value = 'Add' color = 'primary' variant="contained"  style = {{position: 'relative', top:10}}>Add</Button>
                    </Paper>
            </form>
            </Grid>
            </center>
        </Container>
    )
}
export default CustomerForm