import axios from 'axios'
import swal from 'sweetalert'
// userRegistraion api call
export const startRegisterData = (formData, navigate) => {
    return(dispatch)=> {
        axios.post('https://dct-billing-app.herokuapp.com/api/users/register', formData)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                swal('error',result.message)
            }else{
                swal('successfully registered')
                console.log(result)
                dispatch(registerationData(result))
                navigate('/userLogin')
            }
        })
        .catch((err)=> {
            console.log('catch Error', err.meaasge)
        })
    }
}
export const registerationData = (data) => {
    return {
        type: "REGESTER_DATA",
        payload: data
    }
}


// clear store
export const clearStore = () => {
    return{
        type: "CLEAR"
    }
}

// User Profile API Call
export const startGetUsers = () => {
    return(dispatch)=> {
        axios.get('https://dct-billing-app.herokuapp.com/api/users/account', {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(getUsers(result))
        })
        .catch((err)=>{
            swal(err.message)
        })
    }
}
export const getUsers = (data) => {
    return {
        type: "USER_PROFILE",
        payload: data
    }
}

//Create Customer API Call
export const startAddCustomer = (formData) => {
    return(dispatch)=> {
        axios.post('https://dct-billing-app.herokuapp.com/api/customers', formData, {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            console.log('result from api', result)
            swal('successfully created a customer', result)
            dispatch(customers(result))
        })
        .catch((err)=> {
            console.log(err.message)
        })
    }
}
export const customers = (data) => {
    return{
        type: "ADD_CUSTOMER",
        payload: data
    }
}

// GET_ALL_Customer API Call
export const startGetCustomers = () => {
    return(dispatch)=> {
        axios.get('https://dct-billing-app.herokuapp.com/api/customers', {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=> {
            const result = response.data
            if(Object.keys(result).includes('errors')){
                console.log(result.message)
            }else{
                console.log(result)
                dispatch(getCustomers(result))
            }  
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}
export const getCustomers = (data) => {
    return{
        type: "GET_CUSTOMERS",
        payload: data
    }
}


//  Add Products API CALL
export const startAddProducts = (formData) => {
    return(dispatch)=> {
        axios.post('https://dct-billing-app.herokuapp.com/api/products', formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result= response.data
            swal(`${result.name} successfully added`)
            dispatch(addProducts(result))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}
export const addProducts = (data) => {
    return{
        type: "ADD_PRODUCTS",
        payload: data
    }
}

// Getting Products API CALL
export const startGetProducts = () =>{
    return(dispatch)=>{
        axios.get('https://dct-billing-app.herokuapp.com/api/products', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result= response.data
            dispatch(getProducts(result))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}
export const getProducts = (data) => {
    return{
        type: "GET_PRODUCTS",
        payload: data
    }
}

//Add Bills API CALL
export const startAddBills = (formData) => {
    return(dispatch)=> {
        axios.post('https://dct-billing-app.herokuapp.com/api/bills', formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            // console.log(result)
            dispatch(addBills(result))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}
export const addBills = (data) => {
    return{
        type: "ADD_BILLS",
        payload: data
    }
}

//GET Bill's API CALL
export const startGetBills = () => {
    return(dispatch)=> {
        axios.get('https://dct-billing-app.herokuapp.com/api/bills', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=> {
            const result = response.data
            dispatch(getBills(result))
        })
        .catch((err)=> {
            console.log(err.message)
        })
    }
}
export const getBills = (data) => {
    return{
        type:"GET_BILLS",
        payload:data
    }
}

// Remove a Customer API CALL
export const removeCustomer = (id) => {
    return(dispatch)=>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/customers/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            swal(`${result.name} has removed successfully`)
            dispatch(remove_Customer(id)) 
        })
        .catch((err)=>{
            swal(err.message)
        })
    }
}
export const remove_Customer = (id) =>{
    return{
        type: "REMOVE_CUSTOMER",
        payload: id
    }
}
// Product Remove API CALL
export const removeProduct = (id) => {
    return(dispatch)=>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/products/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            swal(`${result.name} has removed successfully`)
            dispatch(remove_Product(id))
        })
        .catch((err)=>{
            swal(err.message)
        })
    }
}
export const remove_Product = (id) => {
    return{
        type: "REMOVE_PRODUCT",
        payload: id
    }
}

export const removeBill = (id) => {
    return(dispatch)=>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/bills/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            swal(`bill has removed successfully`)
            dispatch(remove_Bill(id))
        })
        .catch((err)=>{
            swal(err.message)
        })
    }
}
export const remove_Bill = (id) => {
    return{
        type: "REMOVE_BILL",
        payload: id
    }
}



//Customer Edit
export const editCustomer = (formData, id) => {
    return(dispatch)=>{
        axios.put(`https://dct-billing-app.herokuapp.com/api/customers/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            console.log('editData',result)
            dispatch(edit_Customer(result))
        })
        .catch((err)=>{
            swal(err.message)
        })
    }
}
export const edit_Customer = (data)=>{
    return{
        type: "EDIT_CUSTOMER",
        payload: data
    }
}

//Products Edit
export const editProduct = (formData, id) => {
    return(dispatch)=>{
        axios.put(`https://dct-billing-app.herokuapp.com/api/products/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(edit_Product(result))
        })
        .catch((err)=>{
            swal(err.message)
        })
    }
}
export const edit_Product = (data)=>{
    return{
        type: "EDIT_PRODUCT",
        payload: data
    }
}

export const editBill = (formData, id) => {
    return(dispatch)=>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/bills/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(edit_Bill(result))
        })
        .catch((err)=>{
            swal(err.message)
        })
    }
}
const edit_Bill = (data) => {
    return{
        type: "EDIT_BILL",
        payload: data
    }
}