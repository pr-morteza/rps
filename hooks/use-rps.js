import { useReducer, useState } from "react";
import triangle from '../public/images/bg-triangle.svg';
import pentagon from '../public/images/bg-pentagon.svg';
import paper from '../public/images/icon-paper.svg';
import rock from '../public/images/icon-rock.svg';
import scissor from '../public/images/icon-scissors.svg'
import lizard from '../public/images/icon-lizard.svg'
import spock from '../public/images/icon-spock.svg'


function reducer(state,action) { 
    let me= action.payload.me
    let hostId=action.payload.hostId
    let hostWeekness = action.payload.hostWeekness
    
    switch (action.type) {
        case 'choose':
            if(me===hostId){
                return {...state, result:'PARALLEL'}
            }
            if(hostWeekness.includes(me)){
                return {...state, result:'YOU WIN', score: state.score+1}
            }else{
                return {...state, result:'YOU LOSE'}
            }
        case 'play-again':
            return {...action.payload, score:state.score}
        case 'change-game-type':
            return {...action.payload}
        default:
            break;
    }
}

export default function useRPS() {
    const orgChoises = [{id:'paper', icon:paper, weekness:['scissor']},{id:'rock', icon:rock, weekness:['paper']},{id:'scissor', icon:scissor, weekness:['rock']}]
    const bonusChoises = [{id:'paper', icon:paper, weekness:['scissor','lizard']},{id:'rock', icon:rock, weekness:['paper','spock']},{id:'scissor', icon:scissor, weekness:['rock','spock']},{id:'lizard', icon:lizard, weekness:['rock','scissor']},{id:'spock', icon:spock, weekness:['paper','lizard']}]
    const orgInit = {triangle, org: true, result:'', score:0, orgChoises}
    const bonusInit = {pentagon, org: false, result:'', score:0, bonusChoises}
    const [end, setEnd] = useState(false)
    const [me, setMe] = useState(null)
    const [host , setHost] = useState(null)
    
    const[state,dispatch]=useReducer(reducer,orgInit)
    const battle=(l)=>{
        let host = state.org ? orgChoises[Math.round((Math.random()*2))] 
        : bonusChoises[Math.round((Math.random()*4))]

        setEnd(true)
        setMe((state.org ? orgChoises : bonusChoises).find(x=>x.id===l).icon)
        setHost(host.icon)
        return dispatch({type:'choose',payload:{me:l, hostId:host.id, hostWeekness:host.weekness}})
    }
    const playAgain=()=>{
        setEnd(false)
        return dispatch({type:'play-again',payload: state.org ? orgInit : bonusInit})
    }
    const changeGameType=()=>{
        setEnd(false)
        return dispatch({type:'change-game-type',payload: state.org ? bonusInit : orgInit}) 
    }
    

    return {changeGameType,me,host,state,battle,end,playAgain}
}