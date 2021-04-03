import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'

import {Container, TextField, Grid, Paper, Avatar, Button, Typography} from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen';
// import {startLoginData} from '../../actions/userActions'

const UserLogin = (props) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginErrors, setLoginErrors] = useState({})
    const errors = {}
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const runValidations = () => {
        if(email.trim().length === 0){
            errors.email = 'email is required'
        }
        if(password.trim().length === 0){
            errors.password = 'password is required'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()
        if(Object.keys(errors).length === 0){
            setLoginErrors({})
            const formData = {
                email: email,
                password: password
            }
        
        axios.post('https://dct-billing-app.herokuapp.com/api/users/login', formData)
        .then((response)=> {
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            }else{
                swal('successfully Logged-in')
                localStorage.setItem('token', result.token)
                props.history.push('/userDashboard')
                props.handleLoggedIn()
            }
        })
        .catch((err)=>{
            console.log('catch error', err.message)
        })
        }else{
            setLoginErrors(errors)
        }
        //Reset Form
        setEmail('')
        setPassword('')
    }

    const paperStyle = {padding: 20, height: '70vh', width:280, margin: "20, auto" }
    const avatarStyle = {backgroundColor: 'green'}
    return (
        <Container>
            <Grid container>
                <Grid>
                    <Typography color = "inherit" variant = "h4">Login Details:</Typography>
                    <Typography color = "inherit" variant = "p">Email Id: yogesh11@gmail.com</Typography><br/>
                    <Typography color = "inherit" variant = "p">Password: 123123123</Typography>
                </Grid>
                
            <center>
            <Grid xs={12} sm={6}>
            <form onSubmit = {handleSubmit} style = {{position: 'relative', top:15}}>
                <Paper elevation = {10} style = {paperStyle}>
                    <Grid>
                    <Avatar style = {avatarStyle}><LockOpenIcon/></Avatar>
                    <h1>Login</h1>
                    </Grid>
                        <TextField value = {email} onChange = {handleEmailChange} label = 'email' type = "email" placeholder = 'email' fullWidth required/>
                        {loginErrors.email && <span>{loginErrors.email}</span>}
                        <TextField value = {password} onChange = {handlePasswordChange} label = 'password' placeholder = 'password' type = 'password' fullWidth required/>
                        {loginErrors.password && <span>{loginErrors.email}</span>}
                        <Button type = 'submit' color = 'primary' variant="contained"  style = {{position: 'relative', top:10}} fullWidth>Login</Button>
                        <Typography>
                            <p>If you don't have an account!</p>
                            <Link to = '/userRegister'>Register</Link>
                        </Typography>
                </Paper>
         </form>
            </Grid>
         </center>
         </Grid>
        </Container>
    )
}
export default UserLogin