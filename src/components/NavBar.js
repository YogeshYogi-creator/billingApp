import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {clearStore} from '../actions/userActions'
import Home from './Home'
//User Components
import UserRegister from './userComponents/UserRegister'
import UserLogin from './userComponents/UserLogin'
import UserProfile from './userComponents/UserProfile'
import UserDashboard from './userComponents/UserDashboard'
//Customer Components
import CustomerContainer from '../components/customersComponents/CustomerContainer'
import UniqueCustomer from '../components/customersComponents/UniqueCustomer'
//Products Components
import ProductsContainer from './productsComponents/PorductsContainer'
import UniqueProduct from './productsComponents/UniqueProduct'
//Bills Components
import BillsContainerComponent from './billsComponents/BillsContainerComponent'
import UniqueBill from './billsComponents/UniqueBill'
//sweet alert
import swal from 'sweetalert'
//Material-UI
import {Container, Avatar, makeStyles, Grid, Paper, Toolbar, Typography, AppBar, Button, IconButton, Menu, MenuItem} from '@material-ui/core'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const NavBar = (props) => {
    const {loggedIn, handleLoggedIn, history} = props
    const dispatch = useDispatch()


    const logOut = ()=>{
        //removing the token from the localstorage
        dispatch(clearStore())
        localStorage.removeItem('token')
        swal('you are successfully logged out ')
        handleLoggedIn()
        history.push('/userLogin')
    }

    const navStyle = {
        position: "relative",
        left: 20
    }

    return (
        <Grid>
            {
                loggedIn?(
                    <Container disableGutters>
                        <Grid>
                            <Paper >
                                <Grid item lg={2} >
                                    <Typography style = {{color: "blue"}}variant = "h2">BILLit</Typography>
                                </Grid>
                                <Grid container direction="row">
                                    <Grid item lg={2} style = {navStyle}><Button startIcon={<HomeTwoToneIcon />} component = {Link} to = "/">Home</Button></Grid>
                                    <Grid item lg={2} style = {navStyle}><Button startIcon={<DashboardTwoToneIcon/>}component = {Link} to = "/userDashboard">Dashboard</Button></Grid>
                                    <Grid item lg={2} style = {navStyle}><Button startIcon={<AccountBoxTwoToneIcon/>} component = {Link} to = "/userProfile">Profile</Button></Grid>
                                    <Grid item lg={2} style = {navStyle}><Button startIcon={<ExitToAppTwoToneIcon/>}component = {Link} to = "/" onClick={logOut}>Logout</Button></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    </Container>                                                         
                ):(
                    <Container>
                        <Grid item lg={2} >
                            <Typography variant = "h2" style = {{color: "blue"}}>BILLit</Typography>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item lg={2} style = {navStyle}><Button startIcon={<HomeTwoToneIcon />} component = {Link} to = "/" >Home</Button></Grid>
                            <Grid item lg={2} style = {navStyle}><Button startIcon={<PersonAddRoundedIcon/>} component = {Link} to = "/userRegister" >Register</Button></Grid>
                            <Grid item lg={2} style = {navStyle}><Button startIcon={<LockOpenTwoToneIcon/>} component = {Link} to = "/userLogin" >Login</Button></Grid>
                        </Grid>
                    </Container>
                )
            }
            
            <Route path = '/' component = {Home} exact = {true}/>
            <Route path = '/userRegister' component = {UserRegister}/>
            <Route path = "/userLogin" render ={(props)=>{
                    return <UserLogin {...props} handleLoggedIn = {handleLoggedIn}/>
                }}/>
            <Route path = '/userDashboard' component = {UserDashboard}/>
            <Route path = '/userProfile' component = {UserProfile} exact = {true}/>
            <Route path = '/customers' component = {CustomerContainer} exact = {true}/>
            <Route path = '/customers/:id' component = {UniqueCustomer}/>
            <Route path = '/products' component = {ProductsContainer} exact = {true}/>
            <Route path = '/products/:id' component = {UniqueProduct}/>
            <Route path = '/bills' component = {BillsContainerComponent} exact = {true}/>
            <Route path = '/bills/:id' component = {UniqueBill}/>
        </Grid>
    )
}
export default withRouter(NavBar)