import React, {useState} from 'react'
import ProductsItem from './ProductsItem'
import {useSelector} from 'react-redux'

import {Grid, Container, Typography} from '@material-ui/core'
const ProductsList = (props) => {
    const [searchInput, setSearchInput] = useState('')
    // const {data} = props
    
    let data = useSelector((state)=>{
        return state.products
    })
    console.log('products', data)
    
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
    const searchDiv = {
        position: "relative",
        top: 40
    } 
    return (
        <Container>
            <Grid style = {searchDiv} xs={12} sm={6}>
                <input style = {searchText} label="search" type = "text" value = {searchInput} onChange = {handleSearchChange} placeholder = "search by name" />
            </Grid>
            <Grid style = {{position: "relative", top: 45}}>
                {data.map(ele=>{
                    return <ProductsItem key = {ele._id} {...ele}/>
                })}
            </Grid>
        </Container>
    )
}
export default ProductsList