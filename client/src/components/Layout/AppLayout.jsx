import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'

const AppLayout = () =>(WrappedComponent) => {
  return (props)=>{
    return(
        <>
            <Title/>
            <Header/>

            <Grid container display={"flex"} flexDirection={"column"} height={"calc(100vh - 4px)"}>
                <Grid 
                item 
                sm={4} 
                md={3} 
                lg={2}
                sx={{
                    display:{xs:"none",sm:"block"},
                    }} 
                     >
                        First
                    </Grid>
                <Grid item bgcolor={"red"} xs={12} sm={8} md={5} lg={7} height={"100%"}>
                    <WrappedComponent {...props}/>
                </Grid>
                <Grid item md={4} lg={3} height={"100%"}
                        sx={{display:{xs:"none", md:"block"},
                        padding:"2rem",
                        bgcolor:"rgba(0,0,0,0.85)"}}>
                            Third
                </Grid>
            </Grid>
        </>
    )
  }
}

export default AppLayout