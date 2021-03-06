import React from 'react'
import BillsItem from './BillsItem'
import {useSelector} from 'react-redux'
import { Container, Grid } from '@material-ui/core'
const BillsList = (props) => {
    // const [searchInput, setSearchInput] = useState('')
    let data = useSelector((state)=> {
        return state.bills
    })
    console.log(data)
    
    return (
        <Container>
            <Grid style = {{position: "relative", top: 15, overflow: "scroll", height: "500px"}}>
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