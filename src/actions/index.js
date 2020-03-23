//export const INCREMENT = 'INCREMENT'
//export const DECREMENT = 'DECREMENT'
/*
export const increment =()=>(
    {
    type:'INCREMENT'
    }
)

export const decrement=()=>(
    {
    type:'DECREMENT'
    }
)
*/
import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'
export const readEvents = () => async dispatch=>{
    //const response = await axios.get('https://udemy-utils.herokuapp.com/api/v1/events?token=token123')
    const response = await axios.get(ROOT_URL+ '/events' + QUERYSTRING)
    //console.log(response)
    dispatch({type:READ_EVENTS,response})
}
export const postEvent = values => async dispatch=>{
    console.log("hi",values)
    const response = await axios.post(ROOT_URL+ '/events' + QUERYSTRING,values)
    dispatch({type:CREATE_EVENT,response})
}
