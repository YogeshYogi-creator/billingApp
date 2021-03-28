import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {startRegisterData} from '../../actions/userActions'


import {Link} from 'react-router-dom'
import {Container, TextField, Grid, Paper, Avatar, Button, Typography} from '@material-ui/core'
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
const UserRegister = (props) => {
    const dispatch = useDispatch()
    const [username, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userBusinessName, setUserBusinessName] = useState('')
    const [userAddress, setUserAddress] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setUserEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value)
    }
    const handleBusinessChange = (e) => {
        setUserBusinessName(e.target.value)
    }
    const handleAddressChange = (e) => {
        setUserAddress(e.target.value)
    }

    //Validations
    const runValidations = () => {
        if(username.trim().length === 0){
            errors.username = 'name cannot be blank'
        }
        else if(username.trim().length < 6){
            errors.username = 'name must contain atleast 6 charactors'
        }
        if(userEmail.trim().length === 0){
            errors.userEmail = 'email cannot be blank'
        }
        if(userPassword.trim().length === 0){
            errors.userPassword = 'password cannot be blank'
        }
        if(userPassword.trim().lenght < 6){
            errors.userPassword = 'password must contain atleast 6 charactors'
        }
        if(userBusinessName.trim().length === 0){
            errors.userBusinessName = 'bussiness cannot be blank'
        }
        if(userAddress.trimEnd().length === 0){
            errors.userAddress = 'address cannot be blank'
        }
    }
    //Form Submit
    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()
        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                username: username,
                email: userEmail,
                password: userPassword,
                businessName: userBusinessName,
                address: userAddress
            }
            dispatch(startRegisterData(formData, props.history.push))
        }else{
            setFormErrors(errors)
        }

        setUserName('')
        setUserEmail('')
        setUserPassword('')
        setUserBusinessName('')
        setUserAddress('')
    }
//Material UI CSS3
    const paperStyle = {padding: 20, height: '95vh', width:280, margin: "20, auto" }
    const avatarStyle = {color: 'green'}

    return (
        <Container>
                <center>
                    <form onSubmit = {handleSubmit} style = {{position: 'relative', top:15}}>
                <Grid>
                    <Paper elevation = {10} style = {paperStyle}>
                    <Grid>
                        <Avatar style = {avatarStyle}><PersonAddRoundedIcon/></Avatar>
                        <h1>Register</h1>
                    </Grid>
                        <TextField label = 'user name' value = {username} onChange = {handleUserName} placeholder = 'user name' fullWidth/>
                        {formErrors.username && <span style = {{color: "red"}}>{formErrors.username}</span>}
                        <TextField label = "email" type = 'email' value = {userEmail} onChange = {handleEmailChange} placeholder = 'email'  fullWidth/>
                        {formErrors.userEmail && <span style = {{color: "red"}}>{formErrors.userEmail}</span>}
                        <TextField label = "password" type = 'password' value = {userPassword} onChange = {handlePasswordChange} placeholder = 'password' fullWidth/>
                        {formErrors.userPassword && <span style = {{color: "red"}}>{formErrors.userPassword}</span>}
                        <TextField label = "business" type = 'text' value = {userBusinessName} onChange = {handleBusinessChange} placeholder = 'business name' fullWidth/>
                        {formErrors.userBusinessName && <span style = {{color: "red"}}>{formErrors.userBusinessName}</span>}
                        <TextField label = "address" type = 'text' value = {userAddress} onChange = {handleAddressChange} placeholder = 'address' multiline fullWidth/>
                        {formErrors.userAddress && <span style = {{color: "red"}}>{formErrors.userAddress}</span>}
                        <Button type = 'submit' color = 'primary' variant="contained"  style = {{position: 'relative', top:10}} fullWidth>Register</Button>
                    <Typography style = {{position: 'relative', top:20}}>
                        Already a user?
                        <Link to = '/userLogin'>Login</Link>
                    </Typography>
                    </Paper>
                </Grid>
            </form>
        </center>
    </Container>
    )
}
export default UserRegister