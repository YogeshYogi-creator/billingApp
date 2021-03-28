import React from 'react'
import Chart from "react-google-charts"
import {Container, Grid, Typography} from '@material-ui/core'
import {useSelector} from 'react-redux'
const Graph = (props) => {
    let customerData = useSelector((state)=>{
        return state.customers.length
    })
    console.log('customer length', customerData)

    let productsData = useSelector((state)=>{
        return state.products.length
    })
    console.log('products length', productsData)

    let billsData = useSelector((state)=>{
        return state.bills.length
    })
    console.log('bills length', billsData)
    return (
        <Container>
            
                <Grid>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Title', 'Progress'],
                            [`Customer's`, customerData],
                            [`Product's`, productsData],
                            [`Order's`, billsData],
                        ]}
                        options={{
                            title: 'Sales Progress',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </Grid>

        </Container>
    )
}
export default Graph