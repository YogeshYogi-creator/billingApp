import React, {useState} from 'react'
import CustomersItem from './CustomersItem'
import {useSelector} from 'react-redux'

import {Container, Grid, TextField, Typography} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
const CustomersList = (props) => {
    const [searchInput, setSearchInput] = useState('')
    // const {data} = props
    // const dispatch = useDispatch()
    let data = useSelector((state)=>{
        return state.customers
        })
    console.log('customerList', data)
    
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value)
    }
    if(searchInput.length > 0){
        data = data.filter((ele)=>{
            return ele.name.toLocaleLowerCase().match(searchInput.toLocaleLowerCase())
        })
    }

    const searchText = {
        height: 35,
        width: 300
    }
    return (
        <Container>
                
            <Grid xs={12} sm={6}>
                <input style = {searchText} label="search" type = "text" value = {searchInput} onChange = {handleSearchChange} placeholder = "search by name" />
            </Grid>
                
            <Grid style = {{position: "relative", top: 10}}>
                {data.map(ele=>{
                    // return <CustomersItem key = {ele._id} {...ele}/>
                    return <CustomersItem key = {ele._id} {...ele}/>
                })}
            </Grid>
        </Container>
    )
}
export default CustomersList