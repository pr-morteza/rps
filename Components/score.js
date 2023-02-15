import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Col } from "react-bootstrap";

export default function Score({score, org}){
    return(            
    <Col md={6} xs={12}>
        <Grid item container justifyContent='space-between' className='border border-secondary border-3 rounded-4 p-3'>
            <Grid item xs={2} sx={{lineHeight:'0.8',wordBreak: 'keep-all',fontSize:'1.6rem' }} className=" text-white ">
                {org ? 'ROCK PAPER SCISSORS' : 'ROCK PAPER SCISSORS LIZARD SPOCK'}
            </Grid>
            <Box className='rounded text-center bg-light col-3'>
                SCORE
                <Typography variant="h2" color='GrayText' className='m-0 font'>{score}</Typography>
            </Box>
        </Grid>
    </Col>
    )
}
        