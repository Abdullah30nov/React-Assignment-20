import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState={
    counter:0
}

const counterSlices = createSlice({
    name:'Counter',
    initialState,
    reducers:{
        addcounter:(state,actions)=>{
            state.counter =++state.counter
        },
        subcounter:(state,actions)=>{
            if(state.counter > 0) {
                state.counter =--state.counter
            }else{
                0
            }
        },
        resetcounter:(state,actions)=>{
            state.counter =0
        }
    }
})
const {actions,reducer}=counterSlices
export const {addcounter,subcounter,resetcounter} =actions
export default reducer