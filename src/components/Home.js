import React from 'react'
import { Container, Grid, Typography, Paper } from '@material-ui/core'
const Home = (props) => {

    return (
        <Container>
            <center>
                <Grid style = {{position: "relative", top: 100}}>
                    <Paper style = {{backgroundColor: "lightblue"}}>
                    <Typography color = "inherit" variant = "h2" >Welcome to BILLit</Typography>
                    </Paper>
                    <Paper style = {{position: "relative", top: 20, backgroundColor: "lightblue"}}>
                        <Typography variant= "h6" style = {{position: "relative", left: 5, textAlign: "left"}}>
                            The project is used to generate bills and assist the user byproviding useful info about his product catalog, customerdatabase, and sales performance.<br/>
                            I was responsible for creating the entirety of the project
                            Some highlights of the project include using Redux tomanage state, set user authentication for various backendinteractions, used reusable components, and maintainedbest coding practices.
                            Packages used <br/>include Material UI, Axios, redux-thunk,Lodash, react-redux, validator.<br/>
                            Link's:<br/>
                            <a href="https://github.com/YogeshYogi-creator/billingApp" target="_blank">Project Link</a><br/>
                            <a href="https://github.com/YogeshYogi-creator" target="_blank">Github Profile</a><br/>
                            <a href="https://yogeshyogi-creator.github.io/billingApp/" target="_blank">Live App</a><br/>
                        </Typography>
                    </Paper>
                </Grid>

            </center>
        </Container>
    )
}
export default Home