import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'


// const counterReducer =(state=initialState,action )=>{
//     if(action.type==="increment"){
//         return {
//             counter:state.counter+1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==="increase"){
//         return {
//             counter:state.counter+action.amount,
//             showCounter:state.showCounter
//         }
//     }
//        if(action.type==="decrement"){
//         return {
//             counter:state.counter-1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==="toggle"){
//         return {
//             showCounter:!state.showCounter,
//             counter:state.counter,
//         }
//     }
//     return state
// }

// const store=createStore(counterSlice.reducer)


const store = configureStore({
    // reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
    reducer: { counter: counterReducer, auth: authReducer }
})

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store
