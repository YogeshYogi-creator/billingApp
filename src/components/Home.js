import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
const Home = (props) => {

    return (
        <Container>
            <center>
                <Grid style = {{position: "relative", top: 100}}>
                    <Typography color = "inherit" variant = "h2" >Welcome to BILLit</Typography>
                </Grid>
            </center>
        </Container>
    )
}
export default Home