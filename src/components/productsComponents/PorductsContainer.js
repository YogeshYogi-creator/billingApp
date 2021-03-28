import React, {useEffect} from 'react'

import {useDispatch} from 'react-redux'
import {startGetProducts} from '../../actions/userActions'
import ProductForm from './ProductForm'
import ProductsList from './ProductsList'

import { Container, Grid, Typography } from '@material-ui/core'
const ProductsComponents = (props) => {
    const dispatch = useDispatch()

    // const data = useSelector((state)=>{
    //     return state.products
    // })
    // console.log('products', data)

    useEffect(()=>{
        dispatch(startGetProducts())
    }, [dispatch])
    return (
        <Container>
            <Grid style = {{position: "relative", top: 20}} xs={12} sm={6}>
                    <Typography variant = "h4">Product's</Typography>
            </Grid>
            <Grid container directions = "row">
                <Grid xs={12} sm={6}>
                    <ProductForm/>
                </Grid>
                <Grid xs={12} sm={6}>
                    <ProductsList/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ProductsComponents