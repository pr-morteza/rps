import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Button, Col } from "react-bootstrap";


export default function Result({me, host, result,onClick}){
    return (
        <Col md={8}>
            <Grid container justifyContent='space-between' alignItems='center' className=' text-center text-white '>
                <Col md={4} xs={6} className="order-1">
                    <Grid item container  alignItems='center' direction={{sm:'column', xs:'column-reverse'}} >
                        <Typography marginY={3} variant='h6'>
                            YOU PICKED
                        </Typography>
                        <Paper elevation={10} className='d-flex justify-content-center align-items-center rounded-circle bg-light col-8' style={{aspectRatio : '1 / 1'}} >
                            <Image src={me} alt=''/>  
                        </Paper>
                    </Grid>
                </Col>

                <Col md={3} xs={8} className="text-white mt-md-0 mt-5 mx-auto order-md-2 order-3">
                    <Typography sx={{fontSize:'2.7rem',fontWeight:'700'}}>
                        {result}
                    </Typography> 
                    <Button variant="light" onClick={onClick} className="col-12">
                        <h4 className="p-0 m-0 text-secondary">
                        PLAY AGAIN
                        </h4>
                    </Button>
                </Col>

                <Col md={4} xs={6} className="order-md-3 order-2">
                    <Grid item container alignItems='center' direction={{sm:'column', xs:'column-reverse'}} >
                        <Typography variant='h6' marginY={3}>
                            THE HOUSE PICKED
                        </Typography>
                        <Paper elevation={10} className='d-flex justify-content-center align-items-center rounded-circle bg-light col-8' style={{aspectRatio : '1 / 1'}} >
                            <Image alt='' src={host} />  
                        </Paper>                 
                    </Grid>
                </Col>          
            </Grid>
        </Col>   
    )
}
