
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from 'next/image';
import useRPS from '@/hooks/use-rps';
import Circle from '@/Components/circle';
import Result from '@/Components/result';
import Button from 'react-bootstrap/Button';
import orgRules from '../public/images/image-rules.svg'
import bonusRules from '../public/images/image-rules-bonus.svg'
import { useState } from 'react';
import RulesModal from '@/Components/modal';
import Score from '@/Components/score';
import { Box, Grid } from '@mui/material';
import Head from 'next/head';


export default function Home() {
  const {changeGameType, end, state, battle, me, host, playAgain} = useRPS()
  const [modalShow, setModalShow] = useState(false);
  const orgSizes = [{left:'0',top:'0'},{left:'50%',top:'100%'},{left:'100%',top:'0'}]
  const bonusSizes = [{left:'50%',top: '0'},{left:'100%',top:'40%'},{left:'80%',top:'100%'},{left:'20%',top:'100%'},{left:'0',top:'40%'}]
  const colors=['info','warning','danger','primary','success']
  const org = state.org

  return (
    <> 
      <Head>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <title>Rock Paper Scissor</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head> 
      <Grid container direction='column' justifyContent='space-between' alignItems='center' className='p-4' sx={{backgroundColor:'hsl(214, 47%, 23%)',height:'100vh',width:'100vw'}}>
        <Score score={state.score} org={org}/>
        {/* original and bonus buttons */}
        {!end ? 
        (<Box sx={{position:'relative'}}>
          <Grid sx={{position:'relative'}} height={org ?{sm:200, xs:180}:{sm:230,xs:200}} width={org ?{sm:230, xs:200}:{sm:230,xs:200}}>          
            <Image fill alt='' src={org ? state.triangle :state.pentagon}/>
          </Grid>
          {org ? (
            state.orgChoises.map((x, index)=>{
            return <Circle key={x.id} color={colors[index]} org={org} icon={x.icon} onClick={()=>battle(x.id)} styles={orgSizes[index]}/>
          })
          ) 
          : (state.bonusChoises.map((x, index)=>{
            return <Circle key={x.id} color={colors[index]} org={org} icon={x.icon} onClick={()=>battle(x.id)} styles={bonusSizes[index]}/>
          }))}
        </Box>)
        : <Result onClick={playAgain} me={me} host={host} result={state.result}/>}
      
        <Box className='clearfix align-self-stretch'>
          <Button size='lg' variant="outline-light" className='float-end' onClick={() => setModalShow(true)}>
            RULES
          </Button>
          <Button size='lg' variant="outline-light" onClick={changeGameType} className='float-start'>
            {org ? 'GO TO BONUS' : 'GO TO ORIGINAL'}
          </Button>
        </Box>
        {/* modal */}
        <RulesModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          rule={org ? orgRules : bonusRules}
        />
      </Grid>
    </>
  )
}


