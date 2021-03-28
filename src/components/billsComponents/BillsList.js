import React, {useState} from 'react'
import BillsItem from './BillsItem'
import {useSelector} from 'react-redux'
import { Container, Grid, Typography } from '@material-ui/core'
const BillsList = (props) => {
    const [searchInput, setSearchInput] = useState('')
    let data = useSelector((state)=> {
        return state.bills
    })
    console.log(data)
        const handleSearchChange = (e) => {
        setSearchInput(e.target.value)
    }
    if(searchInput.length > 0){
        data = data.filter((ele)=>{
            return ele.customer.toLocaleLowerCase().match(searchInput.toLocaleLowerCase())
        })
    }

    const searchText = {
        height: 35,
        width: 300
    }
    const searchDiv = {
        position: "relative",
        top: 30
    } 
    return (
        <Container>
            <Grid style = {searchDiv} xs={12} sm={6}>
                <input style = {searchText} label="search" type = "text" value = {searchInput} onChange = {handleSearchChange} placeholder = "search by customer_Id" />
            </Grid>
            <Grid style = {{position: "relative", top: 40}}>
                <Grid>
                    {data.map(ele=>{
                        return <BillsItem key = {ele._id} {...ele}/>
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}
export default BillsList