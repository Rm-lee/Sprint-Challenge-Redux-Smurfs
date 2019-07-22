import axios from 'axios'
export const ADDSMURF = "ADDSMURF"
export const GETSMURF = "GETSMURF"


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/




export function getSmurf() {
  return (dispatch) => {
    axios.get('http://localhost:3333/smurfs/')
    .then((response) => {
     dispatch({type: GETSMURF, payload:response.data})
    })
   
    
  }
}


export function addsmurf(){
  return(dispatch) => {
    axios.post('http://localhost:3333/smurfs/')
    .then((response) => {
      dispatch({type: ADDSMURF, payload:response.data})
    })
  }
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
