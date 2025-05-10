import { Grid,Skeleton, Stack } from '@mui/material'
import React from 'react'

export const LayoutLoader = () => {
    return(
        <Grid container spacing={"1rem"} display={"flex"} flexDirection={"column"} height={"calc(100vh - 4px)"}>
                <Grid 
                item 
                sm={4} 
                md={3} 
                lg={2}
                sx={{
                    display:{xs:"none",sm:"block"},
                    }} 
                     >
                        <Skeleton variant='rectangular' height={"100vh"}/>
                    </Grid>
                <Grid item xs={12} sm={8} md={5} lg={7} height={"100%"}>
                    <Stack spacing={"1rem"}>
                    {
                        Array.from({length: 10}).map((_, index) => (
                            <Skeleton variant='rounded' height={"5rem"}/>
                        ))
                    }
                    </Stack>
                </Grid>
                <Grid item md={4} lg={3} height={"100%"}
                        sx={{display:{xs:"none", md:"block"},
                        }}>
                            <Skeleton variant='rectangular' height={"100vh"}/>
                </Grid>
            </Grid>
    )
}